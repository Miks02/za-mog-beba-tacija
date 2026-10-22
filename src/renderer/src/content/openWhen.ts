import type { OpenWhenNote } from '@renderer/types/content'

export const openWhenNotes = [
  {
    id: 'miss-me',
    label: 'ti nedostajem',
    message: 'Zatvori oči i zamisli moj zagrljaj.'
  },
  {
    id: 'sad',
    label: 'si tužna',
    message: 'Pozovi na bejbovanje. Nakon toga više neće da bude tužno Beba Tacije.'
  },
  {
    id: 'cant-sleep',
    label: 'ne možeš da zaspiš',
    message: 'Pozovi me i tad. Da pričamo do 5 ujutro!'
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
    message: 'Mnogo više nego što može da stane u ovu aplikaciju. I svaki dan sve više.'
  }
] as const satisfies ReadonlyArray<OpenWhenNote>

export const openWhenSignaturePrefix = 'tvoj'
