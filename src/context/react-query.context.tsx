'use client'

import {
  QueryClientInstanceProvider,
  useQueryClientInstance
} from '@/context/query-client.context'
import React, { ReactNode } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'

const ReactQueryClientInstanceWrapper = ({
  children
}: {
  children: ReactNode
}) => {
  const { queryClient } = useQueryClientInstance()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

interface Props {
  children: ReactNode
}

export const ReactQueryProviders = ({ children }: Props) => {
  return (
    <QueryClientInstanceProvider>
      <ReactQueryClientInstanceWrapper>
        {children}
      </ReactQueryClientInstanceWrapper>
    </QueryClientInstanceProvider>
  )
}
