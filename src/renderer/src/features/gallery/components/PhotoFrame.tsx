import type { Photo } from '@renderer/types/content'
import { PhotoPlaceholder } from './PhotoPlaceholder'

type PhotoFrameProps = {
  photo: Photo
  number: number
  gradientClassName: string
  size: 'small' | 'large'
}

export function PhotoFrame({
  photo,
  number,
  gradientClassName,
  size
}: PhotoFrameProps): React.JSX.Element {
  if (!photo.src) {
    return <PhotoPlaceholder number={number} gradientClassName={gradientClassName} size={size} />
  }
  return (
    <img
      src={photo.src}
      alt={photo.caption}
      draggable={false}
      className="block aspect-square w-full object-cover"
    />
  )
}
