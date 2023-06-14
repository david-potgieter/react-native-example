import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { useResetAtom } from 'jotai/utils'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { BaseTextInput } from '../../src/components/form/input/BaseTextInput'
import { TestProvidersWrapper } from '../../src/providers/test/TestProviders'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}))

describe('BaseTextInput', () => {
  const TestWrapper = () => {
    const form = useForm({ defaultValues: { searchString: '' } })
    return (
      <TestProvidersWrapper>
        <FormProvider {...form}>
          <BaseTextInput control={form.control} name="searchString" />
        </FormProvider>
      </TestProvidersWrapper>
    )
  }

  test('renders correctly and clears search string', async () => {
    const { getByPlaceholderText, queryByTestId } = render(<TestWrapper />)
    const input = getByPlaceholderText('Search for a user name...')
    fireEvent.changeText(input, 'John Doe')
    await waitFor(() => {
      expect(input.props.value).toBe('John Doe')
    })
    const clearButton = queryByTestId('clearButton')
    if (clearButton) {
      fireEvent.press(clearButton)
      expect(input.props.value).toBe('')
      expect(useResetAtom).toHaveBeenCalledTimes(1)
    }
  })
})
