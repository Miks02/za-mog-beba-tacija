import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { paths } from '@renderer/app/paths'

export function useSplashExit(): () => void {
  const navigate = useNavigate()
  return useCallback(() => navigate(paths.home), [navigate])
}
