import { Image, Mail, MailOpen, Moon, Heart, Spline } from 'lucide-react'
import { paths } from '@renderer/app/paths'
import { GlowOrbs } from '@renderer/components/decor/GlowOrbs'
import { Sparkles } from '@renderer/components/decor/Sparkles'
import { Backdrop } from '@renderer/components/layout/Backdrop'
import { PageShell } from '@renderer/components/layout/PageShell'
import { NavTile } from '@renderer/components/ui/NavTile'
import { homeGlowOrbs, homeSparks } from './layout'

const ICON_PROPS = { size: 20, strokeWidth: 1.8, 'aria-hidden': true } as const

export function HomeScreen(): React.JSX.Element {
  return (
    <PageShell
      containerClassName="justify-center"
      backdrop={
        <Backdrop>
          <GlowOrbs orbs={homeGlowOrbs} />
          <Sparkles sparks={homeSparks} />
        </Backdrop>
      }
    >
      <h1 className="font-script text-8xl font-normal">Beba Tacije</h1>
      <nav
        aria-label="Iznenađenja"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(170px,100%),1fr))] gap-3.5"
      >
        <NavTile
          to={paths.letter}
          title="Pismo za tebe"
          subtitle="Otvori kovertu"
          tone="violet"
          delayS={1}
          icon={<Mail {...ICON_PROPS} />}
        />
        <NavTile
          to={paths.reasons}
          title="Zašto te volim"
          subtitle="Razlog na svaki klik"
          tone="orchid"
          delayS={1.08}
          icon={<Heart {...ICON_PROPS} />}
        />
        <NavTile
          to={paths.gallery}
          title="Naše uspomene"
          subtitle="Kolaž naših slika"
          tone="violet"
          delayS={1.16}
          icon={<Image {...ICON_PROPS} />}
        />
        <NavTile
          to={paths.story}
          title="Naša priča"
          subtitle="Od 9. juna do danas"
          tone="orchid"
          delayS={1.24}
          icon={<Spline {...ICON_PROPS} />}
        />
        <NavTile
          to={paths.openWhen}
          title="Otvori kad…"
          subtitle="Poruke za svaki trenutak"
          tone="violet"
          delayS={1.32}
          icon={<MailOpen {...ICON_PROPS} />}
        />
        <NavTile
          to={paths.sky}
          title="Naše nebo"
          subtitle="Zaželi želju"
          tone="orchid"
          delayS={1.4}
          icon={<Moon {...ICON_PROPS} />}
        />
      </nav>
    </PageShell>
  )
}
