import type { CSSProperties } from 'react'
import type { Spark } from '@renderer/types/decor'

type SparklesProps = {
  sparks: ReadonlyArray<Spark>
  durationS?: number
}

export function Sparkles({ sparks, durationS = 3.4 }: SparklesProps): React.JSX.Element {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="absolute animate-twinkle rounded-full bg-haze shadow-spark [animation-delay:var(--delay)] [animation-duration:var(--duration)] motion-reduce:animate-none motion-reduce:opacity-60"
          style={
            {
              top: `${spark.topPct}%`,
              left: `${spark.leftPct}%`,
              width: spark.sizePx,
              height: spark.sizePx,
              '--delay': `${spark.delayS}s`,
              '--duration': `${durationS}s`
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
