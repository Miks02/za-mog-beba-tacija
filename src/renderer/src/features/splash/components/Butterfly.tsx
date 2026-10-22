import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import type { ButterflySpec } from '../types'

type ButterflyProps = {
  butterfly: ButterflySpec
}

export function Butterfly({ butterfly }: ButterflyProps): React.JSX.Element {
  return (
    <div
      className={cn(
        'splash-flyer absolute top-0 left-0 animate-splash-fly [animation-delay:var(--delay)] [animation-duration:var(--duration)]',
        butterfly.flightClassName
      )}
      style={
        {
          '--delay': `${butterfly.delayS}s`,
          '--duration': `${butterfly.durationS}s`
        } as CSSProperties
      }
    >
      <div
        className="relative h-[26px] w-[34px] perspective-[120px]"
        style={{ scale: butterfly.scale }}
      >
        <span className="splash-wing absolute top-0 left-0 h-6 w-[17px] origin-right animate-splash-flap-left rounded-[70%_30%_60%_40%] shadow-splash-wing" />
        <span className="splash-wing absolute top-0 right-0 h-6 w-[17px] origin-left animate-splash-flap-right rounded-[30%_70%_40%_60%] shadow-splash-wing" />
        <span className="absolute top-[3px] left-1/2 -ml-[1.5px] h-5 w-[3px] rounded-[2px] bg-plum-900" />
      </div>
    </div>
  )
}
