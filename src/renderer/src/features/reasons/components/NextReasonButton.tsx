import { HeartIcon } from '@renderer/components/decor/HeartIcon'
import { PillButton } from '@renderer/components/ui/PillButton'
import { RisingHearts } from './RisingHearts'

type NextReasonButtonProps = {
  burstCount: number
  onNext: () => void
}

export function NextReasonButton({ burstCount, onNext }: NextReasonButtonProps): React.JSX.Element {
  return (
    <div className="relative">
      {burstCount > 0 && <RisingHearts key={burstCount} />}
      <PillButton onClick={onNext}>
        <span>Još jedan razlog</span>
        <HeartIcon className="size-[18px] fill-iris" />
      </PillButton>
    </div>
  )
}
