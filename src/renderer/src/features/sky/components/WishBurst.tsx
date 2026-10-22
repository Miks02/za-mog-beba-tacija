import type { CSSProperties } from 'react'
import { WISH_PARTICLE_COUNT, WISH_PARTICLE_SEED } from '../constants'
import { createWishParticles } from '../wishEffects'

const particles = createWishParticles(WISH_PARTICLE_COUNT, WISH_PARTICLE_SEED)

export function WishBurst(): React.JSX.Element {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 motion-reduce:hidden">
      <span className="absolute inset-0 animate-sky-wish-ring rounded-full border-2 border-honey" />
      <span className="absolute inset-0 animate-sky-wish-ring rounded-full border border-honey/70 [animation-delay:0.18s]" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute top-1/2 left-1/2 size-(--size) -translate-1/2 animate-sky-wish-particle rounded-full bg-honey shadow-sky-wish-particle [animation-delay:var(--delay)]"
          style={
            {
              '--angle': `${particle.angleDeg}deg`,
              '--distance': `${particle.distancePx}px`,
              '--size': `${particle.sizePx}px`,
              '--delay': `${particle.delayS}s`
            } as CSSProperties
          }
        />
      ))}
    </span>
  )
}
