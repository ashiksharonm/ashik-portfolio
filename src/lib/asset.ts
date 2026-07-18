/** Resolves a path under `public/` against Vite's configured base (`/ashik-portfolio/` in production). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
