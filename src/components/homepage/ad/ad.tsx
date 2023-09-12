import { Advertisement } from '@prisma/client'
import DeleteAdButton from './delete-ad-button/delete-ad-button'
import FavoriteAdButton from './favorite-ad-button/favorite-ad-button'
import Icon from '@/components/general/icon/icon'
import Image from 'next/image'
import moment from 'moment'
import styles from './styles.module.scss'

interface Props {
  data: Advertisement
  imgPriority: boolean
}

const Ad: React.FC<Props> = ({ data, imgPriority }) => {
  const { id, isUrgent, imageUrl, title, favoriteCount, lastUpdated } = data
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
          <FavoriteAdButton id={id} favoriteCount={favoriteCount} />
          <DeleteAdButton id={id} />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={imageUrl}
            alt='Advertisement'
            className={styles.image}
            fill
            priority={imgPriority}
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
