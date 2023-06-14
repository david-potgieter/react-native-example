import { Box, Text, VStack } from 'native-base'

import { useLeaderBoard } from '@rn-tools/state/hooks/useLeaderBoard'

import { PlayerItem } from './PlayerItem'

export function LeaderBoard() {
  const { data, isLoading, isError } = useLeaderBoard()

  if (isError) return <Text>Error</Text>

  // console.log(JSON.stringify({ isLoading, s: data?.length }, null, 2))

  return (
    <Box bgColor="white" p="6" rounded="lg">
      {isLoading ? <Text>Loading...</Text> : null}
      {!isLoading && data.length === 0 ? (
        <Text variant="error">That player does not exist...</Text>
      ) : null}
      {!isLoading && data.length > 0 ? (
        <VStack space="2">
          {data.map(player => (
            <PlayerItem key={player.uid} player={player} />
          ))}
        </VStack>
      ) : null}
    </Box>
  )
}
