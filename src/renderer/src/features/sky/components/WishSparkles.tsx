import type { CSSProperties } from 'react'
import { WISH_SPARKLE_COUNT, WISH_SPARKLE_SEED } from '../constants'
import { createWishSparkles } from '../wishEffects'

const sparkles = createWishSparkles(WISH_SPARKLE_COUNT, WISH_SPARKLE_SEED)

export function WishSparkles(): React.JSX.Element {
  return (
    <>
      {sparkles.map((sparkle) => (
        <svg
          key={sparkle.id}
          viewBox="0 0 24 24"
          className="absolute top-(--top) left-(--left) size-(--size) animate-sky-wish-sparkle fill-honey drop-shadow-sky-wish [animation-delay:var(--delay)]"
          style={
            {
              '--top': `${sparkle.topPct}%`,
              '--left': `${sparkle.leftPct}%`,
              '--size': `${sparkle.sizePx}px`,
              '--delay': `${sparkle.delayS}s`
            } as CSSProperties
          }
        >
          <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
        </svg>
      ))}
    </>
  )
}
