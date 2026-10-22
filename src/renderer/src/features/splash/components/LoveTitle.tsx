import { HeartBurst } from '@renderer/components/decor/HeartBurst'
import { Ring } from '@renderer/components/decor/Ring'
import { CELEBRATION_RING_DELAYS_S, celebrationRays } from '../layout'

type LoveTitleProps = {
  title: string
  isCelebrating: boolean
}

export function LoveTitle({ title, isCelebrating }: LoveTitleProps): React.JSX.Element {
  return (
    <div className="relative drop-shadow-splash-name">
      {isCelebrating && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {CELEBRATION_RING_DELAYS_S.map((delayS) => (
            <Ring key={delayS} delayS={delayS} />
          ))}
          <HeartBurst rays={celebrationRays} />
        </div>
      )}
      <h1 className="splash-name relative m-0 animate-splash-name px-[0.14em] font-script text-[clamp(84px,11vw,172px)] leading-[1.15] font-normal motion-reduce:animate-fade-in">
        {title}
      </h1>
    </div>
  )
}
