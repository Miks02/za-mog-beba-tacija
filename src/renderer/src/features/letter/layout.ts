import type { GlowOrb } from '@renderer/types/decor'

export const letterGlowOrbs = [
  { id: 'top', tone: 'iris', opacity: 0.32, size: '70vw', left: '15vw', top: '-20vw' }
] as const satisfies ReadonlyArray<GlowOrb>

export const PRESSED_FLOWER_PETAL_ANGLES = [0, 60, 120, 180, 240, 300] as const
