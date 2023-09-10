'use client'

import { useEffect, useRef, useState } from 'react'

import Button from '@/components/general/button/button'
import { Icon } from '@/components/general/icon/icon'
import styles from './styles.module.scss'

const ListingDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const options = ['Son Eklenen', 'Favori Sayısı']

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
              onClick={() => {
                setIsOpen(false)
              }}
            >
              Sırala ({option})
            </Button>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListingDropdown
