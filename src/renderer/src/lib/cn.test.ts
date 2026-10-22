import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('a', false, 'b', undefined, null)).toBe('a b')
  })

  it('lets later tailwind utilities win', () => {
    expect(cn('px-2 text-haze', 'px-4')).toBe('text-haze px-4')
  })

  it('merges custom color tokens', () => {
    expect(cn('bg-night', 'bg-plum-900')).toBe('bg-plum-900')
  })
})
