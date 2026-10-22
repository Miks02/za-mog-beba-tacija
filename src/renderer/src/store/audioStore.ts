import { create } from 'zustand'
import { clamp } from '@renderer/lib/clamp'

const DEFAULT_VOLUME = 0.6

type AudioState = {
  isPlaying: boolean
  volume: number
  toggle: () => void
  stop: () => void
  setVolume: (volume: number) => void
}

export const useAudioStore = create<AudioState>()((set) => ({
  isPlaying: false,
  volume: DEFAULT_VOLUME,
  toggle: () => set((state) => ({ isPlaying: !state.isPlaying })),
  stop: () => set({ isPlaying: false }),
  setVolume: (volume) => set({ volume: clamp(volume, 0, 1) })
}))
