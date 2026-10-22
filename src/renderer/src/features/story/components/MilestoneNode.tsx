import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import type { MilestoneSlot, NodeTone } from '../layout'

const coreClassName: Record<NodeTone, string> = {
  start: 'bg-haze shadow-story-start',
  middle: 'border-[3px] border-night bg-lilac shadow-story-ring',
  today: 'bg-orchid shadow-story-today'
}

type MilestoneNodeProps = {
  node: MilestoneSlot['node']
}

export function MilestoneNode({ node }: MilestoneNodeProps): React.JSX.Element {
  const isToday = node.tone === 'today'
  return (
    <div
      aria-hidden
      className={cn(
        'absolute top-(--top) left-(--left) animate-story-pop [animation-delay:var(--delay)] motion-reduce:animate-fade-in',
        isToday ? '-m-3 size-6' : '-m-[9px] size-[18px]'
      )}
      style={
        {
          '--left': `${node.x}px`,
          '--top': `${node.y}px`,
          '--delay': `${node.delayS}s`
        } as CSSProperties
      }
    >
      {node.pingDelaysS.map((delayS) => (
        <span
          key={delayS}
          className="absolute inset-0 animate-story-ping rounded-full border-2 border-orchid [animation-delay:var(--ping-delay)] motion-reduce:hidden"
          style={{ '--ping-delay': `${delayS}s` } as CSSProperties}
        />
      ))}
      <span className={cn('absolute inset-0 rounded-full', coreClassName[node.tone])} />
    </div>
  )
}
