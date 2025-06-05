'use client'
import { httpBatchLink } from '@trpc/client'
import { trpc } from '@/utils/trpc'
import { PropsWithChildren } from 'react'
import { QueryClient } from '@tanstack/react-query'

export function Providers({ children }: PropsWithChildren) {
  const client = trpc.createClient({
    links: [httpBatchLink({ url: '/api/trpc' })],
  })
  const queryClient = new QueryClient()
  return (
    <trpc.Provider client={client} queryClient={queryClient}>
      {children}
    </trpc.Provider>
  )
}
