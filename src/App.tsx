import { FormEngine } from '@rn-tools/components/form/FormEngine'
import { AppLayout } from '@rn-tools/components/layout/AppLayout'
import { LeaderBoard } from '@rn-tools/components/ui/LeaderBoard'
import { AppProviders } from '@rn-tools/providers/AppProviders'

export default function App(): JSX.Element {
  return (
    <AppProviders>
      <AppLayout>
        <FormEngine>
          <LeaderBoard />
        </FormEngine>
      </AppLayout>
    </AppProviders>
  )
}
