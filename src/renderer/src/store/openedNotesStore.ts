import { create } from 'zustand'

type OpenedNotesState = {
  openedNoteIds: ReadonlyArray<string>
  markNoteOpened: (id: string) => void
}

export const useOpenedNotesStore = create<OpenedNotesState>()((set) => ({
  openedNoteIds: [],
  markNoteOpened: (id) =>
    set((state) =>
      state.openedNoteIds.includes(id) ? state : { openedNoteIds: [...state.openedNoteIds, id] }
    )
}))
