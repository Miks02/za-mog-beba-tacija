import type { FinalMilestone, Milestone } from '@renderer/types/content'

export const milestones = [
  {
    id: 'beginning',
    date: '9. jun 2025',
    title: 'Početak nas',
    text: 'Noć kad je sve počelo.'
  },
  {
    id: 'first-date',
    date: '14. jun 2025',
    title: 'Naš prvi izlazak',
    text: 'Indijski restoran, bleja u parku.'
  },
  {
    id: 'first-birthday',
    date: '3. nov 2025',
    title: 'Prvi rodjendan zajedno',
    text: 'Moj drugi najlepši dan u životu. Prvi je, 9. jun. 2025. godine.'
  },
  {
    id: 'first-trip',
    date: '17-28 jul 2026',
    title: 'Prvo letovanje',
    text: 'Naše prvo, od mnogih budućih letovanja.'
  }
] as const satisfies ReadonlyArray<Milestone>

export const finalMilestone = {
  label: 'Danas',
  titleSuffix: 'dana kasnije',
  text: 'I tek smo počeli.'
} as const satisfies FinalMilestone
