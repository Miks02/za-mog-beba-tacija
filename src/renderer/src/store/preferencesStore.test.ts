import { describe, expect, it } from 'vitest'
import { usePreferencesStore } from './preferencesStore'

describe('preferencesStore', () => {
  it('persists only the last reason index under the prefixed key', () => {
    usePreferencesStore.getState().setLastReasonIndex(3)
    const stored = JSON.parse(localStorage.getItem('beba-tacije:preferences') ?? '{}')
    expect(stored.state).toEqual({ lastReasonIndex: 3 })
    expect(stored.version).toBe(1)
  })

  it('drops opened notes saved by the previous version', async () => {
    localStorage.setItem(
      'beba-tacije:preferences',
      JSON.stringify({ state: { openedNoteIds: ['sad'], lastReasonIndex: 2 }, version: 0 })
    )
    await usePreferencesStore.persist.rehydrate()
    expect(usePreferencesStore.getState()).not.toHaveProperty('openedNoteIds')
    expect(usePreferencesStore.getState().lastReasonIndex).toBe(2)
  })
})
