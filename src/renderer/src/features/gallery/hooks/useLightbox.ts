import { useCallback, useEffect, useState } from 'react'

type Lightbox = {
  selectedIndex: number | null
  flipCount: number
  open: (index: number) => void
  close: () => void
  next: () => void
  prev: () => void
}

export function useLightbox(count: number): Lightbox {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [flipCount, setFlipCount] = useState(0)

  const step = useCallback(
    (direction: number) => {
      setSelectedIndex((index) => (index === null ? null : (index + direction + count) % count))
      setFlipCount((value) => value + 1)
    },
    [count]
  )

  const open = useCallback((index: number) => {
    setSelectedIndex(index)
    setFlipCount((value) => value + 1)
  }, [])
  const close = useCallback(() => setSelectedIndex(null), [])
  const next = useCallback(() => step(1), [step])
  const prev = useCallback(() => step(-1), [step])

  useEffect(() => {
    if (selectedIndex === null) return
    const handleKeyDown = (event: KeyboardEvent): void => {
      const action = { ArrowRight: next, ArrowLeft: prev, Escape: close }[event.key]
      if (!action) return
      event.preventDefault()
      action()
    }
    window.addEventListener('keydown', handleKeyDown, { capture: true })
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true })
  }, [selectedIndex, next, prev, close])

  return { selectedIndex, flipCount, open, close, next, prev }
}
