import type { ReactNode } from 'react'
import { cn } from '@renderer/lib/cn'

type PillButtonVariant = 'primary' | 'honey' | 'outline'

const variantClassName: Record<PillButtonVariant, string> = {
  primary:
    'min-h-[52px] px-[30px] bg-haze text-plum-900 shadow-glow hover:-translate-y-0.5 hover:shadow-glow-strong active:scale-97',
  honey:
    'min-h-[50px] px-[26px] bg-honey text-plum-900 shadow-honey hover:-translate-y-0.5 hover:shadow-honey-strong active:scale-97',
  outline:
    'min-h-11 px-5 border border-ink-soft/30 bg-transparent text-ink-soft text-sm hover:bg-ink-soft/14'
}

type PillButtonProps = {
  children: ReactNode
  onClick?: () => void
  variant?: PillButtonVariant
  className?: string
}

export function PillButton({
  children,
  onClick,
  variant = 'primary',
  className
}: PillButtonProps): React.JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative inline-flex items-center justify-center gap-2.5 rounded-full border-0 font-sans text-[15px] font-bold transition-[translate,scale,box-shadow,background-color] duration-200 ease-out',
        variantClassName[variant],
        className
      )}
    >
      {children}
    </button>
  )
}
