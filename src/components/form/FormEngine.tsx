import { useAtom } from 'jotai'
import { Box, Button, HStack, VStack } from 'native-base'
import { FormProvider, useForm } from 'react-hook-form'

import { BaseTextInput } from '@rn-tools/components/form/input/BaseTextInput'
import { searchStringAtom } from '@rn-tools/state/atoms/search-atoms'
import { FormEngineProps, SearchFormValues } from '@rn-tools/types/app-types'

export function FormEngine({ children }: FormEngineProps) {
  const [searchString, setSearchString] = useAtom(searchStringAtom)
  const form = useForm({ defaultValues: { searchString: '' } })
  const { control, handleSubmit, formState } = form

  const onSubmit = (data: SearchFormValues) => {
    setSearchString(data.searchString)
  }

  return (
    <FormProvider {...form}>
      <Box justifyContent="center" h="full">
        <VStack space="4">
          <HStack space="2" bgColor="white" p="4" rounded="lg">
            <Box w="3/5">
              <BaseTextInput control={control} name="searchString" />
            </Box>
            <Box w="2/5">
              <Button
                disabled={!formState.isDirty}
                h="12"
                onPress={handleSubmit(onSubmit)}
                variant={formState.isDirty ? 'solid' : 'subtle'}>
                Search
              </Button>
            </Box>
          </HStack>
          {searchString ? <Box>{children}</Box> : null}
        </VStack>
      </Box>
    </FormProvider>
  )
}
