import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const STORAGE_KEY = 'beba-tacije:preferences'

type PreferencesState = {
  openedNoteIds: ReadonlyArray<string>
  lastReasonIndex: number
  markNoteOpened: (id: string) => void
  setLastReasonIndex: (index: number) => void
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      openedNoteIds: [],
      lastReasonIndex: 0,
      markNoteOpened: (id) =>
        set((state) =>
          state.openedNoteIds.includes(id) ? state : { openedNoteIds: [...state.openedNoteIds, id] }
        ),
      setLastReasonIndex: (index) => set({ lastReasonIndex: index })
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        openedNoteIds: state.openedNoteIds,
        lastReasonIndex: state.lastReasonIndex
      })
    }
  )
)
