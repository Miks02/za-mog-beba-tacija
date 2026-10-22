import type { Letter } from '@renderer/types/content'

export const letter = {
  salutation: 'Draga moja Beba Tacije,',
  paragraphs: [
    {
      id: 'opening',
      tone: 'plain',
      text: '[Ovde ide tvoje pismo — ono što želiš da pročita kad prvi put upali svoj novi laptop.]'
    },
    {
      id: 'memories',
      tone: 'aside',
      text: '[Kako ste se upoznali, šta ti znači, šta te nasmeje kad pomisliš na nju.]'
    }
  ],
  signOff: 'Zauvek tvoj,'
} as const satisfies Letter
