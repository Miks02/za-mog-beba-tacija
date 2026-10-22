import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import type { Photo } from '@renderer/types/content'
import {
  BOB_BASE_DURATION_S,
  BOB_DURATION_STEP_S,
  BOB_DURATION_VARIANTS,
  BOB_PHASE_STEP_S,
  DEAL_START_DELAY_S,
  DEAL_STEP_S,
  FRONT_ROW_START_INDEX
} from '../constants'
import type { CollageSlot } from '../layout'
import { PhotoFrame } from './PhotoFrame'
import { WashiTape } from './WashiTape'

type PolaroidProps = {
  photo: Photo
  index: number
  slot: CollageSlot
  onOpen: (index: number) => void
}

export function Polaroid({ photo, index, slot, onOpen }: PolaroidProps): React.JSX.Element {
  const number = index + 1
  return (
    <div
      className={cn(
        'absolute top-(--top) left-(--left) z-(--z) [animation-delay:var(--delay)] hover:z-30 motion-reduce:animate-fade-in',
        index % 2 === 0 ? 'animate-gallery-deal-left' : 'animate-gallery-deal-right'
      )}
      style={
        {
          '--left': `${slot.leftPct}%`,
          '--top': `${slot.topPct}%`,
          '--z': index < FRONT_ROW_START_INDEX ? 1 : 2,
          '--delay': `${DEAL_START_DELAY_S + index * DEAL_STEP_S}s`
        } as CSSProperties
      }
    >
      <div
        className="animate-gallery-bob [animation-delay:var(--bob-delay)] [animation-duration:var(--bob-duration)] motion-reduce:animate-none"
        style={
          {
            '--bob-duration': `${BOB_BASE_DURATION_S + (index % BOB_DURATION_VARIANTS) * BOB_DURATION_STEP_S}s`,
            '--bob-delay': `${-index * BOB_PHASE_STEP_S}s`
          } as CSSProperties
        }
      >
        <button
          type="button"
          aria-label={`Otvori sliku ${number}`}
          onClick={() => onOpen(index)}
          className="relative flex w-[clamp(150px,14vw,196px)] rotate-(--rotation) flex-col gap-2 rounded-[3px] border-0 bg-polaroid px-2.5 pt-2.5 pb-3 font-sans shadow-polaroid transition-[rotate,scale,box-shadow] duration-450 ease-[cubic-bezier(0.34,1.45,0.64,1)] hover:scale-112 hover:rotate-0 hover:shadow-polaroid-lifted"
          style={{ '--rotation': `${slot.rotationDeg}deg` } as CSSProperties}
        >
          {slot.hasTape && <WashiTape />}
          <PhotoFrame
            photo={photo}
            number={number}
            gradientClassName={slot.gradientClassName}
            size="small"
          />
          <span className="text-center font-display text-[15px] text-ink-caption italic">
            {photo.caption}
          </span>
        </button>
      </div>
    </div>
  )
}
