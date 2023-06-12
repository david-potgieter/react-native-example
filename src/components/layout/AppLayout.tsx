import { Center } from 'native-base'
import { PropsWithChildren } from 'react'

export function AppLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Center safeArea bg="blueGray.300" h="full" p="6">
      {children}
    </Center>
  )
}
