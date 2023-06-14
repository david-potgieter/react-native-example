import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

const baseConfig = {
  retry: 1,
  retryDelay: 1000 * 10,
  refetchOnWindowFocus: true,
  refetchOnMount: true,
}

const persister = createAsyncStoragePersister({ storage: AsyncStorage })

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { ...baseConfig, networkMode: 'offlineFirst' },
    mutations: baseConfig,
  },
  mutationCache: new MutationCache(),
  queryCache: new QueryCache(),
})

export function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      {children}
    </PersistQueryClientProvider>
  )
}
