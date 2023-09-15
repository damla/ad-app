import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header} id='header'>
      <Link href='/' className={styles.logo}>
        <Image src='/logo.png' alt='Ad Logo' width={40} height={40} priority />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              href='/add-advertisement'
              className={classNames('button', styles.button)}
            >
              Yeni ilan ekle
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
