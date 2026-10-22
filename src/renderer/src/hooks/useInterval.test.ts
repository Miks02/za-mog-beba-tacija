import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act } from 'react'
import { renderHook } from '@renderer/test/renderHook'
import { useInterval } from './useInterval'

describe('useInterval', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('calls the callback on every tick', () => {
    const callback = vi.fn()
    const hook = renderHook(() => useInterval(callback, 1000))
    act(() => vi.advanceTimersByTime(3000))
    expect(callback).toHaveBeenCalledTimes(3)
    hook.unmount()
  })

  it('does nothing when the delay is null', () => {
    const callback = vi.fn()
    const hook = renderHook(() => useInterval(callback, null))
    act(() => vi.advanceTimersByTime(5000))
    expect(callback).not.toHaveBeenCalled()
    hook.unmount()
  })

  it('stops after unmount', () => {
    const callback = vi.fn()
    const hook = renderHook(() => useInterval(callback, 500))
    hook.unmount()
    vi.advanceTimersByTime(2000)
    expect(callback).not.toHaveBeenCalled()
  })
})
