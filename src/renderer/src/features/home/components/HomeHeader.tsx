import type { CSSProperties } from 'react'
import { X } from 'lucide-react'
import { HeartIcon } from '@renderer/components/decor/HeartIcon'
import { IconButton } from '@renderer/components/ui/IconButton'
import { config } from '@renderer/content/config'
import { HEADER_DELAY_S } from '../constants'
import { Clock } from './Clock'
import { MusicToggle } from './MusicToggle'

type HomeHeaderProps = {
  now: Date
}

export function HomeHeader({ now }: HomeHeaderProps): React.JSX.Element {
  const handleClose = (): void => {
    window.api.quit()
  }

  return (
    <header
      className="flex animate-home-rise flex-wrap items-center justify-between gap-4 [animation-delay:var(--delay)] motion-reduce:animate-fade-in"
      style={{ '--delay': `${HEADER_DELAY_S}s` } as CSSProperties}
    >
      <div className="flex items-center gap-2.5">
        <HeartIcon className="size-[18px] fill-orchid" />
        <span className="font-script text-[32px] leading-none text-haze">{config.herName}</span>
      </div>
      <div className="flex items-center gap-2.5">
        <Clock now={now} />
        <MusicToggle />
        <IconButton label="Zatvori aplikaciju" onClick={handleClose}>
          <X aria-hidden size={18} strokeWidth={1.8} />
        </IconButton>
      </div>
    </header>
  )
}
