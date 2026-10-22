import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'

type BackLinkProps = {
  to: string
}

export function BackLink({ to }: BackLinkProps): React.JSX.Element {
  return (
    <Link
      to={to}
      className="group inline-flex min-h-11 items-center gap-3 rounded-full pr-2 text-mist no-underline transition-colors duration-300 hover:text-haze"
    >
      <span className="grid size-9 place-items-center rounded-full bg-haze/6 shadow-glow-soft transition-[background-color,translate] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-x-1 group-hover:bg-orchid/18 motion-reduce:group-hover:translate-x-0">
        <ArrowLeft aria-hidden size={17} strokeWidth={1.6} />
      </span>
      <span className="relative font-display text-[17px] italic">
        Nazad
        <span
          aria-hidden
          className="absolute right-0 -bottom-0.5 left-0 h-px origin-left scale-x-0 bg-linear-90 from-orchid to-orchid/0 transition-[scale] duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-x-100"
        />
      </span>
    </Link>
  )
}
