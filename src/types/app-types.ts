import { PropsWithChildren } from 'react'

export type SearchFormValues = {
  searchString: string
}

export interface FormEngineProps extends PropsWithChildren {
  isLoading?: boolean
}

export interface PlayerInfo {
  bananas: number
  lastDayPlayed: string
  longestStreak: number
  name: string
  rank?: number
  isSearchedUser?: boolean
  stars: number
  subscribed: boolean
  uid: string
}

export type PlayerProps = {
  player: PlayerInfo
}

export type PlayerPodiumProps = Partial<Pick<PlayerInfo, 'rank' | 'isSearchedUser'>>
