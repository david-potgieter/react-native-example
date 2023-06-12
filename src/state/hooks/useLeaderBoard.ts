import { useAtomValue } from 'jotai'

import { searchStringAtom } from '@rn-tools/state/atoms/search-atoms'
import { getMockedData } from '@rn-tools/state/fetch/getMockedData'
import { compileTop10 } from '@rn-tools/state/helpers/compileTop10'
import { PlayerInfo } from '@rn-tools/types/app-types'
import { useQuery } from '@tanstack/react-query'

export function useLeaderBoard() {
  const searchString = useAtomValue(searchStringAtom)
  return useQuery({
    queryKey: ['leaderBoard'],
    queryFn: async () => {
      const data = (await getMockedData()) as PlayerInfo[]
      const top10 = compileTop10(data, searchString)
      return top10
    },
    enabled: Boolean(searchString),
  })
}
