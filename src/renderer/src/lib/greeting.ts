export type DayPeriod = 'night' | 'morning' | 'afternoon' | 'evening'

export function dayPeriodForHour(hour: number): DayPeriod {
  if (hour < 5) return 'night'
  if (hour < 12) return 'morning'
  if (hour < 18) return 'afternoon'
  if (hour < 22) return 'evening'
  return 'night'
}
