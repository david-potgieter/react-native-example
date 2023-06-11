import { Center } from 'native-base'
import { PropsWithChildren } from 'react'

export function AppLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Center safeArea bg="muted.100" h="full">
      {children}
    </Center>
  )
}
