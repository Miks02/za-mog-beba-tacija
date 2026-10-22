import { Link } from 'react-router'
import { paths } from '@renderer/app/paths'
import { PageShell } from '@renderer/components/layout/PageShell'

export function SplashScreen(): React.JSX.Element {
  return (
    <PageShell containerClassName="items-center justify-center">
      <h1 className="font-script text-9xl font-normal">Volim Te</h1>
      <Link
        to={paths.home}
        className="rounded-full bg-haze px-7 py-3 font-bold text-plum-900 no-underline"
      >
        Uđi u svoj svet
      </Link>
    </PageShell>
  )
}
