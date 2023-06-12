import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import 'react-native'

import App from '../src/App'

it('renders correctly', async () => {
  const comp = render(<App />)
  await waitFor(() => {
    expect(comp.getByText('Hello world')).toBeDefined()
  })
})
