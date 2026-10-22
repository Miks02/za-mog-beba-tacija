import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { paths } from '@renderer/app/paths'
import { SPLASH_EXIT_DELAY_MS } from '../constants'

export function useSplashExit(isDone: boolean): () => void {
  const navigate = useNavigate()
  const enterHome = useCallback(() => navigate(paths.home), [navigate])

  useEffect(() => {
    if (!isDone) return
    const id = window.setTimeout(enterHome, SPLASH_EXIT_DELAY_MS)
    return () => window.clearTimeout(id)
  }, [isDone, enterHome])

  return enterHome
}
