import { useState } from 'react'
import { useOpenedNotesStore } from '@renderer/store/openedNotesStore'

type OpenNotes = {
  isOpen: (id: string) => boolean
  toggle: (id: string) => void
  openedCount: number
}

export function useOpenNotes(ids: ReadonlyArray<string>): OpenNotes {
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(() => new Set())
  const openedNoteIds = useOpenedNotesStore((s) => s.openedNoteIds)
  const markNoteOpened = useOpenedNotesStore((s) => s.markNoteOpened)

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
    openedCount: ids.filter((id) => openedNoteIds.includes(id)).length
  }
}
