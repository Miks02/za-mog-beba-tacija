import type { CSSProperties } from 'react'
import { EYEBROW_DELAY_S } from '../constants'

type ReasonCounterProps = {
  index: number
}

export function ReasonCounter({ index }: ReasonCounterProps): React.JSX.Element {
  return (
    <div
      className="relative flex animate-rise items-center gap-3 text-[12.5px] font-semibold tracking-[0.28em] text-dusk uppercase [animation-delay:var(--delay)] motion-reduce:animate-fade-in"
      style={{ '--delay': `${EYEBROW_DELAY_S}s` } as CSSProperties}
    >
      <span>Razlog {index + 1}</span>
    </div>
  )
}
