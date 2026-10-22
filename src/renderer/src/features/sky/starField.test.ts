import { describe, expect, it } from 'vitest'
import { createStarField } from './starField'

describe('createStarField', () => {
  it('is stable for the same seed', () => {
    expect(createStarField(90, 11)).toEqual(createStarField(90, 11))
  })

  it('keeps every star inside the sky', () => {
    const stars = createStarField(90, 11)
    expect(stars).toHaveLength(90)
    for (const star of stars) {
      expect(star.topPct).toBeGreaterThanOrEqual(0)
      expect(star.topPct).toBeLessThanOrEqual(100)
      expect(star.leftPct).toBeGreaterThanOrEqual(0)
      expect(star.leftPct).toBeLessThanOrEqual(100)
      expect(star.delayS).toBeLessThanOrEqual(0)
    }
  })

  it('makes big stars larger than small ones', () => {
    const stars = createStarField(90, 11)
    const big = stars.filter((star) => star.isBig)
    const small = stars.filter((star) => !star.isBig)
    expect(big.length).toBeGreaterThan(0)
    expect(Math.min(...big.map((star) => star.sizePx))).toBeGreaterThan(
      Math.max(...small.map((star) => star.sizePx))
    )
  })
})
