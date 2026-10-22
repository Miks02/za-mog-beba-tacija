import { useMemo, type CSSProperties } from 'react'
import { config } from '@renderer/content/config'
import { useTogetherTime } from '@renderer/hooks/useTogetherTime'
import { formatSinceLabel, parseLocalDateTime } from '@renderer/lib/dateSr'
import { COUNTER_DELAY_S } from '../constants'
import { TimeUnit } from './TimeUnit'

export function TogetherCounter(): React.JSX.Element {
  const { days, hours, minutes, seconds } = useTogetherTime(config.relationshipStart)
  const sinceLabel = useMemo(
    () => formatSinceLabel(parseLocalDateTime(config.relationshipStart)),
    []
  )

  return (
    <div
      className="relative flex w-fit max-w-full animate-home-rise flex-wrap items-center gap-x-[26px] gap-y-[18px] overflow-hidden rounded-[22px] border border-haze/14 bg-haze/5 px-6 py-[18px] [animation-delay:var(--delay)] motion-reduce:animate-fade-in"
      style={{ '--delay': `${COUNTER_DELAY_S}s` } as CSSProperties}
    >
      <div className="flex items-baseline gap-2.5">
        <span className="font-display text-[60px] leading-none font-normal text-haze tabular-nums">
          {days}
        </span>
        <span className="text-[15px] font-bold text-haze">dana</span>
      </div>
      <div aria-hidden className="w-px self-stretch bg-haze/16" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <TimeUnit value={hours} label="sati" />
          <TimeUnit value={minutes} label="minuta" />
          <TimeUnit value={seconds} label="sekundi" isAccent />
        </div>
        <span className="text-[13px] text-dusk">Moj život cveta od {sinceLabel}</span>
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[40%] animate-home-sheen bg-linear-90 from-haze/0 via-haze/8 to-haze/0 motion-reduce:hidden"
      />
    </div>
  )
}
