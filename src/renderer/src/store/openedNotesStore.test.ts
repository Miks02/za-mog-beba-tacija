import { describe, expect, it } from 'vitest'
import { useOpenedNotesStore } from './openedNotesStore'

describe('openedNotesStore', () => {
  it('remembers opened notes once', () => {
    const { markNoteOpened } = useOpenedNotesStore.getState()
    markNoteOpened('sad')
    markNoteOpened('sad')
    expect(useOpenedNotesStore.getState().openedNoteIds).toEqual(['sad'])
  })

  it('never writes to localStorage', () => {
    useOpenedNotesStore.getState().markNoteOpened('happy')
    const keys = Object.keys(localStorage)
    expect(keys.some((key) => (localStorage.getItem(key) ?? '').includes('happy'))).toBe(false)
  })
})
