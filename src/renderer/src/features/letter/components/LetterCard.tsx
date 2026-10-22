import { useEffect, useRef, type CSSProperties } from 'react'
import { motion } from 'motion/react'
import { PillButton } from '@renderer/components/ui/PillButton'
import { config } from '@renderer/content/config'
import { letter } from '@renderer/content/letter'
import { cn } from '@renderer/lib/cn'
import {
  LETTER_ENTER_DELAY_S,
  LETTER_ENTER_DURATION_S,
  LETTER_TILT_DEG,
  easeLetterIn
} from '../constants'
import { lineDelaysFor } from '../lineDelays'
import { PressedFlower } from './PressedFlower'

const LINE_CLASS_NAME =
  'animate-letter-line [animation-delay:var(--delay)] motion-reduce:animate-fade-in'

const lineStyle = (delayS: number): CSSProperties => ({ '--delay': `${delayS}s` }) as CSSProperties

const delays = lineDelaysFor(letter.paragraphs.length)

type LetterCardProps = {
  onClose: () => void
}

export function LetterCard({ onClose }: LetterCardProps): React.JSX.Element {
  const articleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    articleRef.current?.focus({ preventScroll: true })
  }, [])

  return (
    <motion.article
      ref={articleRef}
      tabIndex={-1}
      initial={{ opacity: 0, y: 120, scale: 0.86, rotate: -3 }}
      animate={{ opacity: [0, 1, 1], y: 0, scale: 1, rotate: LETTER_TILT_DEG }}
      transition={{
        delay: LETTER_ENTER_DELAY_S,
        duration: LETTER_ENTER_DURATION_S,
        ease: easeLetterIn,
        opacity: {
          delay: LETTER_ENTER_DELAY_S,
          duration: LETTER_ENTER_DURATION_S,
          times: [0, 0.6, 1]
        }
      }}
      className="relative col-start-1 row-start-1 flex w-[min(660px,92vw)] flex-col gap-[22px] rounded-lg bg-paper px-[clamp(28px,5vw,64px)] pt-[clamp(32px,5vw,60px)] pb-[clamp(28px,4vw,44px)] text-ink shadow-letter outline-none"
    >
      <PressedFlower />
      <h1
        className={cn(
          LINE_CLASS_NAME,
          'm-0 pr-16 font-script text-[clamp(38px,4.4vw,50px)] leading-[1.1] font-normal text-ink-soft'
        )}
        style={lineStyle(delays.salutation)}
      >
        {letter.salutation}
      </h1>
      {letter.paragraphs.map((paragraph, index) => (
        <p
          key={paragraph.id}
          className={cn(
            LINE_CLASS_NAME,
            'm-0 font-display text-[19px] leading-[1.7] text-pretty',
            paragraph.tone === 'aside' ? 'text-ink-muted italic' : 'text-ink'
          )}
          style={lineStyle(delays.paragraphs[index])}
        >
          {paragraph.text}
        </p>
      ))}
      <div
        className={cn(LINE_CLASS_NAME, 'flex flex-col items-end gap-0.5')}
        style={lineStyle(delays.signOff)}
      >
        <span className="font-display text-lg text-ink italic">{letter.signOff}</span>
        <span className="font-script text-[46px] leading-[1.1] text-ink-soft">
          {config.signature}
        </span>
      </div>
      <div
        className={cn(LINE_CLASS_NAME, 'flex justify-center')}
        style={lineStyle(delays.closeButton)}
      >
        <PillButton variant="outline" onClick={onClose}>
          Vrati pismo u kovertu
        </PillButton>
      </div>
    </motion.article>
  )
}
