import { Advertisement } from '@prisma/client'
import Button from '@/components/general/button/button'
import { Icon } from '@/components/general/icon/icon'
import Image from 'next/image'
import moment from 'moment'
import styles from './styles.module.scss'

interface Props {
  data: Advertisement
}

const Ad: React.FC<Props> = ({ data }) => {
  const { isUrgent, imageUrl, title, favoriteCount, lastUpdated } = data
  return (
    <div className={styles.cardContainer}>
      <div className={styles.wrapper}>
        {isUrgent && (
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
            src={imageUrl}
            alt='Advertisement'
            className={styles.image}
            fill
            priority
            sizes='500px'
          />
        </div>
        <div className={styles.content}>
          <h5 className={styles.title}>{title}</h5>
          <span>
            <Icon name='HeartIcon' />
            <p>Toplam Favori Sayısı: {favoriteCount}</p>
          </span>
          <span>
            <Icon name='CalendarIcon' />
            <time>
              Son Güncellenme: {moment(lastUpdated).format('DD.MM.YYYY HH:mm')}
            </time>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Ad
