'use client'

import Button from '@/components/general/button/button'
import { Icon } from '@/components/general/icon/icon'
import styles from './styles.module.scss'
import { useState } from 'react'

const ListingDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const options = ['Son Eklenen', 'Favori Sayısı']

  return (
    <div>
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
