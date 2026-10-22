import { motion } from 'motion/react'
import type { Photo } from '@renderer/types/content'
import { ZOOM_DURATION_S, ZOOM_REST_ROTATION_DEG, ZOOM_TILT_DEG, easeZoom } from '../constants'
import { PhotoFrame } from './PhotoFrame'

type LightboxFigureProps = {
  photo: Photo
  number: number
  count: number
  gradientClassName: string
  flipCount: number
}

export function LightboxFigure({
  photo,
  number,
  count,
  gradientClassName,
  flipCount
}: LightboxFigureProps): React.JSX.Element {
  const startRotation = flipCount % 2 === 0 ? ZOOM_TILT_DEG : -ZOOM_TILT_DEG
  return (
    <motion.figure
      key={flipCount}
      initial={{ opacity: 0, scale: 0.6, rotate: startRotation }}
      animate={{ opacity: 1, scale: 1, rotate: ZOOM_REST_ROTATION_DEG }}
      transition={{ duration: ZOOM_DURATION_S, ease: easeZoom }}
      className="m-0 flex w-[min(500px,70vw)] flex-col gap-3.5 rounded-[4px] bg-polaroid px-4 pt-4 pb-[22px] shadow-lightbox"
    >
      <PhotoFrame
        photo={photo}
        number={number}
        gradientClassName={gradientClassName}
        size="large"
      />
      <figcaption className="flex items-baseline justify-between gap-4">
        <span className="font-display text-[22px] text-ink italic">{photo.caption}</span>
        <span className="text-[13px] font-bold text-ink-muted tabular-nums">
          {number} / {count}
        </span>
      </figcaption>
    </motion.figure>
  )
}
