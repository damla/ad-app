'use client'

import { Ad } from '@/components/homepage/ad/ad'
import { Advertisement } from '@prisma/client'
import { Fragment } from 'react'
import styles from './styles.module.scss'
import { useSortOption } from '@/hooks/use-sort-option'

interface Props {
  ads: Advertisement[]
}

export const AdList: React.FC<Props> = ({ ads }) => {
  const { sortedAds } = useSortOption()
  const data = sortedAds(ads)

  const adList = () => {
    if (data.length === 0 || !data) {
      return <p>Henüz ilan bulunmamaktadır.</p>
    }
    return data.map((ad, index) => (
      <Fragment key={`ad-card-${index}`}>
        {index < 6 ? (
          <Ad data={ad} imgPriority={true} />
        ) : (
          <Ad data={ad}  />
        )}
      </Fragment>
    ))
  }
  return <div className={styles.wrapper}>{adList()}</div>
}

interface AdListSkeletonProps {
  children: React.ReactNode
}

export const AdListSkeleton: React.FC<AdListSkeletonProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}
