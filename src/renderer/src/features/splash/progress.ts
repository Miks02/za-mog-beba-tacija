import { clamp } from '@renderer/lib/clamp'
import { PROGRESS_EASE_POWER, statusMessages } from './constants'

const STATUS_STEP_PERCENT = 25
const LAST_LOADING_STATUS = statusMessages.length - 2
const DONE_STATUS = statusMessages.length - 1

export function easedPercent(elapsedMs: number, totalMs: number): number {
  const t = clamp(elapsedMs / totalMs, 0, 1)
  return Math.round((1 - Math.pow(1 - t, PROGRESS_EASE_POWER)) * 100)
}

export function statusIndexFor(percent: number): number {
  if (percent >= 100) return DONE_STATUS
  return Math.min(LAST_LOADING_STATUS, Math.floor(percent / STATUS_STEP_PERCENT))
}
