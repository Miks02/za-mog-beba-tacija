import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router'
import { cn } from '@renderer/lib/cn'

type NavTileTone = 'violet' | 'orchid'

const toneClassName: Record<NavTileTone, string> = {
  violet: 'bg-amethyst/24 text-lavender',
  orchid: 'bg-orchid-deep/22 text-orchid-pale'
}

type NavTileProps = {
  to: string
  title: string
  subtitle: string
  icon: ReactNode
  tone: NavTileTone
  delayS: number
}

export function NavTile({
  to,
  title,
  subtitle,
  icon,
  tone,
  delayS
}: NavTileProps): React.JSX.Element {
  return (
    <Link
      to={to}
      className="group flex min-h-[118px] animate-rise flex-col justify-between gap-3.5 rounded-[20px] border border-haze/16 bg-haze/7 px-[18px] py-4 text-haze no-underline transition-[translate,background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] [animation-delay:var(--delay)] hover:-translate-y-1.5 hover:border-lilac/55 hover:bg-haze/12 hover:shadow-tile-hover motion-reduce:animate-none"
      style={{ '--delay': `${delayS}s` } as CSSProperties}
    >
      <span
        className={cn(
          'grid size-[42px] place-items-center rounded-[13px] transition-[scale,rotate] duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-112 group-hover:-rotate-6',
          toneClassName[tone]
        )}
      >
        {icon}
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-[15.5px] font-bold">{title}</span>
        <span className="text-[13px] text-dusk">{subtitle}</span>
      </span>
    </Link>
  )
}
