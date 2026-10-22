import { createSeededRandom } from '@renderer/lib/seededRandom'

const BIG_STAR_THRESHOLD = 0.85

export type Star = {
  id: string
  topPct: number
  leftPct: number
  sizePx: number
  isBig: boolean
  durationS: number
  delayS: number
}

const round = (value: number, digits: number): number => Number(value.toFixed(digits))

export function createStarField(count: number, seed: number): ReadonlyArray<Star> {
  const random = createSeededRandom(seed)
  return Array.from({ length: count }, (_, index) => {
    const isBig = random() > BIG_STAR_THRESHOLD
    const sizePx = isBig ? 2.5 + random() * 1.2 : 1 + random() * 1.2
    return {
      id: `star-${index}`,
      isBig,
      sizePx: round(sizePx, 1),
      topPct: round(random() * 100, 2),
      leftPct: round(random() * 100, 2),
      durationS: round(2.4 + random() * 4, 1),
      delayS: round(-random() * 6, 1)
    }
  })
}
