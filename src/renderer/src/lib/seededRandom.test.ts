import { describe, expect, it } from 'vitest'
import { createSeededRandom } from './seededRandom'

describe('createSeededRandom', () => {
  it('repeats the same sequence for the same seed', () => {
    const first = createSeededRandom(11)
    const second = createSeededRandom(11)
    const a = Array.from({ length: 5 }, first)
    const b = Array.from({ length: 5 }, second)
    expect(a).toEqual(b)
  })

  it('matches the design generator for seed 11', () => {
    const random = createSeededRandom(11)
    expect(random()).toBeCloseTo((11 * 16807) / 2147483647, 12)
  })

  it('stays inside the unit interval', () => {
    const random = createSeededRandom(7)
    const values = Array.from({ length: 1000 }, random)
    expect(values.every((value) => value > 0 && value < 1)).toBe(true)
  })

  it('handles a zero seed', () => {
    const random = createSeededRandom(0)
    expect(random()).toBeGreaterThan(0)
  })
})
