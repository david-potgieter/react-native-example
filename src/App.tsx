import { Box } from 'native-base'

import { AppLayout } from '@rn-tools/components/layout/AppLayout'
import { AppProviders } from '@rn-tools/utils/providers/AppProviders'

export default function App(): JSX.Element {
  return (
    <AppProviders>
      <AppLayout>
        <Box>Hello world</Box>
      </AppLayout>
    </AppProviders>
  )
}
