import type { Reason } from '@renderer/types/content'

export const reasons = [
  {
    id: 'smile',
    text: 'Zato što se smeješ i kad pokušavaš da budeš ljuta na mene. Ljuto beba tacije.'
  },
  { id: 'walk', text: 'Zato što i najobičniji razgovor sa tobom postane najlepši deo dana.' },
  { id: 'understand', text: 'Zato što me razumeš i kad ništa ne kažem.' },
  { id: 'peace', text: 'Zato što si istovremeno moj mir i moja najveća sreća.' },
  { id: 'share', text: 'Zato što svaki moj uspeh ima smisla tek kad ga podelim sa tobom.' },
  { id: 'you', text: 'Zato što si ti moje sve, i to je sasvim dovoljno.' },
  { id: 'beba-tacije', text: 'Zato što BEBA TACIJE!!!' }
] as const satisfies ReadonlyArray<Reason>
