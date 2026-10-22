import type { CSSProperties } from 'react'
import { paths } from '@renderer/app/paths'
import { GlowOrbs } from '@renderer/components/decor/GlowOrbs'
import { Sparkles } from '@renderer/components/decor/Sparkles'
import { Backdrop } from '@renderer/components/layout/Backdrop'
import { PageHeader } from '@renderer/components/layout/PageHeader'
import { PageShell } from '@renderer/components/layout/PageShell'
import { ScriptLabel } from '@renderer/components/ui/ScriptLabel'
import { config } from '@renderer/content/config'
import { finalMilestone, milestones } from '@renderer/content/timeline'
import { TimelineTrack, type TimelineEntry } from './components/TimelineTrack'
import { SUBTITLE_DELAY_S, TITLE_DELAY_S } from './constants'
import { useDaysTogether } from './hooks/useDaysTogether'
import { storyGlowOrbs, storySparks } from './layout'

const RISE_CLASS_NAME = 'animate-rise [animation-delay:var(--delay)] motion-reduce:animate-fade-in'

const delayStyle = (delayS: number): CSSProperties => ({ '--delay': `${delayS}s` }) as CSSProperties

export function StoryScreen(): React.JSX.Element {
  const days = useDaysTogether(config.relationshipStart)
  const entries: ReadonlyArray<TimelineEntry> = [
    ...milestones.map((milestone) => ({ ...milestone, label: milestone.date })),
    {
      id: 'today',
      label: finalMilestone.label,
      title: `${days} ${finalMilestone.titleSuffix}`,
      text: finalMilestone.text
    }
  ]

  return (
    <PageShell
      containerClassName="h-dvh gap-4"
      backdrop={
        <Backdrop>
          <GlowOrbs orbs={storyGlowOrbs} />
          <Sparkles sparks={storySparks} />
        </Backdrop>
      }
    >
      <PageHeader backTo={paths.home} right={<ScriptLabel text={config.herName} />} />
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h1
          className={`${RISE_CLASS_NAME} m-0 font-script text-[clamp(56px,6vw,92px)] leading-[1.1] font-normal text-haze text-shadow-title`}
          style={delayStyle(TITLE_DELAY_S)}
        >
          Naša priča
        </h1>
        <p
          className={`${RISE_CLASS_NAME} m-0 font-display text-lg text-mist italic`}
          style={delayStyle(SUBTITLE_DELAY_S)}
        >
          od prve noći do danas
        </p>
      </div>
      <TimelineTrack entries={entries} />
    </PageShell>
  )
}
