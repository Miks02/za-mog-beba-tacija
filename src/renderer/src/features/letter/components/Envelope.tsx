import { motion } from 'motion/react'
import { cn } from '@renderer/lib/cn'
import { ENVELOPE_FADE_DELAY_S, ENVELOPE_FADE_DURATION_S, easeEnvelopeOut } from '../constants'
import { WaxSeal } from './WaxSeal'

type EnvelopeProps = {
  isOpening: boolean
  recipient: string
  onOpen: () => void
}

export function Envelope({ isOpening, recipient, onOpen }: EnvelopeProps): React.JSX.Element {
  return (
    <motion.div
      initial={false}
      animate={isOpening ? { opacity: 0, y: 90, scale: 0.9 } : { opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: ENVELOPE_FADE_DELAY_S,
        duration: ENVELOPE_FADE_DURATION_S,
        ease: easeEnvelopeOut
      }}
      className={cn('col-start-1 row-start-1', isOpening && 'pointer-events-none')}
    >
      <div
        className={cn(
          'flex flex-col items-center gap-7',
          !isOpening && 'animate-letter-float motion-reduce:animate-none'
        )}
      >
        <div className="relative aspect-[16/10] w-[min(560px,86vw)] perspective-[1400px]">
          <div className="absolute inset-0 rounded-2xl bg-envelope-back shadow-envelope" />
          <div className="absolute top-[8%] right-[7%] left-[7%] h-[70%] rounded-md bg-paper" />
          <div className="letter-pocket absolute inset-0 rounded-2xl bg-envelope-pocket" />
          <div
            className={cn(
              'letter-flap absolute top-0 left-0 h-[56%] w-full rounded-t-2xl bg-envelope-flap',
              isOpening && 'animate-letter-flap-open'
            )}
          />
          <div className="absolute right-0 bottom-[9%] left-0 text-center font-script text-[clamp(30px,4vw,42px)] leading-none text-haze">
            {recipient}
          </div>
          {!isOpening && <WaxSeal onOpen={onOpen} />}
        </div>
        <p className="m-0 text-sm tracking-[0.06em] text-dusk">Klikni na pečat</p>
      </div>
    </motion.div>
  )
}
