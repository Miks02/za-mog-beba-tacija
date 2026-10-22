export type DayPeriod = 'beforeNoon' | 'afterNoon'

export function dayPeriodForHour(hour: number): DayPeriod {
  return hour < 12 ? 'beforeNoon' : 'afterNoon'
}
