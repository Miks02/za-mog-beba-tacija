import type { ReactNode } from 'react'
import { cn } from '@renderer/lib/cn'

type PageShellProps = {
  children: ReactNode
  backdrop?: ReactNode
  className?: string
  containerClassName?: string
}

export function PageShell({
  children,
  backdrop,
  className,
  containerClassName
}: PageShellProps): React.JSX.Element {
  return (
    <div className={cn('relative min-h-dvh w-full overflow-hidden bg-night text-haze', className)}>
      {backdrop}
      <div
        className={cn(
          'relative z-1 mx-auto flex min-h-dvh w-full max-w-[1280px] flex-col gap-8 px-[clamp(24px,4vw,56px)] py-[clamp(24px,3.4vw,48px)]',
          containerClassName
        )}
      >
        {children}
      </div>
    </div>
  )
}
