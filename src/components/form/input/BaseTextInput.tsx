import { useResetAtom } from 'jotai/utils'
import { Box, Input, Pressable, useTheme } from 'native-base'
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { searchStringAtom } from '@rn-tools/state/atoms/search-atoms'
import { SearchFormValues } from '@rn-tools/types/app-types'

export function BaseTextInput(props: UseControllerProps<SearchFormValues>) {
  const { colors } = useTheme()
  const form = useFormContext()
  const resetSearchString = useResetAtom(searchStringAtom)
  const searchString = form.watch('searchString') as string | undefined

  function handleClearSearch() {
    form.setValue('searchString', '')
    resetSearchString()
  }

  return (
    <Controller
      control={props.control}
      rules={{ required: true }}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          placeholder="Search for a user name..."
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          InputLeftElement={
            <Box pl="2">
              <FontAwesomeIcon icon={faMagnifyingGlass} color={colors.blueGray[600]} />
            </Box>
          }
          InputRightElement={
            searchString ? (
              <Pressable onPress={handleClearSearch} testID="clearIcon">
                <Box pr="2">
                  <FontAwesomeIcon icon={faTimes} color={colors.red[600]} />
                </Box>
              </Pressable>
            ) : (
              <></>
            )
          }
          h="12"
          bgColor="info.100"
          color="info.900"
        />
      )}
      name={props.name}
    />
  )
}
