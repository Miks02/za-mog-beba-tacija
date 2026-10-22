import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import type { OpenWhenNote } from '@renderer/types/content'
import { NoteBack } from './NoteBack'
import { NoteFront } from './NoteFront'
import { SparkleBurst } from './SparkleBurst'

type NoteCardProps = {
  note: OpenWhenNote
  isOpen: boolean
  signature: string
  delayS: number
  onToggle: (id: string) => void
}

export function NoteCard({
  note,
  isOpen,
  signature,
  delayS,
  onToggle
}: NoteCardProps): React.JSX.Element {
  return (
    <div
      className="relative animate-open-when-deal [animation-delay:var(--delay)] motion-reduce:animate-fade-in"
      style={{ '--delay': `${delayS}s` } as CSSProperties}
    >
      <button
        type="button"
        aria-pressed={isOpen}
        aria-label={`Otvori kad ${note.label}`}
        onClick={() => onToggle(note.id)}
        className="block h-[clamp(190px,26vh,232px)] w-full border-0 bg-transparent p-0 text-left font-[inherit] text-inherit transition-[translate] duration-350 ease-[cubic-bezier(0.2,0.8,0.2,1)] perspective-[1200px] hover:-translate-y-1.5"
      >
        <div className={cn('open-when-inner relative size-full', isOpen && 'open-when-flipped')}>
          <NoteFront label={note.label} />
          <NoteBack label={note.label} message={note.message} signature={signature} />
        </div>
      </button>
      {isOpen && <SparkleBurst />}
    </div>
  )
}
