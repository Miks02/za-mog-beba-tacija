import { useEffect, useRef, useState, type RefObject } from 'react'

type FitScale = {
  boxRef: RefObject<HTMLDivElement | null>
  scale: number
}

export function useFitScale(width: number, height: number): FitScale {
  const boxRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const observer = new ResizeObserver(([entry]) => {
      const { width: boxWidth, height: boxHeight } = entry.contentRect
      setScale(Math.min(1, boxWidth / width, boxHeight / height))
    })
    observer.observe(box)
    return () => observer.disconnect()
  }, [width, height])

  return { boxRef, scale }
}
