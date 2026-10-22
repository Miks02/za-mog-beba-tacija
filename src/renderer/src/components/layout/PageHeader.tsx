import type { ReactNode } from 'react'
import { BackLink } from '@renderer/components/ui/BackLink'

type PageHeaderProps = {
  backTo: string
  right?: ReactNode
}

export function PageHeader({ backTo, right }: PageHeaderProps): React.JSX.Element {
  return (
    <header className="flex animate-rise items-center justify-between gap-4 motion-reduce:animate-none">
      <BackLink to={backTo} />
      {right}
    </header>
  )
}
