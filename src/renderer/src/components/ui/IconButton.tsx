import type { ReactNode } from 'react'
import { cn } from '@renderer/lib/cn'

type IconButtonProps = {
  label: string
  children: ReactNode
  onClick?: () => void
  pressed?: boolean
  disabled?: boolean
  className?: string
}

export function IconButton({
  label,
  children,
  onClick,
  pressed,
  disabled,
  className
}: IconButtonProps): React.JSX.Element {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'grid size-11 shrink-0 place-items-center rounded-full border border-haze/16 bg-haze/8 p-0 text-haze transition-colors duration-200 hover:bg-haze/16 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-haze/8 aria-pressed:border-lilac/55 aria-pressed:bg-haze/20',
        className
      )}
    >
      {children}
    </button>
  )
}
