import { Center, Text } from 'native-base'

import { PlayerPodiumProps } from '@rn-tools/types/app-types'

export function PlayerPodium({ rank, isSearchedUser }: PlayerPodiumProps) {
  let bgColor
  switch (true) {
    case rank === 1:
      bgColor = 'yellow.300'
      break
    case rank === 2:
      bgColor = 'light.200'
      break
    case rank === 3:
      bgColor = 'warning.200'
      break
    case isSearchedUser:
      bgColor = 'info.200'
      break
    default:
      bgColor = 'muted.100'
  }
  return (
    <Center w="12" h="6" bgColor={bgColor} rounded="md" testID="podiumPlace">
      <Text fontSize="xs">{rank}</Text>
    </Center>
  )
}
