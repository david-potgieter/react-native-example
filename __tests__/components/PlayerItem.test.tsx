import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import { PlayerItem } from '../../src/components/ui/PlayerItem'
import { TestProvidersWrapper } from '../../src/providers/test/TestProviders'
import { PlayerProps } from '../../src/types/app-types'

describe('PlayerItem', () => {
  const TestWrapper = ({ player }: PlayerProps) => {
    return (
      <TestProvidersWrapper>
        <PlayerItem player={player} />
      </TestProvidersWrapper>
    )
  }
  it('renders player name and number of bananas correctly', async () => {
    const testPlayer = {
      name: 'TestPlayer',
      bananas: 123,
      rank: 1,
      isSearchedUser: false,
      lastDayPlayed: '2017-11-01',
      longestStreak: 0,
      stars: 4,
      subscribed: false,
      uid: 'abc123',
    }

    const { getByText } = render(<TestWrapper player={testPlayer} />)
    await waitFor(() => {
      expect(getByText('TestPlayer')).toBeTruthy()
      expect(getByText('123')).toBeTruthy()
    })
  })

  it('renders PlayerPodium component', async () => {
    const testPlayer = {
      name: 'TestPlayer',
      bananas: 123,
      rank: 1,
      isSearchedUser: false,
      lastDayPlayed: '2017-11-01',
      longestStreak: 0,
      stars: 4,
      subscribed: false,
      uid: 'abc123',
    }

    const { getByText } = render(<TestWrapper player={testPlayer} />)
    await waitFor(() => {
      expect(getByText('1')).toBeTruthy()
    })
  })
})
