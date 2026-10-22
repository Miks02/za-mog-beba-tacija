import { paths } from '@renderer/app/paths'
import { GlowOrbs } from '@renderer/components/decor/GlowOrbs'
import { Backdrop } from '@renderer/components/layout/Backdrop'
import { PageHeader } from '@renderer/components/layout/PageHeader'
import { PageShell } from '@renderer/components/layout/PageShell'
import { ScriptLabel } from '@renderer/components/ui/ScriptLabel'
import { config } from '@renderer/content/config'
import { Envelope } from './components/Envelope'
import { LetterCard } from './components/LetterCard'
import { useEnvelope } from './hooks/useEnvelope'
import { letterGlowOrbs } from './layout'

export function LetterScreen(): React.JSX.Element {
  const { phase, open, close } = useEnvelope()

  return (
    <PageShell
      containerClassName="gap-6 py-[clamp(24px,4vw,56px)]"
      backdrop={
        <Backdrop>
          <GlowOrbs orbs={letterGlowOrbs} />
        </Backdrop>
      }
    >
      <PageHeader backTo={paths.home} right={<ScriptLabel text={config.herName} />} />
      <main className="grid flex-1 place-items-center pt-2 pb-6">
        <div className="grid w-full place-items-center">
          {phase !== 'open' && (
            <Envelope
              isOpening={phase === 'opening'}
              recipient={`za ${config.herName}`}
              onOpen={open}
            />
          )}
          {phase !== 'closed' && <LetterCard onClose={close} />}
        </div>
      </main>
    </PageShell>
  )
}
