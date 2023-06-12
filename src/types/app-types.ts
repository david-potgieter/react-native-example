import { PropsWithChildren } from 'react'

export type SearchFormValues = {
  searchString: string
}

export interface FormEngineProps extends PropsWithChildren {
  isLoading?: boolean
}
