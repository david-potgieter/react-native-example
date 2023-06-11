import App from '@rn-tools/App'
import { render } from '@testing-library/react-native'
import React from 'react'
import 'react-native'

it('renders correctly', () => {
  const comp = render(<App />)
  expect(comp.getByText('Hello world')).toBeDefined()
})
