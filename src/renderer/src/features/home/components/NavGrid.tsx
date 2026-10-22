import { NavTile } from '@renderer/components/ui/NavTile'
import { TILE_DELAY_STEP_S, TILES_DELAY_S } from '../constants'
import { navItems } from '../navItems'

export function NavGrid(): React.JSX.Element {
  return (
    <nav
      aria-label="Iznenađenja"
      className="grid grid-cols-[repeat(auto-fit,minmax(min(170px,100%),1fr))] gap-3.5"
    >
      {navItems.map((item, index) => (
        <NavTile
          key={item.id}
          to={item.to}
          title={item.title}
          subtitle={item.subtitle}
          tone={item.tone}
          icon={item.icon}
          delayS={TILES_DELAY_S + index * TILE_DELAY_STEP_S}
          className="animate-home-rise"
        />
      ))}
    </nav>
  )
}
