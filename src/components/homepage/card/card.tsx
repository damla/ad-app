import Button from '@/components/general/button/button'
import { Icon } from '@/components/general/icon/icon'
import Image from 'next/image'
import { dateTimeFormat } from '@/utils/helper'
import styles from './styles.module.scss'

const Card: React.FC = () => {
  const ad = {
    id: '1',
    title: '2008 BMW 3 Series 328i',
    urgent: true,
    favoriteCount: 61,
    lastUpdated: new Date(),
    image: '/test.jpg'
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.wrapper}>
        {ad.urgent && (
          <span className={styles.badge}>
            <Icon name='FireIcon' size={14} />
            ACİL
          </span>
        )}
        <div className={styles.buttonContainer}>
          <Button className={styles.favoriteButton}>
            <Icon name='HeartIcon' size={20} />
          </Button>
          <Button className={styles.trashButton}>
            <Icon name='TrashIcon' size={20} />
          </Button>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={ad.image}
            alt='Advertisement'
            className={styles.image}
            fill
            priority
            sizes='500px'
          />
        </div>
        <div className={styles.content}>
          <h5 className={styles.title}>{ad.title}</h5>
          <span>
            <Icon name='HeartIcon' />
            <p>Toplam Favori Sayısı: {ad.favoriteCount}</p>
          </span>
          <span>
            <Icon name='CalendarIcon' />
            <time>Son Güncellenme: {dateTimeFormat(ad.lastUpdated)}</time>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
