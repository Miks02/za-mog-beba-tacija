import { useState } from 'react'
import { usePreferencesStore } from '@renderer/store/preferencesStore'

type OpenNotes = {
  isOpen: (id: string) => boolean
  toggle: (id: string) => void
  openedEverCount: number
}

export function useOpenNotes(ids: ReadonlyArray<string>): OpenNotes {
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(() => new Set())
  const openedNoteIds = usePreferencesStore((s) => s.openedNoteIds)
  const markNoteOpened = usePreferencesStore((s) => s.markNoteOpened)

  const toggle = (id: string): void => {
    const next = new Set(openIds)
    if (next.has(id)) {
      next.delete(id)
    } else {
      next.add(id)
      markNoteOpened(id)
    }
    setOpenIds(next)
  }

  return {
    isOpen: (id) => openIds.has(id),
    toggle,
    openedEverCount: ids.filter((id) => openedNoteIds.includes(id)).length
  }
}
