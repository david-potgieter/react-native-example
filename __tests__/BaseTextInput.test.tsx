import { fireEvent, render } from '@testing-library/react-native'
import { useResetAtom } from 'jotai/utils'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { BaseTextInput } from '../src/components/form/input/BaseTextInput'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}))

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
}

describe('BaseTextInput', () => {
  const TestWrapper = () => {
    const form = useForm({ defaultValues: { searchString: '' } })
    return (
      <NativeBaseProvider initialWindowMetrics={inset}>
        <FormProvider {...form}>
          <BaseTextInput control={form.control} name="searchString" />
        </FormProvider>
      </NativeBaseProvider>
    )
  }

  test('renders correctly and clears search string', () => {
    const { getByPlaceholderText, queryByTestId } = render(<TestWrapper />)
    const input = getByPlaceholderText('Search for a user name...')
    fireEvent.changeText(input, 'John Doe')
    expect(input.props.value).toBe('John Doe')
    const clearButton = queryByTestId('clearButton')
    if (clearButton) {
      fireEvent.press(clearButton)
      expect(input.props.value).toBe('')
      expect(useResetAtom).toHaveBeenCalledTimes(1)
    }
  })
})
