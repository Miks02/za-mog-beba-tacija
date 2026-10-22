import type { BloomColor, LeafTone, StemTone } from './types'

export const bloomFillClassName: Record<BloomColor, string> = {
  orchid: 'fill-orchid',
  lilac: 'fill-lilac',
  amethyst: 'fill-amethyst',
  haze: 'fill-haze'
}

export const stemStrokeClassName: Record<StemTone, string> = {
  stem: 'stroke-stem',
  grass: 'stroke-grass'
}

export const leafFillClassName: Record<LeafTone, string> = {
  leaf: 'fill-leaf',
  'leaf-light': 'fill-leaf-light'
}
