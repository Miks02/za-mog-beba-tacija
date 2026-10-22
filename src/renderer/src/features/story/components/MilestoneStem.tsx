import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import type { MilestoneSlot } from '../layout'

type MilestoneStemProps = {
  stem: MilestoneSlot['stem']
}

export function MilestoneStem({ stem }: MilestoneStemProps): React.JSX.Element {
  return (
    <div
      aria-hidden
      className={cn(
        'absolute top-(--top) left-(--left) h-[30px] w-0.5 animate-story-stem bg-orchid/50 [animation-delay:var(--delay)] motion-reduce:animate-fade-in',
        stem.direction === 'up' ? 'origin-bottom' : 'origin-top'
      )}
      style={
        {
          '--left': `${stem.left}px`,
          '--top': `${stem.top}px`,
          '--delay': `${stem.delayS}s`
        } as CSSProperties
      }
    />
  )
}
