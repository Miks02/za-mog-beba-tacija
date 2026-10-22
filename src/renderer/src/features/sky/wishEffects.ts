import { createSeededRandom } from '@renderer/lib/seededRandom'

export type WishStreak = {
  id: string
  topPct: number
  leftPct: number
  lengthPx: number
  thicknessPx: number
  durationS: number
  delayS: number
}

export type WishSparkle = {
  id: string
  topPct: number
  leftPct: number
  sizePx: number
  delayS: number
}

export type WishParticle = {
  id: string
  angleDeg: number
  distancePx: number
  sizePx: number
  delayS: number
}

const round = (value: number, digits: number): number => Number(value.toFixed(digits))

export function createWishStreaks(count: number, seed: number): ReadonlyArray<WishStreak> {
  const random = createSeededRandom(seed)
  return Array.from({ length: count }, (_, index) => ({
    id: `streak-${index}`,
    topPct: round(-6 + random() * 46, 2),
    leftPct: round(-12 + random() * 82, 2),
    lengthPx: Math.round(160 + random() * 220),
    thicknessPx: round(2 + random() * 2, 1),
    durationS: round(1.1 + random() * 0.9, 2),
    delayS: round((index / count) * 1.6 + random() * 0.15, 2)
  }))
}

export function createWishSparkles(count: number, seed: number): ReadonlyArray<WishSparkle> {
  const random = createSeededRandom(seed)
  return Array.from({ length: count }, (_, index) => ({
    id: `sparkle-${index}`,
    topPct: round(4 + random() * 70, 2),
    leftPct: round(4 + random() * 92, 2),
    sizePx: Math.round(10 + random() * 16),
    delayS: round(0.2 + random() * 1.8, 2)
  }))
}

export function createWishParticles(count: number, seed: number): ReadonlyArray<WishParticle> {
  const random = createSeededRandom(seed)
  return Array.from({ length: count }, (_, index) => ({
    id: `particle-${index}`,
    angleDeg: round((360 / count) * index + random() * 12, 1),
    distancePx: Math.round(70 + random() * 90),
    sizePx: round(4 + random() * 4, 1),
    delayS: round(random() * 0.12, 2)
  }))
}
