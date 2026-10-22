import { beforeEach, describe, expect, it } from 'vitest'
import { act } from 'react'
import { useOpenedNotesStore } from '@renderer/store/openedNotesStore'
import { renderHook } from '@renderer/test/renderHook'
import { useOpenNotes } from './useOpenNotes'

describe('useOpenNotes', () => {
  beforeEach(() => useOpenedNotesStore.setState({ openedNoteIds: [] }))

  it('flips a note open and closed while counting it as opened', () => {
    const hook = renderHook(() => useOpenNotes(['a', 'b']))
    act(() => hook.result.current.toggle('a'))
    expect(hook.result.current.isOpen('a')).toBe(true)
    expect(hook.result.current.openedCount).toBe(1)
    act(() => hook.result.current.toggle('a'))
    expect(hook.result.current.isOpen('a')).toBe(false)
    expect(hook.result.current.openedCount).toBe(1)
    hook.unmount()
  })

  it('ignores opened ids that are no longer in the content', () => {
    useOpenedNotesStore.setState({ openedNoteIds: ['removed', 'b'] })
    const hook = renderHook(() => useOpenNotes(['a', 'b']))
    expect(hook.result.current.openedCount).toBe(1)
    hook.unmount()
  })
})
