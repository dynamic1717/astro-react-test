// This file is used to create a global query client that can be used in the entire application
// Attention to query-core import, it's necessary to use the QueryClient
import { QueryClient } from '@tanstack/query-core'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
