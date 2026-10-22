import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'

type BackLinkProps = {
  to: string
}

export function BackLink({ to }: BackLinkProps): React.JSX.Element {
  return (
    <Link
      to={to}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-haze/16 bg-haze/8 pr-[18px] pl-3.5 text-sm font-semibold text-haze no-underline transition-colors duration-200 hover:bg-haze/14"
    >
      <ArrowLeft aria-hidden size={18} strokeWidth={1.8} />
      <span>Nazad</span>
    </Link>
  )
}
