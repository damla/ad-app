'use client'

import { SortOptionContext } from '@/context/sort-option.context'
import { useContext } from 'react'

export const useSortOption = () => {
  const context = useContext(SortOptionContext)
  if (!context) {
    throw new Error('useSortOption must be used within a SortOptionProvider')
  }
  return context
}
