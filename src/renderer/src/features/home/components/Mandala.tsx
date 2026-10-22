import { HeartPath } from '@renderer/components/decor/HeartPath'
import { cn } from '@renderer/lib/cn'
import { mandalaRings, orbitAnchors, orbitDots } from '../layout'

const SPIN_CLASS_NAME = 'origin-center transform-fill motion-reduce:animate-none'

export function Mandala(): React.JSX.Element {
  return (
    <section aria-hidden className="grid min-w-0 flex-[1_1_340px] place-items-center">
      <svg
        viewBox="-220 -220 440 440"
        className="h-auto w-[min(400px,78vw)] animate-home-open overflow-visible drop-shadow-home-mandala motion-reduce:animate-fade-in"
      >
        <circle
          r={200}
          className={cn('home-breathe animate-home-breathe fill-iris', SPIN_CLASS_NAME)}
        />
        {mandalaRings.map((ring) => (
          <g
            key={ring.id}
            className={cn(ring.className, SPIN_CLASS_NAME)}
            fillOpacity={ring.fillOpacity}
          >
            {ring.angles.map((angle) => (
              <ellipse
                key={angle}
                cx={0}
                cy={ring.cy}
                rx={ring.rx}
                ry={ring.ry}
                transform={angle === 0 ? undefined : `rotate(${angle})`}
              />
            ))}
          </g>
        ))}
        <g className={cn('animate-home-orbit', SPIN_CLASS_NAME)}>
          {orbitDots.map((dot) => (
            <circle key={dot.id} cx={dot.cx} cy={dot.cy} r={dot.r} className={dot.className} />
          ))}
          {orbitAnchors.map((anchor) => (
            <circle key={anchor.id} cx={anchor.cx} cy={anchor.cy} r={0.1} fill="none" />
          ))}
        </g>
        <circle r={36} className="fill-plum-900" />
        <g transform="translate(-26.4 -27.6) scale(2.2)">
          <HeartPath className="origin-center animate-home-beat fill-haze transform-fill motion-reduce:animate-none" />
        </g>
      </svg>
    </section>
  )
}
