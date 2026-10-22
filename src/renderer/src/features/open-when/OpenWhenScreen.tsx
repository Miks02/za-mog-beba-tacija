import { paths } from '@renderer/app/paths'
import { PageHeader } from '@renderer/components/layout/PageHeader'
import { PageShell } from '@renderer/components/layout/PageShell'

export function OpenWhenScreen(): React.JSX.Element {
  return (
    <PageShell>
      <PageHeader backTo={paths.home} />
      <h1 className="text-center font-script text-7xl font-normal">Otvori kad…</h1>
    </PageShell>
  )
}
