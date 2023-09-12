'use client'

import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'

import { Advertisement } from '@prisma/client'
import { SORT_OPTION } from '@/types'
import { sortAds } from '@/utils/helpers'

type SortOptionContextValue = {
  sortedAds: (ads: Advertisement[]) => Advertisement[]
  setSortOption: (newSortOption: SORT_OPTION) => void
}

export const SortOptionContext = createContext<
  SortOptionContextValue | undefined
>(undefined)

type SortOptionProviderProps = {
  children: ReactNode
}

export const SortOptionProvider = ({ children }: SortOptionProviderProps) => {
  const [sortOption, setSortOption] = useState<SORT_OPTION | undefined>(
    undefined
  )

  useEffect(() => {
    const savedSortOption = localStorage.getItem('sortOption');

    if (Object.values(SORT_OPTION).includes(savedSortOption as SORT_OPTION)) {
      setSortOption(savedSortOption as SORT_OPTION);
    }
  }, [])

  const setAndSaveSortOption = useCallback((newSortOption: SORT_OPTION) => {
    localStorage.setItem('sortOption', newSortOption)
    setSortOption(newSortOption)
  }, [])

  const sortedAdsFunction = useCallback(
    (ads: Advertisement[]): Advertisement[] => {
      return !sortOption ? ads : sortAds(ads, sortOption)
    },
    [sortOption]
  )

  const contextValue = useMemo(
    () => ({
      sortedAds: sortedAdsFunction,
      setSortOption: setAndSaveSortOption
    }),
    [sortedAdsFunction, setAndSaveSortOption]
  )

  return (
    <SortOptionContext.Provider value={contextValue}>
      {children}
    </SortOptionContext.Provider>
  )
}
