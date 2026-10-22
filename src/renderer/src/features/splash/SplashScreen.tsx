import { GlowOrbs } from '@renderer/components/decor/GlowOrbs'
import { Sparkles } from '@renderer/components/decor/Sparkles'
import { Backdrop } from '@renderer/components/layout/Backdrop'
import { PageShell } from '@renderer/components/layout/PageShell'
import { config } from '@renderer/content/config'
import { useReducedMotion } from '@renderer/hooks/useReducedMotion'
import { Butterflies } from './components/Butterflies'
import { EnterButton } from './components/EnterButton'
import { FallingPetals } from './components/FallingPetals'
import { Garden } from './components/Garden'
import { LoadingBar } from './components/LoadingBar'
import { LoveTitle } from './components/LoveTitle'
import { SplashEyebrow } from './components/SplashEyebrow'
import { REDUCED_MOTION_SPLASH_SECONDS } from './constants'
import { useLoadingProgress } from './hooks/useLoadingProgress'
import { useSplashExit } from './hooks/useSplashExit'
import {
  SPLASH_GLOW_DURATION_S,
  SPLASH_SPARK_DURATION_S,
  splashGlowOrbs,
  splashSparks
} from './layout'

export function SplashScreen(): React.JSX.Element {
  const isReducedMotion = useReducedMotion()
  const seconds = isReducedMotion ? REDUCED_MOTION_SPLASH_SECONDS : config.splashSeconds
  const { percent, isDone, statusIndex } = useLoadingProgress(seconds)
  const enterHome = useSplashExit()

  return (
    <PageShell
      className="h-dvh min-h-[620px]"
      containerClassName="absolute inset-0 min-h-0 max-w-none items-center justify-center gap-[30px] px-6 pt-0 pb-[20vh] text-center"
      backdrop={
        <Backdrop>
          <GlowOrbs orbs={splashGlowOrbs} durationS={SPLASH_GLOW_DURATION_S} />
          <Sparkles sparks={splashSparks} durationS={SPLASH_SPARK_DURATION_S} />
          <FallingPetals />
          <Garden />
          <Butterflies />
        </Backdrop>
      }
    >
      <SplashEyebrow text={config.messages.splashEyebrow} />
      <LoveTitle title={config.messages.splashTitle} isCelebrating={isDone} />
      <LoadingBar percent={percent} statusIndex={statusIndex} />
      <div className="flex min-h-[50px] items-center justify-center">
        {isDone && <EnterButton onEnter={enterHome} />}
      </div>
    </PageShell>
  )
}
