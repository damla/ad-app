'use client'

import Button from '@/components/general/button/button'
import { Icon } from '@/components/general/icon/icon'
import styles from './styles.module.scss'

const ListingDropdown: React.FC = () => {
  return (
    <Button className={styles.button}>
      <Icon name='SettingsIcon' size={18} />
    </Button>
  )
}

export default ListingDropdown
