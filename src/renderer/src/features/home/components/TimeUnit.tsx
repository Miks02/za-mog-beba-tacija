import { cn } from '@renderer/lib/cn'
import { pad2 } from '@renderer/lib/dateSr'

type TimeUnitProps = {
  value: number
  label: string
  isAccent?: boolean
}

export function TimeUnit({ value, label, isAccent = false }: TimeUnitProps): React.JSX.Element {
  const display = pad2(value)
  return (
    <span
      className={cn(
        'min-w-[58px] rounded-[10px] px-2.5 py-1.5 text-center text-[13px] text-mist',
        isAccent ? 'overflow-hidden bg-orchid-deep/20' : 'bg-iris/18'
      )}
    >
      <b className="block text-xl font-bold text-haze tabular-nums">
        {isAccent ? (
          <span key={display} className="inline-block animate-home-tick motion-reduce:animate-none">
            {display}
          </span>
        ) : (
          display
        )}
      </b>
      {label}
    </span>
  )
}
