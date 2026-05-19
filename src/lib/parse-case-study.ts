import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import matter from "gray-matter";
import { transformAssetPath } from "./transform-asset-path";

export interface Frontmatter {
  title: string;
  description: string;
  tags: string[];
  themeColor: string;
  themeGradient: string;
  heroImage: string;
}

export type SectionKind =
  | "narrative"
  | "wide"
  | "theme-banner"
  | "image-banner"
  | "case-study-body"
  | "footer"
  | null;

export interface DirectiveAttrs {
  [key: string]: string | string[] | number | boolean;
}

interface BlockBase {
  section: SectionKind;
  sectionAttrs?: DirectiveAttrs;
}

export type Block =
  | (BlockBase & { kind: "markdown"; content: string })
  | (BlockBase & { kind: "project-hero"; attrs: DirectiveAttrs })
  | (BlockBase & { kind: "sub-nav"; attrs: DirectiveAttrs })
  | (BlockBase & { kind: "wave-divider"; attrs: DirectiveAttrs })
  | (BlockBase & { kind: "related-projects"; attrs: DirectiveAttrs })
  | (BlockBase & { kind: "card-grid"; attrs: DirectiveAttrs; content: string })
  | (BlockBase & { kind: "image-gallery"; attrs: DirectiveAttrs; content: string })
  | (BlockBase & { kind: "caption"; attrs: DirectiveAttrs; content: string })
  | (BlockBase & { kind: "stepper"; attrs: DirectiveAttrs; content: string })
  | (BlockBase & { kind: "content-split"; attrs: DirectiveAttrs; content: string });

export interface ParsedCaseStudy {
  frontmatter: Frontmatter;
  blocks: Block[];
}

const STANDALONE_TYPES = new Set([
  "project-hero",
  "sub-nav",
  "wave-divider",
  "related-projects",
]);

const SECTION_KINDS: Record<string, SectionKind> = {
  narrative: "narrative",
  wide: "wide",
  "theme-banner": "theme-banner",
  "image-banner": "image-banner",
  "case-study-body": "case-study-body",
  footer: "footer",
};

/** Parse a single directive line like `{ section="narrative" }` or `{ type="card-grid", cols="2" }`. */
function parseDirective(line: string): DirectiveAttrs | null {
  const trimmed = line.trim();
  if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) return null;
  const inner = trimmed.slice(1, -1).trim();
  const attrs: DirectiveAttrs = {};
  // Match key=value where value is "string", [array], or bareword (true/false/number)
  const re = /(\w+(?:-\w+)*)\s*=\s*(?:"([^"]*)"|(\[[^\]]*\])|([\w.-]+))/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(inner)) !== null) {
    const key = m[1];
    if (m[2] !== undefined) {
      attrs[key] = m[2];
    } else if (m[3] !== undefined) {
      const arr = m[3]
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      attrs[key] = arr;
    } else if (m[4] !== undefined) {
      const v = m[4];
      if (v === "true") attrs[key] = true;
      else if (v === "false") attrs[key] = false;
      else if (!isNaN(Number(v))) attrs[key] = Number(v);
      else attrs[key] = v;
    }
  }
  return attrs;
}

/**
 * Pre-process body: collapse multi-line `{ ... }` directives onto one line.
 * Otherwise the line-by-line parser misses directives like the sub-nav block,
 * which spreads attrs across 5 lines.
 */
function joinMultilineDirectives(body: string): string {
  const lines = body.split("\n");
  const out: string[] = [];
  let buf: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (buf.length === 0) {
      if (trimmed.startsWith("{") && !trimmed.endsWith("}")) {
        buf.push(trimmed);
      } else {
        out.push(line);
      }
    } else {
      buf.push(trimmed);
      if (trimmed.endsWith("}")) {
        out.push(buf.join(" ").replace(/\s+/g, " "));
        buf = [];
      }
    }
  }
  if (buf.length) out.push(buf.join(" "));
  return out.join("\n");
}

/**
 * A line is "stepper content" if it can plausibly belong to a numbered list:
 *   - blank
 *   - a numbered item `1. ...`, `2. ...`, etc.
 *   - a blockquote tip `> ...` (often introduced with 💡)
 *   - an indented continuation of a previous item
 *
 * Anything else (a heading, a horizontal rule, a bullet list, plain prose at
 * column 0) terminates the stepper so the rest renders as ordinary markdown.
 */
function isStepperContent(line: string): boolean {
  if (!line.trim()) return true;
  if (/^\s*\d+\.\s/.test(line)) return true;
  if (/^\s*>/.test(line)) return true;
  if (/^\s{2,}\S/.test(line)) return true; // indented continuation
  return false;
}

/** Rewrite asset paths in markdown content. */
function transformContent(content: string): string {
  return content
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => `![${alt}](${transformAssetPath(src)})`)
    .replace(/(<video[^>]*\bsrc=["'])([^"']+)(["'])/g, (_, pre, src, post) => `${pre}${transformAssetPath(src)}${post}`);
}

