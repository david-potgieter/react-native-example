import { Box, Button, HStack, Input, Spinner, VStack, useTheme } from 'native-base'
import { useEffect, useState } from 'react'
import { Controller, UseControllerProps, useForm } from 'react-hook-form'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { FormEngineProps, SearchFormValues } from '@rn-tools/types/app-types'

export function BaseTextInput(props: UseControllerProps<SearchFormValues>) {
  const { colors } = useTheme()
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
          h="12"
          bgColor="info.100"
          color="info.900"
        />
      )}
      name={props.name}
    />
  )
}

export function FormEngine({ isLoading, children }: FormEngineProps) {
  const [isFocused, setIsFocused] = useState(false)
  const { control, handleSubmit, formState } = useForm({
    defaultValues: { searchString: '' },
  })

  const onSubmit = (data: SearchFormValues) => console.log(data)

  useEffect(() => {
    setIsFocused(formState.isDirty)
  }, [formState.isDirty])

  return (
    <Box justifyContent={isFocused ? 'flex-start' : 'center'} h="full">
      <VStack space="4">
        <HStack space="2" bgColor="white" p="4" rounded="lg">
          <Box w="3/5">
            <BaseTextInput control={control} name="searchString" />
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
        {isFocused ? <Box>{children}</Box> : null}
      </VStack>
    </Box>
  )
}
