import type { ReactNode } from 'react'
import { Image, Mail, MailOpen, Moon } from 'lucide-react'
import { paths } from '@renderer/app/paths'
import { config } from '@renderer/content/config'
import { formatDayMonthGenitive, parseLocalDateTime } from '@renderer/lib/dateSr'
import { HeartOutlineIcon } from './components/HeartOutlineIcon'
import { StoryPathIcon } from './components/StoryPathIcon'

const ICON_PROPS = { size: 20, strokeWidth: 1.8, 'aria-hidden': true } as const

export type NavItem = {
  id: string
  to: string
  title: string
  subtitle: string
  tone: 'violet' | 'orchid'
  icon: ReactNode
}

const relationshipStartDay = formatDayMonthGenitive(parseLocalDateTime(config.relationshipStart))

export const navItems: ReadonlyArray<NavItem> = [
  {
    id: 'letter',
    to: paths.letter,
    title: 'Pismo za tebe',
    subtitle: 'Otvori kovertu',
    tone: 'violet',
    icon: <Mail {...ICON_PROPS} />
  },
  {
    id: 'reasons',
    to: paths.reasons,
    title: 'Zašto te volim',
    subtitle: 'Razlog na svaki klik',
    tone: 'orchid',
    icon: <HeartOutlineIcon />
  },
  {
    id: 'gallery',
    to: paths.gallery,
    title: 'Naše uspomene',
    subtitle: 'Kolaž naših slika',
    tone: 'violet',
    icon: <Image {...ICON_PROPS} />
  },
  {
    id: 'story',
    to: paths.story,
    title: 'Naša priča',
    subtitle: `Od ${relationshipStartDay} do danas`,
    tone: 'orchid',
    icon: <StoryPathIcon />
  },
  {
    id: 'open-when',
    to: paths.openWhen,
    title: 'Otvori kad…',
    subtitle: 'Poruke za svaki trenutak',
    tone: 'violet',
    icon: <MailOpen {...ICON_PROPS} />
  },
  {
    id: 'sky',
    to: paths.sky,
    title: 'Naše nebo',
    subtitle: 'Zaželi želju',
    tone: 'orchid',
    icon: <Moon {...ICON_PROPS} />
  }
]
