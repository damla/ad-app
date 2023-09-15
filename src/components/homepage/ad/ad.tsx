import { Advertisement } from '@prisma/client'
import DeleteAdButton from './delete-ad-button/delete-ad-button'
import FavoriteAdButton from './favorite-ad-button/favorite-ad-button'
import Icon from '@/components/general/icon/icon'
import Image from 'next/image'
import { Skeleton } from '@/components/general/skeleton/skeleton'
import styles from './styles.module.scss'
import useFormattedDate from '@/hooks/use-formatted-date'

interface Props {
  data: Advertisement
  imgPriority?: boolean
}

export const Ad = ({ data, imgPriority = false }: Props) => {
  const { id, isUrgent, imageUrl, title, favoriteCount, lastUpdated } = data

  const date = useFormattedDate(lastUpdated)
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
            alt='advertisement image'
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
            <time>Son Güncellenme: {date}</time>
          </span>
        </div>
      </div>
    </div>
  )
}

export const AdSkeleton = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.wrapper}>
        <Skeleton className={styles.imageSkeleton} />
        <div className={styles.content}>
          <Skeleton className={styles.titleSkeleton} />
          <span>
            <Icon name='HeartIcon' />
            <Skeleton className={styles.textSkeleton} />
          </span>
          <span>
            <Icon name='CalendarIcon' />
            <Skeleton className={styles.textSkeleton} />
          </span>
        </div>
      </div>
    </div>
  )
}
