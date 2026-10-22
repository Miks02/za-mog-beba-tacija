import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const STORAGE_KEY = 'beba-tacije:preferences'
const STORAGE_VERSION = 1

type PreferencesState = {
  lastReasonIndex: number
  setLastReasonIndex: (index: number) => void
}

type StoredPreferences = Pick<PreferencesState, 'lastReasonIndex'>

const toStoredPreferences = (persisted: unknown): StoredPreferences => {
  const index = (persisted as Partial<StoredPreferences> | null)?.lastReasonIndex
  return { lastReasonIndex: typeof index === 'number' ? index : 0 }
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      lastReasonIndex: 0,
      setLastReasonIndex: (index) => set({ lastReasonIndex: index })
    }),
    {
      name: STORAGE_KEY,
      version: STORAGE_VERSION,
      storage: createJSONStorage(() => localStorage),
      migrate: toStoredPreferences,
      partialize: (state): StoredPreferences => ({ lastReasonIndex: state.lastReasonIndex })
    }
  )
)
