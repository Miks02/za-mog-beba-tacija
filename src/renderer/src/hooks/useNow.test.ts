import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act } from 'react'
import { renderHook } from '@renderer/test/renderHook'
import { useNow } from './useNow'

describe('useNow', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 9, 22, 10, 0, 0))
  })
  afterEach(() => vi.useRealTimers())

  it('updates the current time on every interval', () => {
    const hook = renderHook(() => useNow(1000))
    expect(hook.result.current.getSeconds()).toBe(0)
    act(() => vi.advanceTimersByTime(2000))
    expect(hook.result.current.getSeconds()).toBe(2)
    hook.unmount()
  })
})
