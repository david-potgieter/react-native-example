import { PlayerInfo } from '@rn-tools/types/app-types'

export function findPlayerByName(data: PlayerInfo[], name: string) {
  if (!name || name.length < 1) return -1
  return data.findIndex(
    item => item?.name?.trim().toLowerCase() === String(name).trim().toLowerCase(),
  )
}
