import { FormEngine } from '@rn-tools/components/form/FormEngine'
import { AppLayout } from '@rn-tools/components/layout/AppLayout'
import { AppProviders } from '@rn-tools/utils/providers/AppProviders'

export default function App(): JSX.Element {
  return (
    <AppProviders>
      <AppLayout>
        <FormEngine isLoading={false} />
      </AppLayout>
    </AppProviders>
  )
}
