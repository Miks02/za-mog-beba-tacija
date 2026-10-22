import type { CSSProperties } from 'react'
import { HeartIcon } from '@renderer/components/decor/HeartIcon'
import { EYEBROW_DELAY_S } from '../constants'

type SplashEyebrowProps = {
  text: string
}

export function SplashEyebrow({ text }: SplashEyebrowProps): React.JSX.Element {
  return (
    <div
      className="flex animate-fade-up items-center gap-2.5 text-base font-medium tracking-[0.14em] text-mist [animation-delay:var(--delay)] motion-reduce:animate-fade-in"
      style={{ '--delay': `${EYEBROW_DELAY_S}s` } as CSSProperties}
    >
      <HeartIcon className="size-3.5 fill-orchid" />
      <span>{text}</span>
    </div>
  )
}
