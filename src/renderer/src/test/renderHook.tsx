import { act } from 'react'
import { createRoot } from 'react-dom/client'

type RenderedHook<T> = {
  result: { current: T }
  unmount: () => void
}

export function renderHook<T>(useHook: () => T): RenderedHook<T> {
  const result = { current: undefined as T }
  const container = document.createElement('div')
  const root = createRoot(container)

  function Probe(): null {
    result.current = useHook()
    return null
  }

  act(() => root.render(<Probe />))
  return { result, unmount: () => act(() => root.unmount()) }
}
