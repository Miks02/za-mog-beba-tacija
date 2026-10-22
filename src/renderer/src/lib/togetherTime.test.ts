import { describe, expect, it } from 'vitest'
import { getTogetherTime } from './togetherTime'

const start = new Date(2025, 5, 9, 1, 0, 0)

describe('getTogetherTime', () => {
  it('is zero at the start', () => {
    expect(getTogetherTime(start, start)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  })

  it('splits the elapsed time into units', () => {
    const now = new Date(start.getTime() + ((2 * 24 + 3) * 3600 + 4 * 60 + 5) * 1000)
    expect(getTogetherTime(start, now)).toEqual({ days: 2, hours: 3, minutes: 4, seconds: 5 })
  })

  it('never goes negative before the start', () => {
    const before = new Date(start.getTime() - 60_000)
    expect(getTogetherTime(start, before)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  })

  it('ignores partial seconds', () => {
    const now = new Date(start.getTime() + 1999)
    expect(getTogetherTime(start, now).seconds).toBe(1)
  })
})
