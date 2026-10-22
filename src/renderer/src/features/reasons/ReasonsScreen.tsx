import { paths } from '@renderer/app/paths'
import { GlowOrbs } from '@renderer/components/decor/GlowOrbs'
import { Backdrop } from '@renderer/components/layout/Backdrop'
import { PageHeader } from '@renderer/components/layout/PageHeader'
import { PageShell } from '@renderer/components/layout/PageShell'
import { ScriptLabel } from '@renderer/components/ui/ScriptLabel'
import { config } from '@renderer/content/config'
import { reasons } from '@renderer/content/reasons'
import { BigHeart } from './components/BigHeart'
import { NextReasonButton } from './components/NextReasonButton'
import { ProgressDots } from './components/ProgressDots'
import { ReasonCounter } from './components/ReasonCounter'
import { ReasonQuote } from './components/ReasonQuote'
import { useReasonCycle } from './hooks/useReasonCycle'
import { reasonsGlowOrbs } from './layout'

const reasonIds = reasons.map((reason) => reason.id)

export function ReasonsScreen(): React.JSX.Element {
  const { index, burstCount, next } = useReasonCycle(reasons.length)
  const reason = reasons[index]

  return (
    <PageShell
      containerClassName="py-[clamp(24px,4vw,56px)]"
      backdrop={
        <Backdrop>
          <GlowOrbs orbs={reasonsGlowOrbs} />
        </Backdrop>
      }
    >
      <PageHeader backTo={paths.home} right={<ScriptLabel text={config.herName} />} />
      <main className="relative flex flex-1 flex-col items-center justify-center gap-9 pb-[6vh] text-center">
        <BigHeart />
        <ReasonCounter index={index} />
        <ReasonQuote id={reason.id} text={reason.text} />
        <ProgressDots ids={reasonIds} activeIndex={index} />
        <NextReasonButton burstCount={burstCount} onNext={next} />
        {index + 1 === reasons.length && (
          <div>
            <p className="font-display text-lg text-lavender italic">
              Ima ih mnogo više od od ovih 7. Znaš da te volim više od sebe i da jedva čekam od tebe
              da čujem to sudbonosno 'DA!'.
            </p>
          </div>
        )}
      </main>
    </PageShell>
  )
}
