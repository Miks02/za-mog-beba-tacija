import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act } from 'react'
import { renderHook } from '@renderer/test/renderHook'
import { useEnvelope } from './useEnvelope'

describe('useEnvelope', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('opens through the opening phase and closes through the closing phase', () => {
    const hook = renderHook(() => useEnvelope())
    expect(hook.result.current.phase).toBe('closed')
    act(() => hook.result.current.open())
    expect(hook.result.current.phase).toBe('opening')
    act(() => vi.advanceTimersByTime(1550))
    expect(hook.result.current.phase).toBe('open')
    act(() => hook.result.current.close())
    expect(hook.result.current.phase).toBe('closing')
    act(() => vi.advanceTimersByTime(1900))
    expect(hook.result.current.phase).toBe('closed')
    hook.unmount()
  })

  it('returns the letter when closed early', () => {
    const hook = renderHook(() => useEnvelope())
    act(() => hook.result.current.open())
    act(() => hook.result.current.close())
    expect(hook.result.current.phase).toBe('closing')
    act(() => vi.advanceTimersByTime(2000))
    expect(hook.result.current.phase).toBe('closed')
    hook.unmount()
  })

  it('ignores open while the letter is returning', () => {
    const hook = renderHook(() => useEnvelope())
    act(() => hook.result.current.open())
    act(() => vi.advanceTimersByTime(1550))
    act(() => hook.result.current.close())
    act(() => hook.result.current.open())
    expect(hook.result.current.phase).toBe('closing')
    hook.unmount()
  })
})
