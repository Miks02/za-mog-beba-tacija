import type { Reason } from '@renderer/types/content'

export const reasons = [
  { id: 'smile', text: 'Zato što se smeješ i kad pokušavaš da budeš ljuta na mene.' },
  { id: 'walk', text: 'Zato što i najobičnija šetnja sa tobom postane najlepši deo dana.' },
  { id: 'understand', text: 'Zato što me razumeš i kad ništa ne kažem.' },
  { id: 'peace', text: 'Zato što si istovremeno moj mir i moja najveća avantura.' },
  { id: 'share', text: 'Zato što svaki moj uspeh ima smisla tek kad ga podelim sa tobom.' },
  { id: 'you', text: 'Zato što si ti — i to je sasvim dovoljno.' }
] as const satisfies ReadonlyArray<Reason>
