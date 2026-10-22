import type { CSSProperties } from 'react'

type RingProps = {
  delayS?: number
}

export function Ring({ delayS = 0 }: RingProps): React.JSX.Element {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-1/2 left-1/2 -m-[100px] size-[200px] animate-ring-expand rounded-full border-2 border-orchid/70 [animation-delay:var(--delay)] motion-reduce:hidden"
      style={{ '--delay': `${delayS}s` } as CSSProperties}
    />
  )
}
