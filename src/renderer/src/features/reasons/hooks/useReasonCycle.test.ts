import { beforeEach, describe, expect, it } from 'vitest'
import { act } from 'react'
import { usePreferencesStore } from '@renderer/store/preferencesStore'
import { renderHook } from '@renderer/test/renderHook'
import { useReasonCycle } from './useReasonCycle'

describe('useReasonCycle', () => {
  beforeEach(() => usePreferencesStore.getState().setLastReasonIndex(0))

  it('starts from the remembered reason and wraps around', () => {
    usePreferencesStore.getState().setLastReasonIndex(4)
    const hook = renderHook(() => useReasonCycle(6))
    expect(hook.result.current.index).toBe(4)
    act(() => hook.result.current.next())
    expect(hook.result.current.index).toBe(5)
    act(() => hook.result.current.next())
    expect(hook.result.current.index).toBe(0)
    expect(hook.result.current.burstCount).toBe(2)
    expect(usePreferencesStore.getState().lastReasonIndex).toBe(0)
    hook.unmount()
  })

  it('stays in range when the list got shorter', () => {
    usePreferencesStore.getState().setLastReasonIndex(9)
    const hook = renderHook(() => useReasonCycle(6))
    expect(hook.result.current.index).toBe(3)
    hook.unmount()
  })
})
