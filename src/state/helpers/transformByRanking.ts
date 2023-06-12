import { PlayerInfo } from '@rn-tools/types/app-types'

export function transformByRanking(data: PlayerInfo[]) {
  const array = Object.values(data).sort((a, b) => b.bananas - a.bananas)
  array.forEach((item, index) => (item.rank = index + 1))
  return array
}
