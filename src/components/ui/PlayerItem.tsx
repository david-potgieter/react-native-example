import { Box, HStack, Text } from 'native-base'

import { PlayerPodium } from '@rn-tools/components/ui/PlayerPodium'
import { PlayerProps } from '@rn-tools/types/app-types'

export function PlayerItem({ player }: PlayerProps) {
  return (
    <HStack alignItems="center" space="2">
      <PlayerPodium rank={player?.rank} isSearchedUser={player?.isSearchedUser} />
      <Box flexDir="row" justifyContent="space-between" w="4/5">
        <Text fontSize="sm">{player.name}</Text>
        <Text fontSize="sm">{player.bananas}</Text>
      </Box>
    </HStack>
  )
}
