import { butterflies } from '../layout'
import { Butterfly } from './Butterfly'

export function Butterflies(): React.JSX.Element {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
    >
      {butterflies.map((butterfly) => (
        <Butterfly key={butterfly.id} butterfly={butterfly} />
      ))}
    </div>
  )
}
