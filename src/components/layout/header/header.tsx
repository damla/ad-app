'use client'

import Button from '@/components/general/button/button'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'

const Header: React.FC = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/add-ad')
  }

  return (
    <header className={styles.header}>
      <a href='/' className={styles.logo} />
      <nav>
        <ul>
          <li>
            <Button onClick={handleClick}>Yeni ilan ekle</Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
