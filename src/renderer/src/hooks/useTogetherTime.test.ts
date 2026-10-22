import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act } from 'react'
import { renderHook } from '@renderer/test/renderHook'
import { useTogetherTime } from './useTogetherTime'

describe('useTogetherTime', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2025, 5, 10, 2, 3, 4))
  })
  afterEach(() => vi.useRealTimers())

  it('counts from the start date and ticks every second', () => {
    const hook = renderHook(() => useTogetherTime('2025-06-09T01:00'))
    expect(hook.result.current).toEqual({ days: 1, hours: 1, minutes: 3, seconds: 4 })
    act(() => vi.advanceTimersByTime(1000))
    expect(hook.result.current.seconds).toBe(5)
    hook.unmount()
  })
})
