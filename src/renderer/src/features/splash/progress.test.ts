import { describe, expect, it } from 'vitest'
import { easedPercent, statusIndexFor } from './progress'

describe('easedPercent', () => {
  it('starts at 0 and ends at 100', () => {
    expect(easedPercent(0, 6000)).toBe(0)
    expect(easedPercent(6000, 6000)).toBe(100)
    expect(easedPercent(9000, 6000)).toBe(100)
  })

  it('eases out like the design', () => {
    expect(easedPercent(3000, 6000)).toBe(Math.round((1 - Math.pow(0.5, 2.2)) * 100))
  })
})

describe('statusIndexFor', () => {
  it.each([
    [0, 0],
    [24, 0],
    [25, 1],
    [50, 2],
    [75, 3],
    [99, 3],
    [100, 4]
  ])('percent %i shows status %i', (percent, index) => {
    expect(statusIndexFor(percent)).toBe(index)
  })
})
