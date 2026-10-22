import { paths } from '@renderer/app/paths'
import { PageHeader } from '@renderer/components/layout/PageHeader'
import { PageShell } from '@renderer/components/layout/PageShell'

export function GalleryScreen(): React.JSX.Element {
  return (
    <PageShell>
      <PageHeader backTo={paths.home} />
      <h1 className="text-center font-script text-7xl font-normal">Naše uspomene</h1>
    </PageShell>
  )
}
