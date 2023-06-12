import { PlayerInfo } from '@rn-tools/types/app-types'

export function findPlayerByName(data: PlayerInfo[], name: string) {
  return data.findIndex(
    item => item?.name?.length > 0 && item.name.toLowerCase() === name.trim().toLowerCase(),
  )
}
