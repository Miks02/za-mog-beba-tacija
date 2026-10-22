import type { CSSProperties } from 'react'
import { motion } from 'motion/react'
import { cn } from '@renderer/lib/cn'
import {
  ENVELOPE_FADE_DELAY_S,
  ENVELOPE_FADE_DURATION_S,
  ENVELOPE_RETURN_DELAY_S,
  ENVELOPE_RETURN_DURATION_S,
  FLAP_CLOSE_DELAY_S,
  easeEnvelopeOut,
  easeLetterIn
} from '../constants'
import type { EnvelopePhase } from '../hooks/useEnvelope'
import { WaxSeal } from './WaxSeal'

const HIDDEN = { opacity: 0, y: 90, scale: 0.9 }
const SHOWN = { opacity: 1, y: 0, scale: 1 }

const FADE_OUT = {
  delay: ENVELOPE_FADE_DELAY_S,
  duration: ENVELOPE_FADE_DURATION_S,
  ease: easeEnvelopeOut
}
const RETURN_IN = {
  delay: ENVELOPE_RETURN_DELAY_S,
  duration: ENVELOPE_RETURN_DURATION_S,
  ease: easeLetterIn
}

const flapCloseStyle = { '--delay': `${FLAP_CLOSE_DELAY_S}s` } as CSSProperties

type EnvelopeProps = {
  phase: Exclude<EnvelopePhase, 'open'>
  recipient: string
  onOpen: () => void
}

export function Envelope({ phase, recipient, onOpen }: EnvelopeProps): React.JSX.Element {
  const isSealed = phase === 'closed'
  const isClosing = phase === 'closing'

  return (
    <motion.div
      initial={isClosing ? HIDDEN : false}
      animate={phase === 'opening' ? HIDDEN : SHOWN}
      transition={isClosing ? RETURN_IN : FADE_OUT}
      className={cn('col-start-1 row-start-1', !isSealed && 'pointer-events-none')}
    >
      <div
        className={cn(
          'flex flex-col items-center gap-7',
          isSealed && 'animate-letter-float motion-reduce:animate-none'
        )}
      >
        <div className="relative aspect-[16/10] w-[min(560px,86vw)] perspective-[1400px]">
          <div className="absolute inset-0 rounded-2xl bg-envelope-back shadow-envelope" />
          <div className="absolute top-[8%] right-[7%] left-[7%] h-[70%] rounded-md bg-paper" />
          <div className="letter-pocket absolute inset-0 rounded-2xl bg-envelope-pocket" />
          <div
            className={cn(
              'letter-flap absolute top-0 left-0 h-[56%] w-full rounded-t-2xl bg-envelope-flap',
              phase === 'opening' && 'animate-letter-flap-open',
              isClosing &&
                'animate-letter-flap-close [animation-delay:var(--delay)] motion-reduce:animate-none'
            )}
            style={isClosing ? flapCloseStyle : undefined}
          />
          <div className="absolute right-0 bottom-[9%] left-0 text-center font-script text-[clamp(30px,4vw,42px)] leading-none text-haze">
            {recipient}
          </div>
          {isSealed && <WaxSeal onOpen={onOpen} />}
        </div>
        <p className="m-0 text-sm tracking-[0.06em] text-dusk">Klikni na pečat</p>
      </div>
    </motion.div>
  )
}
