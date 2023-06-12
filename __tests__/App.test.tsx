import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import 'react-native'

import App from '../src/App'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}))

describe('App Home', () => {
  test('renders search button correctly', async () => {
    const { getByText } = render(<App />)
    await waitFor(() => {
      const searchButton = getByText('Search')
      expect(searchButton).toBeTruthy()
    })
  })
})
