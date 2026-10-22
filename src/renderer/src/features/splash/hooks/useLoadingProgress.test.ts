import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act } from 'react'
import { renderHook } from '@renderer/test/renderHook'
import { useLoadingProgress } from './useLoadingProgress'

describe('useLoadingProgress', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('reaches 100 percent after the given seconds and stops', () => {
    const hook = renderHook(() => useLoadingProgress(6))
    expect(hook.result.current).toEqual({ percent: 0, isDone: false, statusIndex: 0 })
    act(() => vi.advanceTimersByTime(3000))
    expect(hook.result.current.percent).toBeGreaterThan(50)
    expect(hook.result.current.isDone).toBe(false)
    act(() => vi.advanceTimersByTime(3100))
    expect(hook.result.current).toEqual({ percent: 100, isDone: true, statusIndex: 4 })
    expect(vi.getTimerCount()).toBe(0)
    hook.unmount()
  })
})
