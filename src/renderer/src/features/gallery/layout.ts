import type { Floater, GlowOrb } from '@renderer/types/decor'

export const galleryGlowOrbs = [
  { id: 'center', tone: 'iris', opacity: 0.3, size: '70vw', left: '15vw', top: '-10vw' }
] as const satisfies ReadonlyArray<GlowOrb>

const floaterSeed = [
  [6, 14, 16, 0],
  [18, 10, 20, 4],
  [33, 18, 18, 8],
  [47, 12, 22, 2],
  [61, 16, 17, 10],
  [74, 10, 21, 6],
  [86, 14, 19, 12],
  [94, 12, 23, 3]
] as const

export const galleryFloaters: ReadonlyArray<Floater> = floaterSeed.map(
  ([leftPct, sizePx, durationS, delayS]) => ({
    id: `${leftPct}`,
    leftPct,
    sizePx,
    durationS,
    delayS
  })
)

export const FAIRY_WIRE_PATH = 'M-20 20 Q 360 110 720 30 Q 1080 110 1460 20'

export const fairyBulbs = [
  { id: 'b1', cx: 131, cy: 57, className: 'fill-honey', delayS: 0.2 },
  { id: 'b2', cx: 281, cy: 73, className: 'fill-orchid', delayS: 0.9 },
  { id: 'b3', cx: 429, cy: 75, className: 'fill-lilac', delayS: 1.5 },
  { id: 'b4', cx: 575, cy: 63, className: 'fill-haze', delayS: 0.5 },
  { id: 'b5', cx: 720, cy: 38, className: 'fill-honey', delayS: 1.2 },
  { id: 'b6', cx: 865, cy: 63, className: 'fill-orchid', delayS: 1.8 },
  { id: 'b7', cx: 1011, cy: 75, className: 'fill-lilac', delayS: 0.3 },
  { id: 'b8', cx: 1159, cy: 73, className: 'fill-haze', delayS: 1.1 },
  { id: 'b9', cx: 1309, cy: 57, className: 'fill-honey', delayS: 1.7 }
] as const

export type CollageSlot = {
  leftPct: number
  topPct: number
  rotationDeg: number
  gradientClassName: string
  hasTape: boolean
}

export const collageLayout: ReadonlyArray<CollageSlot> = [
  {
    leftPct: 3,
    topPct: 4,
    rotationDeg: -8,
    gradientClassName: 'from-photo-lilac to-photo-violet',
    hasTape: true
  },
  {
    leftPct: 21,
    topPct: 0,
    rotationDeg: 5,
    gradientClassName: 'from-orchid to-iris',
    hasTape: false
  },
  {
    leftPct: 40,
    topPct: 6,
    rotationDeg: -3,
    gradientClassName: 'from-lilac to-envelope-back',
    hasTape: true
  },
  {
    leftPct: 59,
    topPct: 0,
    rotationDeg: 7,
    gradientClassName: 'from-photo-pink to-amethyst',
    hasTape: false
  },
  {
    leftPct: 78,
    topPct: 5,
    rotationDeg: -6,
    gradientClassName: 'from-photo-periwinkle to-ink-soft',
    hasTape: true
  },
  {
    leftPct: 9,
    topPct: 50,
    rotationDeg: 6,
    gradientClassName: 'from-orchid to-photo-violet',
    hasTape: false
  },
  {
    leftPct: 29,
    topPct: 46,
    rotationDeg: -7,
    gradientClassName: 'from-lilac to-iris',
    hasTape: true
  },
  {
    leftPct: 50,
    topPct: 52,
    rotationDeg: 4,
    gradientClassName: 'from-photo-lilac to-envelope-back',
    hasTape: false
  },
  {
    leftPct: 70,
    topPct: 48,
    rotationDeg: -4,
    gradientClassName: 'from-photo-pink to-envelope-pocket',
    hasTape: true
  }
]
