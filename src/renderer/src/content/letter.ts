import type { Letter } from '@renderer/types/content'

export const letter = {
  salutation: 'Moj mali Beba Tacije,',
  paragraphs: [
    {
      id: 'opening',
      tone: 'plain',
      text: 'Moja srećo, od kako smo zajedno moj život se promenio za 180 stepeni na bolje. Svakim danom me činiš sve srećnijim. Tvoj osmeh je nešto što mi nedostaje svakog trenutka kada nisam sa tobom. Jedva čekam da te zaprosim i da živimo zajedno i da se nikad ne odvajamo jedno od drugog.'
    },
    {
      id: 'memories',
      tone: 'aside',
      text: 'Reči ne mogu da opišu koliko te volim!'
    }
  ],
  signOff: 'Za moju ljubav,'
} as const satisfies Letter
