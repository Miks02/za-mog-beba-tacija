export type AppConfig = {
  herName: string
  signature: string
  initials: string
  relationshipStart: string
  splashSeconds: number
  musicTrack: string | null
  messages: {
    splashEyebrow: string
    splashTitle: string
    homeLine: string
    skyLine: string
  }
}

export type Reason = {
  id: string
  text: string
}

export type LetterParagraphTone = 'plain' | 'aside'

export type LetterParagraph = {
  id: string
  text: string
  tone: LetterParagraphTone
}

export type Letter = {
  salutation: string
  paragraphs: ReadonlyArray<LetterParagraph>
  signOff: string
}

export type OpenWhenNote = {
  id: string
  label: string
  message: string
}

export type Milestone = {
  id: string
  date: string
  title: string
  text: string
}

export type FinalMilestone = {
  label: string
  titleSuffix: string
  text: string
}

export type Photo = {
  id: string
  caption: string
  src?: string
}
