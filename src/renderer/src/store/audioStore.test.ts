import { beforeEach, describe, expect, it } from 'vitest'
import { useAudioStore } from './audioStore'

describe('audioStore', () => {
  beforeEach(() => useAudioStore.getState().stop())

  it('toggles playback', () => {
    useAudioStore.getState().toggle()
    expect(useAudioStore.getState().isPlaying).toBe(true)
    useAudioStore.getState().toggle()
    expect(useAudioStore.getState().isPlaying).toBe(false)
  })

  it('keeps the volume between 0 and 1', () => {
    useAudioStore.getState().setVolume(3)
    expect(useAudioStore.getState().volume).toBe(1)
    useAudioStore.getState().setVolume(-1)
    expect(useAudioStore.getState().volume).toBe(0)
  })
})
