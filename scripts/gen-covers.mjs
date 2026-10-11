// Generates a simple title-card SVG per project into public/covers/<slug>.svg.
// Run: node scripts/gen-covers.mjs   (reads slug/name/category from src/data/projects.ts)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'

const src = readFileSync(new URL('../src/data/projects.ts', import.meta.url), 'utf8')
const labels = { genai: 'GenAI / RAG', backend: 'Backend / Systems', mlops: 'MLOps / Cloud', data: 'Data / Analytics', fullstack: 'Full-Stack' }
const hues = { genai: 265, backend: 200, mlops: 160, data: 35, fullstack: 330 }
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;')

mkdirSync(new URL('../public/covers/', import.meta.url), { recursive: true })
const re = /slug: '([^']+)',\s+name: '((?:[^'\\]|\\.)*)',\s+category: '(\w+)'/g
let m, n = 0
while ((m = re.exec(src))) {
  const [, slug, rawName, cat] = m
  const name = esc(rawName.replace(/\\'/g, "'"))
  const h = hues[cat]
  const size = name.length > 22 ? 44 : 56
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" role="img" aria-label="${name}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${h} 45% 18%)"/><stop offset="1" stop-color="hsl(${(h + 40) % 360} 55% 30%)"/></linearGradient></defs>
<rect width="640" height="360" fill="url(#g)"/>
<text x="40" y="60" font-family="ui-monospace,Menlo,monospace" font-size="18" letter-spacing="2" fill="hsl(${h} 80% 80%)">${labels[cat].toUpperCase()}</text>
<text x="40" y="200" font-family="system-ui,Segoe UI,sans-serif" font-size="${size}" font-weight="700" fill="#fff">${name}</text>
<text x="40" y="320" font-family="ui-monospace,Menlo,monospace" font-size="16" fill="hsl(${h} 30% 75%)">github.com/ashiksharonm</text>
</svg>
`
  writeFileSync(new URL(`../public/covers/${slug}.svg`, import.meta.url), svg)
  n++
}
console.log(`wrote ${n} covers`)
