export type GlowTone = 'iris' | 'orchid'

export type GlowOrb = {
  id: string
  tone: GlowTone
  opacity: number
  size: string
  left?: string
  right?: string
  top?: string
  bottom?: string
  delayS?: number
}

export type Spark = {
  id: string
  topPct: number
  leftPct: number
  sizePx: number
  delayS: number
}

export type Floater = {
  id: string
  leftPct: number
  sizePx: number
  durationS: number
  delayS: number
}

export type BurstRay = {
  id: string
  angleDeg: number
  distancePx: number
  scale: number
  delayS: number
  colorClassName: string
}
