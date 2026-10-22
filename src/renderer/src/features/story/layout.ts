import type { GlowOrb, Spark } from '@renderer/types/decor'

export const TRACK_WIDTH = 1160
export const TRACK_HEIGHT = 520

export const TIMELINE_PATH =
  'M20 300 L80 300 C210 300 210 220 340 220 C470 220 470 320 600 320 C730 320 730 210 860 210 C990 210 970 270 1100 270 L1140 270'

export type NodeTone = 'start' | 'middle' | 'today'
export type CardTone = 'start' | 'middle' | 'today'

export type MilestoneSlot = {
  node: { x: number; y: number; delayS: number; tone: NodeTone; pingDelaysS: ReadonlyArray<number> }
  stem: { left: number; top: number; delayS: number; direction: 'up' | 'down' }
  card: { left: number; top?: number; bottom?: number; delayS: number; tone: CardTone }
}

export const milestoneSlots: ReadonlyArray<MilestoneSlot> = [
  {
    node: { x: 80, y: 300, delayS: 0.9, tone: 'start', pingDelaysS: [1.2] },
    stem: { left: 79, top: 312, delayS: 1.1, direction: 'down' },
    card: { left: 0, top: 346, delayS: 1.2, tone: 'start' }
  },
  {
    node: { x: 340, y: 220, delayS: 1.9, tone: 'middle', pingDelaysS: [] },
    stem: { left: 339, top: 178, delayS: 2.1, direction: 'up' },
    card: { left: 220, bottom: 346, delayS: 2.2, tone: 'middle' }
  },
  {
    node: { x: 600, y: 320, delayS: 3, tone: 'middle', pingDelaysS: [] },
    stem: { left: 599, top: 332, delayS: 3.2, direction: 'down' },
    card: { left: 480, top: 366, delayS: 3.3, tone: 'middle' }
  },
  {
    node: { x: 860, y: 210, delayS: 4, tone: 'middle', pingDelaysS: [] },
    stem: { left: 859, top: 168, delayS: 4.2, direction: 'up' },
    card: { left: 740, bottom: 356, delayS: 4.3, tone: 'middle' }
  },
  {
    node: { x: 1100, y: 270, delayS: 5, tone: 'today', pingDelaysS: [5.4, 6.6] },
    stem: { left: 1099, top: 282, delayS: 5.3, direction: 'down' },
    card: { left: 920, top: 316, delayS: 5.4, tone: 'today' }
  }
]

export const storyGlowOrbs = [
  { id: 'bottom-left', tone: 'iris', opacity: 0.34, size: '60vw', left: '-18vw', bottom: '-30vw' },
  {
    id: 'top-right',
    tone: 'orchid',
    opacity: 0.2,
    size: '50vw',
    right: '-14vw',
    top: '-22vw',
    delayS: -6
  }
] as const satisfies ReadonlyArray<GlowOrb>

const sparkSeed = [
  [8, 12, 0.3, 3],
  [14, 38, 1.6, 2],
  [6, 66, 0.9, 2],
  [12, 88, 2.2, 3],
  [88, 8, 2.7, 2],
  [84, 30, 1.2, 2],
  [92, 56, 0.5, 3],
  [86, 78, 2.0, 2],
  [70, 96, 1.4, 3],
  [40, 4, 2.5, 2],
  [58, 2, 0.8, 2],
  [30, 97, 1.9, 2]
] as const

export const storySparks: ReadonlyArray<Spark> = sparkSeed.map(
  ([topPct, leftPct, delayS, sizePx]) => ({
    id: `${topPct}-${leftPct}`,
    topPct,
    leftPct,
    delayS,
    sizePx
  })
)
