// Reads the production build output and asserts the SEO invariants of this
// sprint. Run after `next build`. Exit 1 on any failure. Node ≥ 20.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

const SITE_URL = process.argv[2] ?? 'https://www.elitescreens.co.nz'
const FORBID_TYPES = (process.argv[3] ?? 'Product').split(',').filter(Boolean)
const APP_DIR = join('.next', 'server', 'app')
const errors = []
// Measure visible length: React HTML-escapes &, ' and " inside <title>/<meta>,
// which would otherwise inflate the raw count ("&" becomes "&amp;", +4 chars).
// &amp; is decoded last so an escaped entity such as "&amp;quot;" stays literal.
const decode = s => s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (name.endsWith('.html')) out.push(p)
  }
  return out
}

const pages = walk(APP_DIR).filter(p => !/\b(404|_not-found|500)\b/.test(p))
if (pages.length === 0) errors.push(`no HTML pages found under ${APP_DIR}`)

for (const file of pages) {
  const html = readFileSync(file, 'utf8')
  const rel = relative(APP_DIR, file)
  const canon = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(m => m[1])
  if (canon.length !== 1) errors.push(`${rel}: expected 1 canonical, got ${canon.length}`)
  else if (!canon[0].startsWith(SITE_URL)) errors.push(`${rel}: canonical ${canon[0]} is not on ${SITE_URL}`)
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '')
  if (!title) errors.push(`${rel}: missing <title>`)
  else if (title.length > 65) errors.push(`${rel}: title ${title.length} chars > 65: "${title}"`)
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '')
  if (desc.length < 70 || desc.length > 160) errors.push(`${rel}: description ${desc.length} chars (want 70–160)`)
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0
  if (h1s !== 1) errors.push(`${rel}: expected 1 <h1>, got ${h1s}`)
  if (/https?:\/\/(elitescreens|golf2go)\.co\.nz/.test(html)) errors.push(`${rel}: apex host leaked into HTML`)
  for (const block of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    let json
    try { json = JSON.parse(block[1]) } catch (e) { errors.push(`${rel}: invalid JSON-LD: ${e.message}`); continue }
    const text = JSON.stringify(json)
    for (const t of FORBID_TYPES) if (text.includes(`"@type":"${t}"`)) errors.push(`${rel}: forbidden @type ${t}`)
  }
  // Microdata is structured data too: itemtype="https://schema.org/<Type>".
  for (const t of FORBID_TYPES) {
    if (new RegExp(`itemtype=["']https?://schema\.org/${t}["']`, 'i').test(html)) errors.push(`${rel}: forbidden microdata itemtype ${t}`)
  }
}

// Sitemap: every <loc> must be on SITE_URL and have a built page.
const smBody = ['sitemap.xml.body', 'sitemap.xml'].map(n => join(APP_DIR, n)).find(existsSync)
if (smBody) {
  const locs = [...readFileSync(smBody, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
    .filter(u => !/\.(jpg|jpeg|png|webp|mp4)$/i.test(u))
  for (const u of locs) {
    if (!u.startsWith(SITE_URL)) { errors.push(`sitemap: ${u} not on ${SITE_URL}`); continue }
    const path = u.slice(SITE_URL.length).replace(/^\/+/, '') || 'index'
    if (!existsSync(join(APP_DIR, `${path}.html`))) errors.push(`sitemap: ${u} has no built page (${path}.html)`)
  }
} else console.warn('seo-check: sitemap body not found in build output, skipping sitemap assertions')

if (errors.length) { console.error(`seo-check: ${errors.length} problem(s)\n- ` + errors.join('\n- ')); process.exit(1) }
console.log(`seo-check: OK (${pages.length} pages)`)
