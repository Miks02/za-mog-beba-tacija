import { HeartIcon } from '@renderer/components/decor/HeartIcon'
import { SealPulse } from '@renderer/components/decor/SealPulse'
import { SEAL_PULSE_DURATION_S, SEAL_RING_SCALE } from '../constants'

type NoteFrontProps = {
  label: string
}

export function NoteFront({ label }: NoteFrontProps): React.JSX.Element {
  return (
    <div className="open-when-face absolute inset-0 overflow-hidden rounded-[20px] bg-envelope-back shadow-open-when-card">
      <div className="open-when-pocket absolute inset-0 bg-envelope-pocket" />
      <div className="open-when-flap absolute top-0 left-0 h-1/2 w-full bg-envelope-flap" />
      <div className="absolute top-1/2 left-1/2 -mt-6 -ml-6 size-12">
        <SealPulse ringScale={SEAL_RING_SCALE} durationS={SEAL_PULSE_DURATION_S} />
        <div className="relative grid size-full place-items-center rounded-full border-2 border-lilac bg-plum-800">
          <HeartIcon className="size-5 fill-haze" />
        </div>
      </div>
      <div className="absolute right-0 bottom-[18px] left-0 flex flex-col items-center gap-0.5 px-4 text-center">
        <span className="text-[11.5px] font-bold tracking-[0.2em] text-lavender uppercase">
          Otvori kad
        </span>
        <span className="font-display text-[22px] leading-[1.2] text-white italic">{label}</span>
      </div>
    </div>
  )
}
