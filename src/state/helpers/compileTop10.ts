import { findPlayerByName } from '@rn-tools/state/helpers/findPlayerByName'
import { transformByRanking } from '@rn-tools/state/helpers/transformByRanking'
import { PlayerInfo } from '@rn-tools/types/app-types'

export function compileTop10(data: PlayerInfo[], name?: string) {
  if (!name) return []
  const array = transformByRanking(data)
  const top10 = array.slice(0, 10)
  const searchedIndex = findPlayerByName(array, name)

  if (searchedIndex === -1) return []

  if (top10.findIndex(item => item.name === name) === -1) {
    top10[9] = array[searchedIndex]
  }

  return top10.map(user => ({ ...user, isSearchedUser: user.name === name }))
}
