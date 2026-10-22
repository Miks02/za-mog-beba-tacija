import { Image } from 'lucide-react'
import { cn } from '@renderer/lib/cn'

type PhotoPlaceholderProps = {
  number: number
  gradientClassName: string
  size: 'small' | 'large'
}

export function PhotoPlaceholder({
  number,
  gradientClassName,
  size
}: PhotoPlaceholderProps): React.JSX.Element {
  const isLarge = size === 'large'
  return (
    <span
      className={cn(
        'grid aspect-square w-full place-items-center bg-linear-160',
        gradientClassName
      )}
    >
      <span className={cn('flex flex-col items-center text-haze', isLarge ? 'gap-2.5' : 'gap-1.5')}>
        <Image aria-hidden size={isLarge ? 44 : 26} strokeWidth={isLarge ? 1.4 : 1.6} />
        <span
          className={cn(
            'font-bold',
            isLarge ? 'text-sm tracking-[0.14em]' : 'text-xs tracking-[0.12em]'
          )}
        >
          FOTO {number}
        </span>
      </span>
    </span>
  )
}
