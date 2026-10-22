import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import { bloomFillClassName } from '../palette'
import type { TulipHead } from '../types'

const TULIP_PATH = 'M0 0 C-15 -3 -18 -26 -12 -40 L-6 -30 L0 -44 L6 -30 L12 -40 C18 -26 15 -3 0 0Z'
const TULIP_HIGHLIGHT_PATH = 'M0 -4 C-6 -8 -6 -26 0 -40 C6 -26 6 -8 0 -4Z'

type TulipProps = {
  head: TulipHead
}

export function Tulip({ head }: TulipProps): React.JSX.Element {
  return (
    <g transform={head.transform}>
      <g
        className={cn(
          'origin-bottom animate-splash-bud [animation-delay:var(--delay)] transform-fill motion-reduce:animate-none',
          bloomFillClassName[head.color]
        )}
        style={{ '--delay': `${head.delayS}s` } as CSSProperties}
      >
        <path d={TULIP_PATH} />
        <path d={TULIP_HIGHLIGHT_PATH} className="fill-white" fillOpacity={head.highlightOpacity} />
      </g>
    </g>
  )
}
