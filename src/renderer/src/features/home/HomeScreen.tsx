import { GlowOrbs } from '@renderer/components/decor/GlowOrbs'
import { Sparkles } from '@renderer/components/decor/Sparkles'
import { Backdrop } from '@renderer/components/layout/Backdrop'
import { PageShell } from '@renderer/components/layout/PageShell'
import { useNow } from '@renderer/hooks/useNow'
import { Greeting } from './components/Greeting'
import { HomeHeader } from './components/HomeHeader'
import { Mandala } from './components/Mandala'
import { NavGrid } from './components/NavGrid'
import { TogetherCounter } from './components/TogetherCounter'
import { NOW_TICK_MS } from './constants'
import { homeGlowOrbs, homeSparks } from './layout'

export function HomeScreen(): React.JSX.Element {
  const now = useNow(NOW_TICK_MS)

  return (
    <PageShell
      containerClassName="gap-[clamp(20px,3.4vh,40px)]"
      backdrop={
        <Backdrop>
          <GlowOrbs orbs={homeGlowOrbs} />
          <Sparkles sparks={homeSparks} />
        </Backdrop>
      }
    >
      <HomeHeader now={now} />
      <main className="flex flex-1 flex-col justify-center gap-[clamp(24px,4vh,44px)]">
        <div className="flex flex-wrap items-center gap-[clamp(32px,5vw,80px)]">
          <section className="flex min-w-0 flex-[1_1_560px] flex-col gap-5.5">
            <Greeting now={now} />
            <TogetherCounter />
          </section>
          <Mandala />
        </div>
        <NavGrid />
      </main>
    </PageShell>
  )
}
