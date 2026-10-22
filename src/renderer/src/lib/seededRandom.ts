const MODULUS = 2147483647
const MULTIPLIER = 16807

export function createSeededRandom(seed: number): () => number {
  let state = seed % MODULUS
  if (state <= 0) state += MODULUS - 1
  return () => {
    state = (state * MULTIPLIER) % MODULUS
    return state / MODULUS
  }
}
