import type { CSSProperties } from 'react'
import { paths } from '@renderer/app/paths'
import { GlowOrbs } from '@renderer/components/decor/GlowOrbs'
import { Sparkles } from '@renderer/components/decor/Sparkles'
import { Backdrop } from '@renderer/components/layout/Backdrop'
import { PageHeader } from '@renderer/components/layout/PageHeader'
import { PageShell } from '@renderer/components/layout/PageShell'
import { config } from '@renderer/content/config'
import { openWhenNotes, openWhenSignaturePrefix } from '@renderer/content/openWhen'
import { NoteCard } from './components/NoteCard'
import { DEAL_START_DELAY_S, DEAL_STEP_S, SUBTITLE_DELAY_S, TITLE_DELAY_S } from './constants'
import { useOpenNotes } from './hooks/useOpenNotes'
import { openWhenGlowOrbs, openWhenSparks } from './layout'

const RISE_CLASS_NAME = 'animate-rise [animation-delay:var(--delay)] motion-reduce:animate-fade-in'
const noteIds = openWhenNotes.map((note) => note.id)
const signature = `${openWhenSignaturePrefix} ${config.signature}`

const delayStyle = (delayS: number): CSSProperties => ({ '--delay': `${delayS}s` }) as CSSProperties

export function OpenWhenScreen(): React.JSX.Element {
  const { isOpen, toggle, openedEverCount } = useOpenNotes(noteIds)

  return (
    <PageShell
      containerClassName="max-w-[1180px] gap-[18px]"
      backdrop={
        <Backdrop>
          <GlowOrbs orbs={openWhenGlowOrbs} />
          <Sparkles sparks={openWhenSparks} />
        </Backdrop>
      }
    >
      <PageHeader
        backTo={paths.home}
        right={
          <span aria-live="polite" className="text-[13px] font-semibold text-dusk tabular-nums">
            Otvoreno {openedEverCount} od {openWhenNotes.length}
          </span>
        }
      />
      <div className="flex flex-col items-center gap-1 text-center">
        <h1
          className={`${RISE_CLASS_NAME} m-0 font-script text-[clamp(54px,5.8vw,88px)] leading-[1.1] font-normal text-haze text-shadow-title`}
          style={delayStyle(TITLE_DELAY_S)}
        >
          Otvori kad…
        </h1>
        <p
          className={`${RISE_CLASS_NAME} m-0 font-display text-lg text-mist italic`}
          style={delayStyle(SUBTITLE_DELAY_S)}
        >
          Za svaki trenutak kad ti zatreba malo mene.
        </p>
      </div>
      <div className="grid flex-1 grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] content-center gap-[22px] pt-2.5">
        {openWhenNotes.map((note, index) => (
          <NoteCard
            key={note.id}
            note={note}
            isOpen={isOpen(note.id)}
            signature={signature}
            delayS={DEAL_START_DELAY_S + index * DEAL_STEP_S}
            onToggle={toggle}
          />
        ))}
      </div>
    </PageShell>
  )
}
