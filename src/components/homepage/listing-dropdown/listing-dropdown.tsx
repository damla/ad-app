'use client'

import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/general/button/button'
import Icon from '@/components/general/icon/icon'
import { SORT_OPTION } from '@/types'
import { capitalizeFirstLetter } from '@/utils/helpers'
import styles from './styles.module.scss'
import { useSortOption } from '@/hooks/use-sort-option'

const ListingDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const { setSortOption } = useSortOption()

  const handleSortChange = (sortOption: SORT_OPTION) => {
    setSortOption(sortOption)
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Convert the SORT_OPTION enum into an array for mapping
  const sortOptionsArray = Object.values(SORT_OPTION)

  return (
    <div ref={dropdownRef}>
      <Button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
        <Icon name='SettingsIcon' size={18} className={styles.icon} />
      </Button>
      {isOpen && (
        <ul className={styles.list}>
          {sortOptionsArray.map((option, index) => (
            <Button
              key={`dropdown-list-item-${index}`}
              className={styles.listItem}
              onClick={() => handleSortChange(option)}
            >
              Favori Sayısı ({capitalizeFirstLetter(option)})
            </Button>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListingDropdown
