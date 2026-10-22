import type { CSSProperties } from 'react'
import { PillButton } from '@renderer/components/ui/PillButton'
import { WISH_DELAY_S } from '../constants'
import { WishBurst } from './WishBurst'
import { WishIcon } from './WishIcon'

type WishButtonProps = {
  wishCount: number
  onWish: () => void
}

export function WishButton({ wishCount, onWish }: WishButtonProps): React.JSX.Element {
  return (
    <div
      className="flex min-h-[86px] animate-sky-late flex-col items-center gap-3 [animation-delay:var(--delay)] motion-reduce:animate-fade-in"
      style={{ '--delay': `${WISH_DELAY_S}s` } as CSSProperties}
    >
      <div className="relative">
        {wishCount > 0 && <WishBurst key={wishCount} />}
        <PillButton variant="honey" onClick={onWish}>
          <WishIcon />
          <span>Zaželi želju</span>
        </PillButton>
      </div>
      <span aria-live="polite" className="text-sm text-mist">
        {wishCount > 0 && (
          <span
            key={wishCount}
            className="inline-block animate-sky-wish-message text-honey text-shadow-sky-wish motion-reduce:animate-fade-in"
          >
            Želja je poslata zvezdama.
          </span>
        )}
      </span>
    </div>
  )
}
