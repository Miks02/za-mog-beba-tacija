import { gardenPlants } from '../gardenLayout'
import { Plant } from './Plant'

export function Garden(): React.JSX.Element {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax slice"
      className="absolute bottom-0 left-0 h-[46vh] w-full drop-shadow-splash-garden"
    >
      {gardenPlants.map((plant) => (
        <Plant key={plant.id} plant={plant} />
      ))}
    </svg>
  )
}
