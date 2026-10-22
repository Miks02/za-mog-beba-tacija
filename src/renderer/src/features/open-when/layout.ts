import type { GlowOrb, Spark } from '@renderer/types/decor'

export const openWhenGlowOrbs = [
  { id: 'top', tone: 'iris', opacity: 0.34, size: '64vw', left: '18vw', top: '-36vw' },
  {
    id: 'bottom-right',
    tone: 'orchid',
    opacity: 0.2,
    size: '50vw',
    right: '-18vw',
    bottom: '-26vw',
    delayS: -5
  }
] as const satisfies ReadonlyArray<GlowOrb>

const sparkSeed = [
  [8, 10, 0.3, 3],
  [14, 40, 1.6, 2],
  [6, 70, 0.9, 2],
  [12, 90, 2.2, 3],
  [88, 6, 2.7, 2],
  [92, 34, 1.2, 2],
  [86, 62, 0.5, 3],
  [90, 88, 2.0, 2],
  [50, 2, 1.4, 3],
  [44, 97, 2.5, 2]
] as const

export const openWhenSparks: ReadonlyArray<Spark> = sparkSeed.map(
  ([topPct, leftPct, delayS, sizePx]) => ({
    id: `${topPct}-${leftPct}`,
    topPct,
    leftPct,
    delayS,
    sizePx
  })
)

const RAY_COUNT = 10
const RAY_START_DELAY_S = 0.25
const RAY_DELAY_STEP_S = 0.05
const rayColors = ['text-haze', 'text-orchid', 'text-lilac', 'text-honey'] as const

export type SparkleRay = {
  id: string
  angleDeg: number
  delayS: number
  colorClassName: string
}

export const sparkleRays: ReadonlyArray<SparkleRay> = Array.from({ length: RAY_COUNT }, (_, k) => ({
  id: `ray-${k}`,
  angleDeg: (k * 360) / RAY_COUNT,
  delayS: RAY_START_DELAY_S + (k % 3) * RAY_DELAY_STEP_S,
  colorClassName: rayColors[k % rayColors.length]
}))
