import { findPlayerByName } from '@rn-tools/state/helpers/findPlayerByName'
import { transformByRanking } from '@rn-tools/state/helpers/transformByRanking'
import { PlayerInfo } from '@rn-tools/types/app-types'

export function compileTop10(data: PlayerInfo[], name?: string) {
  if (!name || name.length < 1) return []
  const array = transformByRanking(data)
  const top10 = array.slice(0, 10)
  const searchedIndex = findPlayerByName(array, name)

  if (searchedIndex === -1) return []
  const isSearchedUserInTop10 =
    top10.findIndex(item => item.name.toLowerCase() === name.toLowerCase()) !== -1

  if (!isSearchedUserInTop10) {
    top10[9] = array[searchedIndex]
  }

  return top10.map(user => ({
    ...user,
    isSearchedUser: user.name.toLowerCase() === name.toLowerCase(),
  }))
}
