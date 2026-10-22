import type { BurstRay, GlowOrb, Spark } from '@renderer/types/decor'
import type { ButterflySpec, PetalSpec } from './types'

export const SPLASH_GLOW_DURATION_S = 16
export const SPLASH_SPARK_DURATION_S = 3.2
export const PETAL_HEIGHT_RATIO = 0.72

export const splashGlowOrbs = [
  { id: 'top-left', tone: 'iris', opacity: 0.42, size: '62vw', left: '-20vw', top: '-30vw' },
  {
    id: 'bottom-right',
    tone: 'orchid',
    opacity: 0.26,
    size: '56vw',
    right: '-18vw',
    bottom: '-26vw',
    delayS: -6
  }
] as const satisfies ReadonlyArray<GlowOrb>

const sparkSeed = [
  [12, 18, 0.2, 3],
  [8, 44, 1.4, 2],
  [16, 72, 0.8, 3],
  [24, 88, 2.1, 2],
  [30, 8, 2.8, 2],
  [6, 60, 1.9, 2],
  [36, 28, 0.5, 2],
  [20, 34, 2.4, 3],
  [28, 58, 1.1, 2],
  [42, 92, 1.7, 3],
  [10, 94, 0.3, 2],
  [40, 4, 2.2, 3],
  [48, 16, 1.0, 2],
  [46, 80, 2.6, 2],
  [4, 26, 1.5, 3],
  [34, 68, 0.7, 2]
] as const

export const splashSparks: ReadonlyArray<Spark> = sparkSeed.map(
  ([topPct, leftPct, delayS, sizePx]) => ({
    id: `${topPct}-${leftPct}`,
    topPct,
    leftPct,
    delayS,
    sizePx
  })
)

const petalSeed = [
  [6, 14, 13, 0.6, 'left'],
  [14, 10, 11, 3.4, 'right'],
  [22, 16, 15, 1.8, 'right'],
  [31, 11, 12, 5.2, 'left'],
  [39, 13, 14, 0.9, 'right'],
  [47, 9, 10, 6.8, 'left'],
  [55, 15, 16, 2.6, 'right'],
  [63, 10, 12, 4.1, 'left'],
  [71, 14, 13, 1.2, 'right'],
  [79, 11, 11, 7.4, 'left'],
  [86, 16, 15, 3.0, 'left'],
  [93, 10, 12, 5.8, 'right'],
  [27, 8, 9, 8.6, 'right'],
  [68, 8, 10, 9.4, 'left']
] as const

export const fallingPetals: ReadonlyArray<PetalSpec> = petalSeed.map(
  ([leftPct, widthPx, durationS, delayS, direction]) => ({
    id: `${leftPct}-${delayS}`,
    leftPct,
    widthPx,
    durationS,
    delayS,
    direction
  })
)

export const butterflies = [
  { id: 'first', flightClassName: 'splash-flight-1', durationS: 15, delayS: 3, scale: 1 },
  { id: 'second', flightClassName: 'splash-flight-2', durationS: 18, delayS: 6, scale: 0.75 },
  { id: 'third', flightClassName: 'splash-flight-3', durationS: 20, delayS: 9.5, scale: 0.6 }
] as const satisfies ReadonlyArray<ButterflySpec>

const RAY_COUNT = 14
const RAY_NEAR_DISTANCE_PX = 170
const RAY_FAR_DISTANCE_PX = 270
const RAY_FAR_SCALE = 1.2
const RAY_DELAY_STEP_S = 0.06
const rayColors = ['fill-haze', 'fill-orchid', 'fill-lilac'] as const

export const celebrationRays: ReadonlyArray<BurstRay> = Array.from(
  { length: RAY_COUNT },
  (_, k) => {
    const isFar = k % 2 === 1
    return {
      id: `ray-${k}`,
      angleDeg: (k * 360) / RAY_COUNT,
      distancePx: isFar ? RAY_FAR_DISTANCE_PX : RAY_NEAR_DISTANCE_PX,
      scale: isFar ? RAY_FAR_SCALE : 1,
      delayS: (k % 3) * RAY_DELAY_STEP_S,
      colorClassName: rayColors[k % rayColors.length]
    }
  }
)

export const CELEBRATION_RING_DELAYS_S = [0, 0.25] as const
