import Button from '@/components/general/button/button'
import { Icon } from '@/components/general/icon/icon'
import Image from 'next/image'
import moment from 'moment'
import styles from './styles.module.scss'

const Card: React.FC = () => {
  const advertisements = [
    {
      id: '1',
      title: '2008 BMW 3 Series 328i',
      isUrgent: true,
      favoriteCount: 61,
      lastUpdated: new Date(),
      imageUrl: '/test.jpg'
    }
  ]

  return (
    <div className={styles.cardContainer}>
      <div className={styles.wrapper}>
        {advertisements[0].isUrgent && (
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
            src={advertisements[0].imageUrl}
            alt='Advertisement'
            className={styles.image}
            fill
            priority
            sizes='500px'
          />
        </div>
        <div className={styles.content}>
          <h5 className={styles.title}>{advertisements[0].title}</h5>
          <span>
            <Icon name='HeartIcon' />
            <p>Toplam Favori Sayısı: {advertisements[0].favoriteCount}</p>
          </span>
          <span>
            <Icon name='CalendarIcon' />
            <time>
              Son Güncellenme:{' '}
              {moment(advertisements[0].lastUpdated).format('DD.MM.YYYY HH:mm')}
            </time>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
