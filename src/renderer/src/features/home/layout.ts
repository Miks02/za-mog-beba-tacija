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

export type PetalRing = {
  id: string
  className: string
  fillOpacity: number
  cy: number
  rx: number
  ry: number
  angles: ReadonlyArray<number>
}

const anglesFrom = (count: number, offset = 0): ReadonlyArray<number> =>
  Array.from({ length: count }, (_, k) => offset + (k * 360) / count)

export const mandalaRings: ReadonlyArray<PetalRing> = [
  {
    id: 'outer',
    className: 'fill-iris animate-home-spin-slow',
    fillOpacity: 0.28,
    cy: -118,
    rx: 34,
    ry: 86,
    angles: anglesFrom(12)
  },
  {
    id: 'middle',
    className: 'fill-amethyst animate-home-spin-reverse',
    fillOpacity: 0.42,
    cy: -82,
    rx: 28,
    ry: 64,
    angles: anglesFrom(10, 18)
  },
  {
    id: 'inner',
    className: 'fill-orchid animate-home-spin',
    fillOpacity: 0.66,
    cy: -50,
    rx: 21,
    ry: 44,
    angles: anglesFrom(8)
  }
]

export const orbitDots = [
  { id: 'top', cx: 0, cy: -196, r: 4.5, className: 'fill-haze' },
  { id: 'right', cx: 170, cy: 98, r: 3.5, className: 'fill-orchid' },
  { id: 'left', cx: -170, cy: 98, r: 4, className: 'fill-lilac' }
] as const

export const orbitAnchors = [
  { id: 'east', cx: 196, cy: 0 },
  { id: 'west', cx: -196, cy: 0 },
  { id: 'south', cx: 0, cy: 196 }
] as const
