import { HeartIcon } from '@renderer/components/decor/HeartIcon'

export function BigHeart(): React.JSX.Element {
  return (
    <HeartIcon className="pointer-events-none absolute top-[46%] left-1/2 h-auto w-[min(620px,90vw)] -translate-x-1/2 -translate-y-1/2 animate-reasons-pulse fill-iris opacity-14 motion-reduce:animate-none" />
  )
}
