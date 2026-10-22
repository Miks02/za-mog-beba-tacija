import { Music } from 'lucide-react'
import { IconButton } from '@renderer/components/ui/IconButton'
import { config } from '@renderer/content/config'
import { useAudioStore } from '@renderer/store/audioStore'

export function MusicToggle(): React.JSX.Element {
  const isPlaying = useAudioStore((s) => s.isPlaying)
  const toggle = useAudioStore((s) => s.toggle)

  return (
    <IconButton
      label="Pusti našu pesmu"
      pressed={isPlaying}
      disabled={!config.musicTrack}
      onClick={toggle}
    >
      <Music aria-hidden size={18} strokeWidth={1.8} />
    </IconButton>
  )
}
