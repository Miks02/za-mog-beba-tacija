import { cn } from '@renderer/lib/cn'

type ProgressDotsProps = {
  ids: ReadonlyArray<string>
  activeIndex: number
}

export function ProgressDots({ ids, activeIndex }: ProgressDotsProps): React.JSX.Element {
  return (
    <div aria-hidden className="relative flex items-center gap-2">
      {ids.map((id, index) => (
        <span
          key={id}
          className={cn(
            'block h-2 rounded-full transition-[width,background-color] duration-400 ease-in-out',
            index === activeIndex ? 'w-7 bg-orchid' : 'w-2 bg-haze/22'
          )}
        />
      ))}
    </div>
  )
}
