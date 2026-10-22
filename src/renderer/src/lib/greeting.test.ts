import { describe, expect, it } from 'vitest'
import { dayPeriodForHour } from './greeting'

describe('dayPeriodForHour', () => {
  it.each([
    [0, 'beforeNoon'],
    [5, 'beforeNoon'],
    [11, 'beforeNoon'],
    [12, 'afterNoon'],
    [18, 'afterNoon'],
    [23, 'afterNoon']
  ])('hour %i is %s', (hour, period) => {
    expect(dayPeriodForHour(hour)).toBe(period)
  })
})
