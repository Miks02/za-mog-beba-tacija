import { HeartIcon } from '@renderer/components/decor/HeartIcon'
import { SealPulse } from '@renderer/components/decor/SealPulse'
import { SEAL_PULSE_DURATION_S, SEAL_RING_SCALE } from '../constants'

type WaxSealProps = {
  onOpen: () => void
}

export function WaxSeal({ onOpen }: WaxSealProps): React.JSX.Element {
  return (
    <div className="absolute top-[56%] left-1/2 size-[76px] -translate-x-1/2 -translate-y-1/2 animate-letter-seal motion-reduce:animate-none">
      <SealPulse ringScale={SEAL_RING_SCALE} durationS={SEAL_PULSE_DURATION_S} />
      <button
        type="button"
        aria-label="Otvori pismo"
        onClick={onOpen}
        className="relative grid size-full place-items-center rounded-full border-2 border-lilac bg-plum-800 p-0"
      >
        <HeartIcon className="size-[30px] fill-haze" />
      </button>
    </div>
  )
}
