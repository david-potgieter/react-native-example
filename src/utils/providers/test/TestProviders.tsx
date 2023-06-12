import { NativeBaseProvider } from 'native-base'
import { PropsWithChildren } from 'react'

import { QueryProvider } from '@rn-tools/utils/providers/query/QueryProvider'

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
}

export function TestProvidersWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <QueryProvider>{children}</QueryProvider>
    </NativeBaseProvider>
  )
}
