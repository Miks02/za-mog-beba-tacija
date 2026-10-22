import type { GlowOrb, Spark } from '@renderer/types/decor'

export const homeGlowOrbs = [
  { id: 'top-left', tone: 'iris', opacity: 0.36, size: '60vw', left: '-22vw', top: '-28vw' },
  {
    id: 'bottom-right',
    tone: 'orchid',
    opacity: 0.22,
    size: '58vw',
    right: '-16vw',
    bottom: '-30vw',
    delayS: -7
  }
] as const satisfies ReadonlyArray<GlowOrb>

const sparkSeed = [
  [10, 14, 0.3, 3],
  [6, 40, 1.6, 2],
  [18, 62, 0.9, 2],
  [8, 84, 2.2, 3],
  [30, 6, 2.7, 2],
  [86, 22, 1.2, 2],
  [92, 48, 0.5, 3],
  [78, 70, 2.0, 2],
  [70, 94, 1.4, 3],
  [44, 52, 2.5, 2],
  [60, 10, 0.8, 2],
  [24, 96, 1.9, 2]
] as const

export const homeSparks: ReadonlyArray<Spark> = sparkSeed.map(
  ([topPct, leftPct, delayS, sizePx]) => ({
    id: `${topPct}-${leftPct}`,
    topPct,
    leftPct,
    delayS,
    sizePx
  })
)
