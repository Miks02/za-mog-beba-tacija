import { useFitScale } from '../hooks/useFitScale'
import { milestoneSlots, TRACK_HEIGHT, TRACK_WIDTH } from '../layout'
import { MilestoneCard } from './MilestoneCard'
import { MilestoneNode } from './MilestoneNode'
import { MilestoneStem } from './MilestoneStem'
import { TimelinePath } from './TimelinePath'
import { TravelingHeart } from './TravelingHeart'

export type TimelineEntry = {
  id: string
  label: string
  title: string
  text: string
}

type TimelineTrackProps = {
  entries: ReadonlyArray<TimelineEntry>
}

export function TimelineTrack({ entries }: TimelineTrackProps): React.JSX.Element {
  const { boxRef, scale } = useFitScale(TRACK_WIDTH, TRACK_HEIGHT)
  const placed = entries.slice(0, milestoneSlots.length)

  return (
    <div ref={boxRef} className="flex min-h-0 w-full flex-1 items-center overflow-x-auto">
      <div
        className="relative mx-auto flex-none"
        style={{ width: TRACK_WIDTH * scale, height: TRACK_HEIGHT * scale }}
      >
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{ width: TRACK_WIDTH, height: TRACK_HEIGHT, scale }}
        >
          <TimelinePath />
          {placed.map((entry, index) => (
            <MilestoneStem key={entry.id} stem={milestoneSlots[index].stem} />
          ))}
          {placed.map((entry, index) => (
            <MilestoneNode key={entry.id} node={milestoneSlots[index].node} />
          ))}
          <TravelingHeart />
          <ol className="m-0 list-none p-0">
            {placed.map((entry, index) => (
              <MilestoneCard
                key={entry.id}
                label={entry.label}
                title={entry.title}
                text={entry.text}
                card={milestoneSlots[index].card}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
