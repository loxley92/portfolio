import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: false,
});

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/:+\s*$/, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Renders markdown and injects `id` attrs on every <h2> and <h3>, so each
 * heading is a scroll-target for the sub-nav (e.g. #release-one, #overview).
 */
export function renderMarkdown(input: string): string {
  let html = marked.parse(input, { async: false }) as string;
  html = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_, level, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const slug = slugify(text);
    return slug ? `<h${level} id="${slug}">${inner}</h${level}>` : `<h${level}>${inner}</h${level}>`;
  });
  return html;
}

/** Extract the first image from a markdown chunk and return { src, alt, rest }. */
export function extractFirstImage(input: string): { src: string; alt: string; rest: string } | null {
  const m = input.match(/!\[([^\]]*)\]\(([^)]+)\)/);
  if (!m) return null;
  return {
    alt: m[1],
    src: m[2],
    rest: input.replace(m[0], "").trim(),
  };
}