export function parseCaseStudy(absolutePath: string): ParsedCaseStudy {
  // Normalise CRLF/CR → LF immediately. Otherwise every downstream regex that
  // uses `.*` or `$` silently fails on Windows-saved markdown, because JS `.`
  // doesn't match `\r` and `$` (no /m) only matches end-of-string.
  const raw = readFileSync(absolutePath, "utf-8").replace(/\r\n?/g, "\n");
  const { data, content: body } = matter(raw);

  const fm: Frontmatter = {
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    themeColor: String(data.themeColor ?? "#ffffff"),
    themeGradient: String(data.themeGradient ?? ""),
    heroImage: transformAssetPath(String(data.heroImage ?? "")),
  };

  const lines = joinMultilineDirectives(body).split("\n");
  const blocks: Block[] = [];
  let currentSection: SectionKind = null;
  let currentSectionAttrs: DirectiveAttrs | undefined;
  let pendingType: { type: string; attrs: DirectiveAttrs } | null = null;
  let buffer: string[] = [];

const flushBuffer = () => {
    const content = buffer.join("\n").trim();
    buffer = [];
    if (pendingType) {
      const { type, attrs } = pendingType;
      pendingType = null;
      const base = { section: currentSection, sectionAttrs: currentSectionAttrs };
      
      if (type === "card-grid") {
        blocks.push({ ...base, kind: "card-grid", attrs, content: transformContent(content) });
      } else if (type === "image-gallery") {
        blocks.push({ ...base, kind: "image-gallery", attrs, content: transformContent(content) });
      } else if (type === "caption") {
        blocks.push({ ...base, kind: "caption", attrs, content: transformContent(content) });
      } else if (type === "stepper-success") {
        blocks.push({ ...base, kind: "stepper", attrs, content: transformContent(content) });
      } else if (type === "content-split") {
        // Here is our new routing rule!
        blocks.push({ ...base, kind: "content-split", attrs, content: transformContent(content) });
      } else {
        if (content) blocks.push({ ...base, kind: "markdown", content: transformContent(content) });
      }
      return;
    }
    
    if (content) {
      blocks.push({
        kind: "markdown",
        section: currentSection,
        sectionAttrs: currentSectionAttrs,
        content: transformContent(content),
      });
    }
  };

  // Tracks whether the current stepper buffer has seen at least one numbered
  // item. We only allow a "soft" stepper boundary after that point — otherwise
  // a leading blank line or stray prose could prematurely close an empty list.
  let stepperHasItem = false;

  for (const line of lines) {
    const dir = parseDirective(line);
    if (!dir) {
      // Soft boundary: stepper exits when it hits non-list content
      if (
        pendingType?.type === "stepper-success" &&
        stepperHasItem &&
        !isStepperContent(line)
      ) {
        flushBuffer(); // emits the stepper
        stepperHasItem = false;
        buffer.push(line); // boundary line is the first line of the next block
        continue;
      }
      if (
        pendingType?.type === "stepper-success" &&
        /^\s*\d+\.\s/.test(line)
      ) {
        stepperHasItem = true;
      }
      buffer.push(line);
      continue;
    }
    flushBuffer();
    stepperHasItem = false;
    if ("section" in dir && typeof dir.section === "string") {
      const kind = SECTION_KINDS[dir.section] ?? null;
      currentSection = kind;
      // Strip the `section` key so it doesn't appear in sectionAttrs
      const { section, ...rest } = dir;
      currentSectionAttrs = Object.keys(rest).length > 0 ? rest : undefined;
      // Transform bgImage paths immediately so downstream components don't have to
      if (currentSectionAttrs && typeof currentSectionAttrs.bgImage === "string") {
        currentSectionAttrs.bgImage = transformAssetPath(currentSectionAttrs.bgImage);
      }
      continue;
    }
    if ("type" in dir && typeof dir.type === "string") {
      const type = dir.type;
      if (STANDALONE_TYPES.has(type)) {
        if (type === "project-hero") {
          blocks.push({ kind: "project-hero", section: currentSection, attrs: dir });
        } else if (type === "sub-nav") {
          blocks.push({ kind: "sub-nav", section: currentSection, attrs: dir });
        } else if (type === "wave-divider") {
          blocks.push({ kind: "wave-divider", section: currentSection, attrs: dir });
        } else if (type === "related-projects") {
          blocks.push({ kind: "related-projects", section: currentSection, attrs: dir });
        }
      } else {
        pendingType = { type, attrs: dir };
      }
      continue;
    }
    if ("component" in dir && typeof dir.component === "string") {
      // `component=` is treated identically to `type=`
      pendingType = { type: dir.component, attrs: dir };
      continue;
    }
  }
  flushBuffer();

  return { frontmatter: fm, blocks };
}

/** Convenience: resolve a markdown filename relative to the repo's `public/markdown files/` dir. */
export function resolveCaseStudyPath(filename: string): string {
  return resolve(process.cwd(), "public", "markdown files", filename);
}
