const MS_PER_SECOND = 1000
const SECONDS_PER_MINUTE = 60
const SECONDS_PER_HOUR = 3600
const SECONDS_PER_DAY = 86400

export type TogetherTime = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function getTogetherTime(start: Date, now: Date): TogetherTime {
  const totalSeconds = Math.max(0, Math.floor((now.getTime() - start.getTime()) / MS_PER_SECOND))
  return {
    days: Math.floor(totalSeconds / SECONDS_PER_DAY),
    hours: Math.floor((totalSeconds % SECONDS_PER_DAY) / SECONDS_PER_HOUR),
    minutes: Math.floor((totalSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE),
    seconds: totalSeconds % SECONDS_PER_MINUTE
  }
}
