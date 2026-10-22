import type { CSSProperties } from 'react'
import { HeartIcon } from '@renderer/components/decor/HeartIcon'
import { LOADING_BAR_DELAY_S, statusMessages } from '../constants'

type LoadingBarProps = {
  percent: number
  statusIndex: number
}

export function LoadingBar({ percent, statusIndex }: LoadingBarProps): React.JSX.Element {
  return (
    <div
      className="flex w-[min(440px,82vw)] animate-fade-up flex-col gap-3.5 [animation-delay:var(--delay)] motion-reduce:animate-fade-in"
      style={{ '--delay': `${LOADING_BAR_DELAY_S}s` } as CSSProperties}
    >
      <div
        role="progressbar"
        aria-label="Učitavanje"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        className="relative h-1.5 rounded-full bg-haze/10"
      >
        <div
          className="h-full origin-left rounded-full bg-linear-90 from-iris via-lilac via-60% to-orchid-deep shadow-splash-bar"
          style={{ scale: `${percent / 100} 1` }}
        />
        <div className="absolute inset-0" style={{ translate: `${percent}% 0` }}>
          <div className="absolute top-1/2 left-0 -mt-[11px] -ml-[11px] size-[22px]">
            <HeartIcon
              className="block size-[22px] fill-haze drop-shadow-splash-heart"
              pathClassName="origin-center animate-splash-beat transform-fill motion-reduce:animate-none"
            />
          </div>
        </div>
      </div>
      <div className="flex items-baseline justify-between gap-4 text-sm text-mist">
        <span>{statusMessages[statusIndex]}</span>
        <span className="font-semibold text-haze tabular-nums">{percent}%</span>
      </div>
    </div>
  )
}
