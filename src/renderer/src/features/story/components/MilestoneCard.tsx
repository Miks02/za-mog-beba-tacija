import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import type { CardTone, MilestoneSlot } from '../layout'

const toneClassName: Record<CardTone, { card: string; label: string }> = {
  start: { card: 'border-orchid/40 bg-haze/8', label: 'text-orchid' },
  middle: { card: 'border-haze/14 bg-haze/6', label: 'text-lilac' },
  today: { card: 'border-orchid/50 bg-orchid/12 shadow-story-card-today', label: 'text-orchid' }
}

type MilestoneCardProps = {
  label: string
  title: string
  text: string
  card: MilestoneSlot['card']
}

export function MilestoneCard({ label, title, text, card }: MilestoneCardProps): React.JSX.Element {
  const tone = toneClassName[card.tone]
  return (
    <li
      className={cn(
        'absolute left-(--left) flex w-60 animate-story-card flex-col gap-1.5 rounded-[18px] border px-[18px] py-4 [animation-delay:var(--delay)] motion-reduce:animate-fade-in',
        card.top === undefined ? 'bottom-(--bottom)' : 'top-(--top)',
        tone.card
      )}
      style={
        {
          '--left': `${card.left}px`,
          '--top': `${card.top ?? 0}px`,
          '--bottom': `${card.bottom ?? 0}px`,
          '--delay': `${card.delayS}s`
        } as CSSProperties
      }
    >
      <span className={cn('text-[11.5px] font-bold tracking-[0.16em] uppercase', tone.label)}>
        {label}
      </span>
      <span className="font-display text-[22px] leading-[1.2] text-haze">{title}</span>
      <span className="text-sm leading-[1.5] text-mist">{text}</span>
    </li>
  )
}
