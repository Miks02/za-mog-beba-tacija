import { TIMELINE_PATH, TRACK_HEIGHT, TRACK_WIDTH } from '../layout'

export function TimelinePath(): React.JSX.Element {
  return (
    <svg
      aria-hidden
      width={TRACK_WIDTH}
      height={TRACK_HEIGHT}
      viewBox={`0 0 ${TRACK_WIDTH} ${TRACK_HEIGHT}`}
      className="absolute top-0 left-0 overflow-visible"
    >
      <path
        d={TIMELINE_PATH}
        fill="none"
        strokeWidth={2}
        strokeDasharray="2 8"
        strokeLinecap="round"
        className="stroke-haze/10"
      />
      <path
        d={TIMELINE_PATH}
        fill="none"
        strokeWidth={3}
        strokeLinecap="round"
        className="story-line animate-story-draw stroke-lilac drop-shadow-story-line motion-reduce:animate-none"
      />
    </svg>
  )
}
