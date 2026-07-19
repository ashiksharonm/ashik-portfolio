/**
 * Real (non-AI-generated) stock photography via LoremFlickr, matched by keyword.
 * `lock` pins a specific photo per keyword so the same project always shows the
 * same image across reloads/filters, instead of a new random photo each time.
 */
export function coverImageUrl(keyword: string, lock: number, width = 640, height = 400): string {
  return `https://loremflickr.com/${width}/${height}/${keyword}?lock=${lock}`
}

/** Deterministic lock number derived from a project slug, so no index needs threading through. */
export function lockFromSlug(slug: string): number {
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0
  }
  return hash % 100
}
