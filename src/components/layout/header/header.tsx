'use client'

import Button from '@/components/general/button/button'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
// Because of using App dir, we need to use next/navigation instead of next/router
// See here: https://nextjs.org/docs/messages/next-router-not-mounted
import { useRouter } from 'next/navigation'

const Header: React.FC = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/add-advertisement')
  }

  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        <Image src='/logo.png' alt='Ad Logo' width={40} height={40} priority />
      </Link>
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
