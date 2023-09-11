'use client'

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import { SORT_OPTION } from '@/types'

type SortOptionContextValue = {
  sortOption: SORT_OPTION
  setSortOption: (newSortOption: SORT_OPTION) => void
}

const SortOptionContext = createContext<SortOptionContextValue | undefined>(
  undefined
)

export function useSortOption() {
  const context = useContext(SortOptionContext)
  if (!context) {
    throw new Error('useSortOption must be used within a SortOptionProvider')
  }
  return context
}

type SortOptionProviderProps = {
  children: ReactNode
}

export function SortOptionProvider({ children }: SortOptionProviderProps) {
  const [sortOption, setSortOption] = useState<SORT_OPTION>(SORT_OPTION.DESC) // Default sort option

  // Load the sort option from local storage when the component mounts
  useEffect(() => {
    const savedSortOption = localStorage.getItem('sortOption')

    if (savedSortOption === SORT_OPTION.ASC) {
      setSortOption(SORT_OPTION.ASC)
    }

    if (savedSortOption === SORT_OPTION.DESC) {
      setSortOption(SORT_OPTION.ASC)
    }
  }, [])

  // Function to set the sort option and save it to local storage
  const setAndSaveSortOption = (newSortOption: SORT_OPTION) => {
    localStorage.setItem('sortOption', newSortOption)
    setSortOption(newSortOption)
  }

  const contextValue: SortOptionContextValue = {
    sortOption,
    setSortOption: setAndSaveSortOption
  }

  return (
    <SortOptionContext.Provider value={contextValue}>
      {children}
    </SortOptionContext.Provider>
  )
}
