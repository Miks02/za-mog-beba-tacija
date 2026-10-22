import { describe, expect, it } from 'vitest'
import { greetingForHour } from './greeting'

describe('greetingForHour', () => {
  it.each([
    [0, 'Laku noć'],
    [4, 'Laku noć'],
    [5, 'Dobro jutro'],
    [11, 'Dobro jutro'],
    [12, 'Dobar dan'],
    [17, 'Dobar dan'],
    [18, 'Dobro veče'],
    [21, 'Dobro veče'],
    [22, 'Laku noć'],
    [23, 'Laku noć']
  ])('hour %i greets with %s', (hour, greeting) => {
    expect(greetingForHour(hour)).toBe(greeting)
  })
})
