import { Link } from 'react-router'
import { paths } from '@renderer/app/paths'
import { PageShell } from '@renderer/components/layout/PageShell'

const placeholderLinks = [
  { id: 'letter', to: paths.letter, label: 'Pismo za tebe' },
  { id: 'reasons', to: paths.reasons, label: 'Zašto te volim' },
  { id: 'gallery', to: paths.gallery, label: 'Naše uspomene' },
  { id: 'story', to: paths.story, label: 'Naša priča' },
  { id: 'open-when', to: paths.openWhen, label: 'Otvori kad…' },
  { id: 'sky', to: paths.sky, label: 'Naše nebo' }
] as const

export function HomeScreen(): React.JSX.Element {
  return (
    <PageShell containerClassName="justify-center">
      <h1 className="font-script text-8xl font-normal">Beba Tacije</h1>
      <nav aria-label="Iznenađenja" className="grid grid-cols-3 gap-3.5">
        {placeholderLinks.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            className="rounded-[20px] border border-haze/16 bg-haze/7 p-4 font-bold text-haze no-underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </PageShell>
  )
}
