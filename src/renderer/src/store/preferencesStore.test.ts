import { describe, expect, it } from 'vitest'
import { usePreferencesStore } from './preferencesStore'

describe('preferencesStore', () => {
  it('remembers opened notes once', () => {
    const { markNoteOpened } = usePreferencesStore.getState()
    markNoteOpened('sad')
    markNoteOpened('sad')
    expect(usePreferencesStore.getState().openedNoteIds).toEqual(['sad'])
  })

  it('persists under the prefixed key', () => {
    usePreferencesStore.getState().setLastReasonIndex(3)
    const stored = JSON.parse(localStorage.getItem('beba-tacije:preferences') ?? '{}')
    expect(stored.state).toEqual({ openedNoteIds: ['sad'], lastReasonIndex: 3 })
  })
})
