import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import { INITIALS_DELAY_S } from '../constants'
import { CONSTELLATION_OUTLINE, constellationStars } from '../layout'

type HeartConstellationProps = {
  initials: string
  dateLabel: string
}

export function HeartConstellation({
  initials,
  dateLabel
}: HeartConstellationProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 600 520"
      role="img"
      aria-label={`Sazvežđe u obliku srca sa inicijalima ${initials.replace(' & ', ' i ')}`}
      className="h-auto w-[min(500px,82vw,calc((100dvh-410px)*1.15))] overflow-visible"
    >
      <path
        d={`${CONSTELLATION_OUTLINE} Z`}
        strokeWidth={10}
        strokeLinejoin="round"
        fillOpacity={0.12}
        strokeOpacity={0.35}
        className="sky-halo animate-sky-halo fill-iris stroke-lilac motion-reduce:animate-none"
      />
      <path
        d={`${CONSTELLATION_OUTLINE} L300 150`}
        fill="none"
        strokeOpacity={0.75}
        strokeWidth={1.4}
        strokeLinejoin="round"
        className="sky-line animate-sky-draw stroke-lavender motion-reduce:animate-none"
      />
      <g className="drop-shadow-sky-stars">
        {constellationStars.map((star) => (
          <circle
            key={star.id}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            className={cn(
              'origin-center animate-sky-pop [animation-delay:var(--delay)] transform-fill motion-reduce:animate-fade-in',
              'isHoney' in star ? 'fill-honey' : 'fill-haze'
            )}
            style={{ '--delay': `${star.delayS}s` } as CSSProperties}
          />
        ))}
      </g>
      <g
        className="animate-sky-late [animation-delay:var(--delay)] motion-reduce:animate-fade-in"
        style={{ '--delay': `${INITIALS_DELAY_S}s` } as CSSProperties}
      >
        <text x={300} y={268} textAnchor="middle" className="fill-haze font-script text-[82px]">
          {initials}
        </text>
        <text
          x={300}
          y={312}
          textAnchor="middle"
          className="fill-mist font-sans text-[13px] font-bold tracking-[0.28em]"
        >
          {dateLabel}
        </text>
      </g>
    </svg>
  )
}
