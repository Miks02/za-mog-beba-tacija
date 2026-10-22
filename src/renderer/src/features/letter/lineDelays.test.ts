import { describe, expect, it } from 'vitest'
import { lineDelaysFor } from './lineDelays'

describe('lineDelaysFor', () => {
  it('matches the design timing for two paragraphs', () => {
    const delays = lineDelaysFor(2)
    expect(delays.salutation).toBe(1.8)
    expect(delays.paragraphs).toEqual([2.1, 2.4])
    expect(delays.signOff).toBeCloseTo(2.8)
    expect(delays.closeButton).toBeCloseTo(3.1)
  })

  it('keeps stepping for longer letters', () => {
    const delays = lineDelaysFor(4)
    expect(delays.paragraphs).toHaveLength(4)
    expect(delays.paragraphs[3]).toBeCloseTo(3)
    expect(delays.closeButton).toBeCloseTo(3.7)
  })
})
