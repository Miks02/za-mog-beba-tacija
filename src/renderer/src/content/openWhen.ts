import type { OpenWhenNote } from '@renderer/types/content'

export const openWhenNotes = [
  {
    id: 'miss-me',
    label: 'ti nedostajem',
    message: 'Zatvori oči i zamisli moj zagrljaj. Upravo sada mislim na tebe.'
  },
  {
    id: 'sad',
    label: 'si tužna',
    message: 'I najteži dani prođu. A ja sam uz tebe u svakom od njih.'
  },
  {
    id: 'cant-sleep',
    label: 'ne možeš da zaspiš',
    message: 'Diši polako i zamisli da ti pričam o svom danu dok ti ne utonu oči.'
  },
  {
    id: 'need-smile',
    label: 'ti treba osmeh',
    message: 'Seti se kako smo se smejali bez razloga. Sad se smeješ, zar ne?'
  },
  {
    id: 'doubt',
    label: 'sumnjaš u sebe',
    message: 'Ti si najjača i najpametnija osoba koju znam. Verujem u tebe, uvek.'
  },
  {
    id: 'how-much',
    label: 'želiš da znaš koliko te volim',
    message: 'Više nego što stane u ovaj računar. I svaki dan malo više.'
  }
] as const satisfies ReadonlyArray<OpenWhenNote>

export const openWhenSignaturePrefix = 'tvoj'
