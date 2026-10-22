import { formatClock } from '@renderer/lib/dateSr'

type ClockProps = {
  now: Date
}

export function Clock({ now }: ClockProps): React.JSX.Element {
  return (
    <span className="pr-2 text-[15px] font-semibold text-mist tabular-nums">
      {formatClock(now)}
    </span>
  )
}
