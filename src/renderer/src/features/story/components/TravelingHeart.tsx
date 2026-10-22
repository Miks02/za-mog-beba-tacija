import { HeartIcon } from '@renderer/components/decor/HeartIcon'
import { TIMELINE_PATH } from '../layout'

export function TravelingHeart(): React.JSX.Element {
  return (
    <div
      aria-hidden
      className="story-traveler absolute top-0 left-0 -m-3.5 size-7 animate-story-travel motion-reduce:animate-none"
      style={{ offsetPath: `path('${TIMELINE_PATH}')` }}
    >
      <HeartIcon className="block size-7 animate-story-beat fill-haze drop-shadow-story-heart motion-reduce:animate-none" />
    </div>
  )
}
