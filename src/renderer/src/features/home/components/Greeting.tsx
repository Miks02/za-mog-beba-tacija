import type { CSSProperties } from 'react'
import { config } from '@renderer/content/config'
import { formatWeekdayDate } from '@renderer/lib/dateSr'
import { dayPeriodForHour } from '@renderer/lib/greeting'
import { EYEBROW_DELAY_S, GREETING_DELAY_S, LINE_DELAY_S, NAME_DELAY_S } from '../constants'

const RISE_CLASS_NAME =
  'animate-home-rise [animation-delay:var(--delay)] motion-reduce:animate-fade-in'

const delayStyle = (delayS: number): CSSProperties => ({ '--delay': `${delayS}s` }) as CSSProperties

type GreetingProps = {
  now: Date
}

export function Greeting({ now }: GreetingProps): React.JSX.Element {
  return (
    <>
      <div
        className={`${RISE_CLASS_NAME} w-full text-[12.5px] font-semibold tracking-[0.28em] text-dusk uppercase`}
        style={delayStyle(EYEBROW_DELAY_S)}
      >
        {formatWeekdayDate(now)}
      </div>
      <h1 className="m-0 flex w-full flex-col gap-4 font-normal">
        <div className="flex w-full flex-col gap-4">
          <span
            className={`${RISE_CLASS_NAME} font-display text-[clamp(38px,4.2vw,62px)] leading-[1.05] font-light text-lavender italic`}
            style={delayStyle(GREETING_DELAY_S)}
          >
            {config.greetings[dayPeriodForHour(now.getHours())]}
          </span>
          <span
            className={`${RISE_CLASS_NAME} font-display text-[clamp(38px,4.2vw,62px)] leading-[1.05] font-light text-lavender italic`}
            style={delayStyle(GREETING_DELAY_S)}
          >
            Moja sreća, moj
          </span>
        </div>
        <span
          className={`${RISE_CLASS_NAME} font-script text-[clamp(68px,7.6vw,116px)] leading-[1.12] text-haze text-shadow-glow`}
          style={delayStyle(NAME_DELAY_S)}
        >
          {config.herName}
        </span>
      </h1>
      <p
        className={`${RISE_CLASS_NAME} m-0 max-w-[30em] text-lg leading-[1.6] text-pretty text-mist`}
        style={delayStyle(LINE_DELAY_S)}
      >
        {config.messages.homeLine}
      </p>
    </>
  )
}
