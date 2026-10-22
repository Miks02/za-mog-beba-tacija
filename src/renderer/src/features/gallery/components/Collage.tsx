import { photos } from '@renderer/content/photos'
import { collageLayout } from '../layout'
import { Polaroid } from './Polaroid'

type CollageProps = {
  onOpen: (index: number) => void
}

const collagePhotos = photos.slice(0, collageLayout.length)

export function Collage({ onOpen }: CollageProps): React.JSX.Element {
  return (
    <div className="relative min-h-[clamp(420px,62vh,600px)] w-full flex-1">
      {collagePhotos.map((photo, index) => (
        <Polaroid
          key={photo.id}
          photo={photo}
          index={index}
          slot={collageLayout[index]}
          onOpen={onOpen}
        />
      ))}
    </div>
  )
}
