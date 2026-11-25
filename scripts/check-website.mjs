import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { pilots } from '../src/data/pilots.js'
import { BRAND_DARK, BRAND_ORANGE } from '../src/constants/brandColors.js'

const root = fileURLToPath(new URL('../', import.meta.url))
const read = (path) => readFileSync(join(root, path), 'utf8')
const es = JSON.parse(read('src/locales/es.json'))
const en = JSON.parse(read('src/locales/en.json'))

function compareTranslations(left, right, path = '') {
  assert.equal(typeof left, typeof right, `Translation type mismatch: ${path}`)
  assert.equal(Array.isArray(left), Array.isArray(right), `Translation shape mismatch: ${path}`)
  if (typeof left === 'string') {
    const placeholders = (text) => [...text.matchAll(/\{\{(\w+)\}\}/g)].map((match) => match[1]).sort()
    assert.deepEqual(placeholders(left), placeholders(right), `Placeholder mismatch: ${path}`)
    assert.ok(left.trim() && right.trim(), `Empty translation: ${path}`)
    return
  }
  assert.deepEqual(Object.keys(left).sort(), Object.keys(right).sort(), `Translation keys mismatch: ${path}`)
  for (const key of Object.keys(left)) compareTranslations(left[key], right[key], `${path}.${key}`)
}

compareTranslations(es, en)
assert.deepEqual(es.catalog.games.map((game) => game.title), en.catalog.games.map((game) => game.title))
const catalogEntries = [...read('src/components/Catalog.jsx').matchAll(/\{\s*index:\s*(\d+),\s*image:\s*'([^']+)'([^}]*)\}/g)]
assert.equal(catalogEntries.length, es.catalog.games.length, 'Every translated game must have a catalog card')
assert.equal(new Set(catalogEntries.map((entry) => entry[1])).size, catalogEntries.length, 'Catalog indexes must be unique')
for (const [, index, , options] of catalogEntries) {
  const game = es.catalog.games[Number(index)]
  assert.ok(game, `Invalid catalog index: ${index}`)
  assert.equal(options.match(/previewType:\s*'([^']+)'/)?.[1], game.title, `Wrong preview for ${game.title}`)
}
assert.ok(es.catalog.games.some((game) => game.title === 'BASKET'), 'BASKET must be available in the catalog')
assert.equal(es.howItWorks.steps.length, 3)
assert.equal(es.about.pillars.length, 3)

for (const pilot of pilots) {
  for (const asset of [pilot.logo, ...pilot.photos.map((photo) => `/clients/${pilot.id}/${photo}`)]) {
    assert.ok(existsSync(join(root, 'public', asset.slice(1))), `Missing pilot asset: ${asset}`)
  }
  assert.ok(es.clientLogos.pilots[pilot.id] && en.clientLogos.pilots[pilot.id])
}

const components = readdirSync(join(root, 'src/components')).filter((name) => name.endsWith('.jsx'))
for (const component of components) {
  const source = read(`src/components/${component}`)
  for (const [, asset] of source.matchAll(/['"](\/(?:images|clients)\/[^'"`]+)['"]/g)) {
    assert.ok(existsSync(join(root, 'public', asset.slice(1))), `Missing asset in ${component}: ${asset}`)
  }
  for (const [, image, extension = 'webp'] of source.matchAll(/image: '([^']+)'(?:,\s*extension:\s*'([^']+)')?/g)) {
    assert.ok(existsSync(join(root, 'public/images', `${image}.${extension}`)), `Missing game image: ${image}.${extension}`)
  }
  for (const [, key] of source.matchAll(/\bt\('([a-zA-Z]+\.[a-zA-Z.]+)'/g)) {
    assert.equal(typeof key.split('.').reduce((value, part) => value?.[part], es), 'string', `Missing translation in ${component}: ${key}`)
  }
}

function luminance(hex) {
  const channels = hex.slice(1).match(/../g).map((part) => {
    const value = parseInt(part, 16) / 255
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  })
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
}

function contrast(a, b) {
  const [dark, light] = [luminance(a), luminance(b)].sort((x, y) => x - y)
  return (light + 0.05) / (dark + 0.05)
}

assert.ok(contrast(BRAND_DARK, BRAND_ORANGE) >= 4.5, 'CTA contrast must meet WCAG AA')
assert.ok(contrast('#57534e', '#faf8f4') >= 4.5, 'Body copy contrast must meet WCAG AA')
assert.ok(contrast('#9c4700', '#faf8f4') >= 4.5, 'Accent heading contrast must meet WCAG AA')
console.log('Website checks passed: translations, placeholders, content shape, assets and palette contrast.')
