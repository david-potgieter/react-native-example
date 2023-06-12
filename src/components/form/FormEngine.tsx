import { Box, Button, HStack, Input, Spinner, useTheme } from 'native-base'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { FormEngineProps, SearchFormInput } from '@rn-tools/types/app-types'

export function FormEngine({ isLoading }: FormEngineProps) {
  const { colors } = useTheme()
  const [isFocused, setIsFocused] = useState(false)
  const { control, handleSubmit, formState } = useForm({
    defaultValues: { searchString: '' },
  })

  const onSubmit = (data: SearchFormInput) => console.log(data)

  useEffect(() => {
    setIsFocused(formState.isDirty)
  }, [formState.isDirty])

  return (
    <Box justifyContent={isFocused ? 'flex-start' : 'center'} h="full">
      <HStack space="2" bgColor="white" p="4" rounded="lg">
        <Box w="3/5">
          <Controller
            control={control}
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
                h="12"
                bgColor="info.100"
                color="info.900"
              />
            )}
            name="searchString"
          />
        </Box>
        <Box w="2/5">
          <Button
            disabled={!formState.isDirty || isLoading}
            h="12"
            onPress={handleSubmit(onSubmit)}
            variant={formState.isDirty ? 'solid' : 'subtle'}>
            {isLoading ? <Spinner /> : 'Search'}
          </Button>
        </Box>
      </HStack>
    </Box>
  )
}
