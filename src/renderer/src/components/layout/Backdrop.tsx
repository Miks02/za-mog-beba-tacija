import type { ReactNode } from 'react'
import { cn } from '@renderer/lib/cn'

type BackdropProps = {
  children: ReactNode
  className?: string
}

export function Backdrop({ children, className }: BackdropProps): React.JSX.Element {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {children}
    </div>
  )
}
