import {
  CLOSE_BUTTON_GAP_S,
  FIRST_PARAGRAPH_DELAY_S,
  PARAGRAPH_STEP_S,
  SALUTATION_DELAY_S,
  SIGN_OFF_GAP_S
} from './constants'

export type LineDelays = {
  salutation: number
  paragraphs: ReadonlyArray<number>
  signOff: number
  closeButton: number
}

export function lineDelaysFor(paragraphCount: number): LineDelays {
  const paragraphs = Array.from(
    { length: paragraphCount },
    (_, index) => FIRST_PARAGRAPH_DELAY_S + index * PARAGRAPH_STEP_S
  )
  const lastParagraph = paragraphs.at(-1) ?? SALUTATION_DELAY_S
  const signOff = lastParagraph + SIGN_OFF_GAP_S
  return {
    salutation: SALUTATION_DELAY_S,
    paragraphs,
    signOff,
    closeButton: signOff + CLOSE_BUTTON_GAP_S
  }
}
