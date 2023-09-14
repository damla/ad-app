'use client'

import { Ad } from '@/components/homepage/ad/ad'
import { Advertisement } from '@prisma/client'
import { Fragment } from 'react'
import { getAdvertisements } from '@/lib/query-service'
import styles from './styles.module.scss'
import { useQuery } from '@tanstack/react-query'
import { useSortOption } from '@/hooks/use-sort-option'

export const AdList: React.FC = () => {
  const {
    data: ads,
    isLoading,
    error
  } = useQuery<Advertisement[]>({
    queryKey: ['ads'],
    queryFn: getAdvertisements
  })

  const { sortedAds } = useSortOption()

  const adList = () => {
    if (isLoading) {
      return <p>Yükleniyor...</p>
    }
    if (error) {
      return <p>Bir sorun oluştu.</p>
    }
    if (!ads || ads.length === 0) {
      return <p>Henüz ilan bulunmamaktadır.</p>
    }

    const data = sortedAds(ads)
    return data.map((ad, index) => (
      <Fragment key={`ad-card-${index}`}>
        {index < 6 ? <Ad data={ad} imgPriority={true} /> : <Ad data={ad} />}
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
