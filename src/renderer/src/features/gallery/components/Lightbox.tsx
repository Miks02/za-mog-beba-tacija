import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion } from 'motion/react'
import type { Photo } from '@renderer/types/content'
import { OVERLAY_FADE_S } from '../constants'
import { useDialogFocus } from '../hooks/useDialogFocus'
import { LightboxFigure } from './LightboxFigure'

const NAV_BUTTON_CLASS_NAME =
  'grid size-[52px] flex-none place-items-center rounded-full border border-haze/20 bg-haze/8 p-0 text-haze transition-colors duration-200 hover:bg-haze/16'

type LightboxProps = {
  photo: Photo
  index: number
  count: number
  gradientClassName: string
  flipCount: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({
  photo,
  index,
  count,
  gradientClassName,
  flipCount,
  onClose,
  onPrev,
  onNext
}: LightboxProps): React.JSX.Element {
  const { dialogRef, initialFocusRef, handleKeyDown } = useDialogFocus()

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Uvećana slika"
      onKeyDown={handleKeyDown}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: OVERLAY_FADE_S, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center gap-[clamp(12px,3vw,40px)] bg-night-deep/84 p-6 backdrop-blur-[8px]"
    >
      <button
        ref={initialFocusRef}
        type="button"
        aria-label="Zatvori"
        onClick={onClose}
        className="absolute top-[clamp(20px,3vw,44px)] right-[clamp(20px,3vw,44px)] grid size-12 place-items-center rounded-full border border-haze/20 bg-haze/8 p-0 text-haze transition-colors duration-200 hover:bg-haze/16"
      >
        <X aria-hidden size={20} strokeWidth={1.8} />
      </button>
      <button
        type="button"
        aria-label="Prethodna slika"
        onClick={onPrev}
        className={NAV_BUTTON_CLASS_NAME}
      >
        <ChevronLeft aria-hidden size={22} strokeWidth={1.8} />
      </button>
      <LightboxFigure
        photo={photo}
        number={index + 1}
        count={count}
        gradientClassName={gradientClassName}
        flipCount={flipCount}
      />
      <button
        type="button"
        aria-label="Sledeća slika"
        onClick={onNext}
        className={NAV_BUTTON_CLASS_NAME}
      >
        <ChevronRight aria-hidden size={22} strokeWidth={1.8} />
      </button>
    </motion.div>
  )
}
