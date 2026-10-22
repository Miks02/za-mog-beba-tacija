export type StemTone = 'stem' | 'grass'
export type LeafTone = 'leaf' | 'leaf-light'
export type BloomColor = 'orchid' | 'lilac' | 'amethyst' | 'haze'

export type LeafSpec = {
  id: string
  transform: string
  tone: LeafTone
  delayS: number
}

export type DaisyHead = {
  kind: 'daisy'
  transform: string
  color: BloomColor
  delayS: number
  petalRx: number
  petalRy: number
  centerRadius: number
}

export type TulipHead = {
  kind: 'tulip'
  transform: string
  color: BloomColor
  delayS: number
  highlightOpacity: number
}

export type SprigHead = {
  kind: 'sprig'
  transform: string
  color: BloomColor
  delayS: number
  radius: number
}

export type PlantHead = DaisyHead | TulipHead | SprigHead

export type PlantSpec = {
  id: string
  x: number
  swayDelayS: number
  stem: {
    d: string
    tone: StemTone
    width: number
    delayS: number
  }
  leaves: ReadonlyArray<LeafSpec>
  head: PlantHead
}

export type PetalSpec = {
  id: string
  leftPct: number
  widthPx: number
  durationS: number
  delayS: number
  direction: 'left' | 'right'
}

export type ButterflySpec = {
  id: string
  flightClassName: string
  durationS: number
  delayS: number
  scale: number
}
