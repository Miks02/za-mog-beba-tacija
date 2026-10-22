import { describe, expect, it } from 'vitest'
import { dayPeriodForHour } from './greeting'

describe('dayPeriodForHour', () => {
  it.each([
    [0, 'night'],
    [4, 'night'],
    [5, 'morning'],
    [11, 'morning'],
    [12, 'afternoon'],
    [17, 'afternoon'],
    [18, 'evening'],
    [21, 'evening'],
    [22, 'night'],
    [23, 'night']
  ])('hour %i is %s', (hour, period) => {
    expect(dayPeriodForHour(hour)).toBe(period)
  })
})
