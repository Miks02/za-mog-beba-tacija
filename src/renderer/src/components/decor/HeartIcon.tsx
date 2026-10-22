import type { CSSProperties } from 'react'

const HEART_PATH =
  'M12 21s-6.7-4.35-9.33-8.36C.9 9.9 2.2 6 5.8 5.2 8 4.7 10.2 5.7 12 7.6c1.8-1.9 4-2.9 6.2-2.4 3.6.8 4.9 4.7 3.13 7.44C18.7 16.65 12 21 12 21z'

type HeartIconProps = {
  className?: string
  pathClassName?: string
  style?: CSSProperties
}

export function HeartIcon({ className, pathClassName, style }: HeartIconProps): React.JSX.Element {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} style={style}>
      <path className={pathClassName} d={HEART_PATH} />
    </svg>
  )
}
