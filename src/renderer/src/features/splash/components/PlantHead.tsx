import type { PlantHead as PlantHeadSpec } from '../types'
import { Daisy } from './Daisy'
import { Sprig } from './Sprig'
import { Tulip } from './Tulip'

type PlantHeadProps = {
  head: PlantHeadSpec
}

export function PlantHead({ head }: PlantHeadProps): React.JSX.Element {
  switch (head.kind) {
    case 'daisy':
      return <Daisy head={head} />
    case 'tulip':
      return <Tulip head={head} />
    case 'sprig':
      return <Sprig head={head} />
    default: {
      const unreachable: never = head
      return unreachable
    }
  }
}
