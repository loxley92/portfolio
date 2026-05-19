/**
 * The markdown references assets under `/assets/projects/<slug>/...` with `.png`/`.jpg` extensions.
 * The actual optimized files live at `/assets/<slug>/...` as `.webp` (or `.mp4` for video).
 * This helper normalises any reference into the real on-disk path.
 */
export function transformAssetPath(input: string): string {
  if (!input) return input;
  const out = input.replace(/^\/assets\/projects\//, "/assets/");
  if (out === input) return out;
  return out.replace(/\.(png|jpe?g)(\?.*)?$/i, ".webp$2");
}
