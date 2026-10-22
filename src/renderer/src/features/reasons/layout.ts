import type { GlowOrb } from '@renderer/types/decor'

export const reasonsGlowOrbs = [
  { id: 'top', tone: 'iris', opacity: 0.34, size: '64vw', left: '18vw', top: '-34vw' },
  {
    id: 'bottom-left',
    tone: 'orchid',
    opacity: 0.2,
    size: '50vw',
    left: '-16vw',
    bottom: '-24vw',
    delayS: -5
  }
] as const satisfies ReadonlyArray<GlowOrb>

export type RisingHeart = {
  id: string
  offsetPx: number
  sizePx: number
  delayS: number
  colorClassName: string
}

export const risingHearts = [
  { id: 'a', offsetPx: -70, sizePx: 16, delayS: 0, colorClassName: 'fill-orchid' },
  { id: 'b', offsetPx: -36, sizePx: 22, delayS: 0.08, colorClassName: 'fill-lilac' },
  { id: 'c', offsetPx: -8, sizePx: 14, delayS: 0.16, colorClassName: 'fill-haze' },
  { id: 'd', offsetPx: 18, sizePx: 26, delayS: 0.04, colorClassName: 'fill-orchid' },
  { id: 'e', offsetPx: 48, sizePx: 16, delayS: 0.12, colorClassName: 'fill-amethyst' },
  { id: 'f', offsetPx: 74, sizePx: 20, delayS: 0.2, colorClassName: 'fill-haze' },
  { id: 'g', offsetPx: -54, sizePx: 12, delayS: 0.24, colorClassName: 'fill-amethyst' }
] as const satisfies ReadonlyArray<RisingHeart>
