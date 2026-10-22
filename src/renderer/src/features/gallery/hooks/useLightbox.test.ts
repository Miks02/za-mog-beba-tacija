import { describe, expect, it } from 'vitest'
import { act } from 'react'
import { renderHook } from '@renderer/test/renderHook'
import { useLightbox } from './useLightbox'

function press(key: string): KeyboardEvent {
  const event = new KeyboardEvent('keydown', { key, cancelable: true })
  act(() => {
    window.dispatchEvent(event)
  })
  return event
}

describe('useLightbox', () => {
  it('opens, wraps around and closes', () => {
    const hook = renderHook(() => useLightbox(3))
    act(() => hook.result.current.open(2))
    expect(hook.result.current.selectedIndex).toBe(2)
    act(() => hook.result.current.next())
    expect(hook.result.current.selectedIndex).toBe(0)
    act(() => hook.result.current.prev())
    expect(hook.result.current.selectedIndex).toBe(2)
    act(() => hook.result.current.close())
    expect(hook.result.current.selectedIndex).toBeNull()
    hook.unmount()
  })

  it('handles arrow keys and consumes Escape while open', () => {
    const hook = renderHook(() => useLightbox(9))
    act(() => hook.result.current.open(0))
    press('ArrowRight')
    expect(hook.result.current.selectedIndex).toBe(1)
    press('ArrowLeft')
    press('ArrowLeft')
    expect(hook.result.current.selectedIndex).toBe(8)
    const escape = press('Escape')
    expect(escape.defaultPrevented).toBe(true)
    expect(hook.result.current.selectedIndex).toBeNull()
    hook.unmount()
  })

  it('leaves Escape alone while closed', () => {
    const hook = renderHook(() => useLightbox(9))
    expect(press('Escape').defaultPrevented).toBe(false)
    hook.unmount()
  })

  it('counts every flip so the zoom can restart', () => {
    const hook = renderHook(() => useLightbox(9))
    act(() => hook.result.current.open(4))
    act(() => hook.result.current.next())
    expect(hook.result.current.flipCount).toBe(2)
    hook.unmount()
  })
})
