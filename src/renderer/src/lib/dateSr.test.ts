import { describe, expect, it } from 'vitest'
import {
  formatClock,
  formatDayMonthGenitive,
  formatDottedDate,
  formatSinceLabel,
  formatWeekdayDate,
  pad2,
  parseLocalDateTime
} from './dateSr'

const start = new Date(2025, 5, 9, 1, 0)

describe('dateSr', () => {
  it('pads single digits', () => {
    expect(pad2(7)).toBe('07')
    expect(pad2(12)).toBe('12')
  })

  it('parses local date time strings', () => {
    expect(parseLocalDateTime('2025-06-09T01:00')).toEqual(start)
    expect(parseLocalDateTime('2025-06-09')).toEqual(new Date(2025, 5, 9))
  })

  it('rejects malformed dates', () => {
    expect(() => parseLocalDateTime('9. jun 2025')).toThrow()
  })

  it('formats the clock', () => {
    expect(formatClock(new Date(2026, 9, 22, 7, 5))).toBe('07:05')
  })

  it('formats the weekday eyebrow', () => {
    expect(formatWeekdayDate(new Date(2026, 9, 22))).toBe('četvrtak, 22. oktobar')
  })

  it('formats the relationship start labels', () => {
    expect(formatDayMonthGenitive(start)).toBe('9. juna')
    expect(formatSinceLabel(start)).toBe('9. juna 2025.')
    expect(formatDottedDate(start)).toBe('9 · 6 · 2025')
  })

  it('uses genitive for every month', () => {
    expect(formatDayMonthGenitive(new Date(2025, 2, 1))).toBe('1. marta')
    expect(formatDayMonthGenitive(new Date(2025, 7, 15))).toBe('15. avgusta')
  })
})
