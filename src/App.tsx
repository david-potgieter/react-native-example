import { AppLayout } from '@rn-tools/components/layout/AppLayout'
import { Box, NativeBaseProvider } from 'native-base'

export default function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <AppLayout>
        <Box>Hello world</Box>
      </AppLayout>
    </NativeBaseProvider>
  )
}
