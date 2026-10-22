import type { CSSProperties } from 'react'
import { HeartPath } from './HeartPath'

type HeartIconProps = {
  className?: string
  pathClassName?: string
  style?: CSSProperties
}

export function HeartIcon({ className, pathClassName, style }: HeartIconProps): React.JSX.Element {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} style={style}>
      <HeartPath className={pathClassName} />
    </svg>
  )
}
