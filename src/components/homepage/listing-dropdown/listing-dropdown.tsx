'use client'

import { useEffect, useRef, useState } from 'react'

import Button from '@/components/general/button/button'
import Icon from '@/components/general/icon/icon'
import { SORT_OPTION } from '@/types'
import styles from './styles.module.scss'
import { useSortOption } from '@/context/sort-option.context'

const ListingDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const { setSortOption } = useSortOption()

  const handleSortChange = (index: number) => {
    if (index === 0) {
      setSortOption(SORT_OPTION.ASC)
      setIsOpen(false)
    }
    if (index === 1) {
      setSortOption(SORT_OPTION.DESC)
      setIsOpen(false)
    }
  }

  const options = ['Artan', 'Azalan']

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

  return (
    <div ref={dropdownRef}>
      <Button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
        <Icon name='SettingsIcon' size={18} />
      </Button>
      {isOpen && (
        <ul className={styles.list}>
          {options.map((option, index) => (
            <Button
              key={`dropdown-list-item-${index}`}
              className={styles.listItem}
              onClick={() => handleSortChange(index)}
            >
              Favori Sayısı ({option})
            </Button>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListingDropdown
