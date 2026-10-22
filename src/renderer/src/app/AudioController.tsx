import { useEffect, useRef } from 'react'
import { config } from '@renderer/content/config'
import { useAudioStore } from '@renderer/store/audioStore'

export function AudioController(): React.JSX.Element | null {
  const audioRef = useRef<HTMLAudioElement>(null)
  const isPlaying = useAudioStore((s) => s.isPlaying)
  const volume = useAudioStore((s) => s.volume)
  const stop = useAudioStore((s) => s.stop)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (!isPlaying) {
      audio.pause()
      return
    }
    audio.play().catch(stop)
  }, [isPlaying, stop])

  if (!config.musicTrack) return null
  return <audio ref={audioRef} src={config.musicTrack} loop preload="auto" />
}
