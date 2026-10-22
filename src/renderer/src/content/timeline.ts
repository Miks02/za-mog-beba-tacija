import type { FinalMilestone, Milestone } from '@renderer/types/content'

export const milestones = [
  {
    id: 'beginning',
    date: '9. jun 2025 · 01:00',
    title: 'Početak nas',
    text: 'Noć kad je sve počelo.'
  },
  {
    id: 'first-date',
    date: '[DATUM]',
    title: '[Prvi zajednički izlazak]',
    text: '[jedna rečenica o tom danu]'
  },
  {
    id: 'first-trip',
    date: '[DATUM]',
    title: '[Prvo putovanje]',
    text: '[jedna rečenica o tom danu]'
  },
  {
    id: 'remembered-moment',
    date: '[DATUM]',
    title: '[Trenutak koji pamtim]',
    text: '[jedna rečenica o tom danu]'
  }
] as const satisfies ReadonlyArray<Milestone>

export const finalMilestone = {
  label: 'Danas',
  titleSuffix: 'dana kasnije',
  text: 'I tek smo počeli.'
} as const satisfies FinalMilestone
