import { beforeEach, describe, expect, it } from 'vitest'
import { act } from 'react'
import { usePreferencesStore } from '@renderer/store/preferencesStore'
import { renderHook } from '@renderer/test/renderHook'
import { useOpenNotes } from './useOpenNotes'

describe('useOpenNotes', () => {
  beforeEach(() => usePreferencesStore.setState({ openedNoteIds: [] }))

  it('flips a note open and closed while remembering it was opened', () => {
    const hook = renderHook(() => useOpenNotes(['a', 'b']))
    act(() => hook.result.current.toggle('a'))
    expect(hook.result.current.isOpen('a')).toBe(true)
    expect(hook.result.current.openedEverCount).toBe(1)
    act(() => hook.result.current.toggle('a'))
    expect(hook.result.current.isOpen('a')).toBe(false)
    expect(hook.result.current.openedEverCount).toBe(1)
    hook.unmount()
  })

  it('ignores remembered ids that are no longer in the content', () => {
    usePreferencesStore.setState({ openedNoteIds: ['removed', 'b'] })
    const hook = renderHook(() => useOpenNotes(['a', 'b']))
    expect(hook.result.current.openedEverCount).toBe(1)
    hook.unmount()
  })
})
