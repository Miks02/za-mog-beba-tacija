import { useState, type CSSProperties } from 'react'
import { paths } from '@renderer/app/paths'
import { Backdrop } from '@renderer/components/layout/Backdrop'
import { PageHeader } from '@renderer/components/layout/PageHeader'
import { PageShell } from '@renderer/components/layout/PageShell'
import { config } from '@renderer/content/config'
import { formatDottedDate, parseLocalDateTime } from '@renderer/lib/dateSr'
import { HeartConstellation } from './components/HeartConstellation'
import { Moon } from './components/Moon'
import { ShootingStars } from './components/ShootingStars'
import { StarField } from './components/StarField'
import { WishButton } from './components/WishButton'
import { WishShower } from './components/WishShower'
import { LINE_DELAY_S, TITLE_DELAY_S } from './constants'

const constellationDate = formatDottedDate(parseLocalDateTime(config.relationshipStart))

const delayStyle = (delayS: number): CSSProperties => ({ '--delay': `${delayS}s` }) as CSSProperties

export function SkyScreen(): React.JSX.Element {
  const [wishCount, setWishCount] = useState(0)
  const handleWish = (): void => setWishCount((count) => count + 1)

  return (
    <PageShell
      className="sky-backdrop"
      containerClassName="gap-2"
      backdrop={
        <Backdrop>
          <StarField />
          <ShootingStars />
          <Moon />
          {wishCount > 0 && <WishShower key={wishCount} />}
        </Backdrop>
      }
    >
      <PageHeader backTo={paths.home} />
      <main className="flex flex-1 flex-col items-center justify-center gap-[18px] text-center">
        <h1
          className="m-0 animate-rise font-script text-[clamp(48px,5vw,72px)] leading-[1.1] font-normal text-haze [animation-delay:var(--delay)] text-shadow-sky motion-reduce:animate-fade-in"
          style={delayStyle(TITLE_DELAY_S)}
        >
          Naše nebo
        </h1>
        <HeartConstellation initials={config.initials} dateLabel={constellationDate} />
        <p
          className="m-0 animate-sky-late font-display text-[clamp(18px,1.6vw,22px)] text-lavender italic [animation-delay:var(--delay)] motion-reduce:animate-fade-in"
          style={delayStyle(LINE_DELAY_S)}
        >
          {config.messages.skyLine}
        </p>
        <WishButton wishCount={wishCount} onWish={handleWish} />
      </main>
    </PageShell>
  )
}
