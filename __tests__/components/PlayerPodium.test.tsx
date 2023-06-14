import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import { PlayerPodium } from '../../src/components/ui/PlayerPodium'
import { TestProvidersWrapper } from '../../src/providers/test/TestProviders'
import { PlayerPodiumProps } from '../../src/types/app-types'

describe('PlayerPodium', () => {
  const TestWrapper = (props: PlayerPodiumProps) => {
    return (
      <TestProvidersWrapper>
        <PlayerPodium rank={props.rank} isSearchedUser={props?.isSearchedUser} />
      </TestProvidersWrapper>
    )
  }
  it('renders rank correctly: 1st', async () => {
    const { getByTestId, getByText } = render(<TestWrapper rank={1} />)
    await waitFor(() => {
      expect(getByText('1')).toBeTruthy()
      expect(getByTestId('podiumPlace')?.props?.style.backgroundColor).toBe('#fde047')
    })
  })

  it('renders rank correctly: 2nd', async () => {
    const { getByTestId, getByText } = render(<TestWrapper rank={2} />)
    await waitFor(() => {
      expect(getByText('2')).toBeTruthy()
      expect(getByTestId('podiumPlace')?.props?.style.backgroundColor).toBe('#e7e5e4')
    })
  })

  it('renders rank correctly: 3rd', async () => {
    const { getByTestId, getByText } = render(<TestWrapper rank={3} />)
    await waitFor(() => {
      expect(getByText('3')).toBeTruthy()
      expect(getByTestId('podiumPlace')?.props?.style.backgroundColor).toBe('#fed7aa')
    })
  })

  it('renders rank correctly: 6th', async () => {
    const { getByTestId, getByText } = render(<TestWrapper rank={6} isSearchedUser />)
    await waitFor(() => {
      expect(getByText('6')).toBeTruthy()
      expect(getByTestId('podiumPlace')?.props?.style.backgroundColor).toBe('#bae6fd')
    })
  })

  it('renders rank correctly: 8th', async () => {
    const { getByTestId, getByText } = render(<TestWrapper rank={8} />)
    await waitFor(() => {
      expect(getByText('8')).toBeTruthy()
      expect(getByTestId('podiumPlace')?.props?.style.backgroundColor).toBe('#f5f5f5')
    })
  })
})
