'use client'

import Ad from '@/components/homepage/ad/ad'
import { Advertisement } from '@prisma/client'
import { Fragment } from 'react'
import styles from './styles.module.scss'
import { useSortOption } from '@/hooks/use-sort-option'

interface Props {
  ads: Advertisement[]
}

const AdList: React.FC<Props> = ({ ads }) => {
  const { sortedAds } = useSortOption()
  const data = sortedAds(ads)

  const adList = () => {
    if (data.length === 0 || !data) {
      return <p>Henüz ilan bulunmamaktadır.</p>
    }
    return data.map((ad, index) => (
      <Fragment key={`ad-card-${index}`}>
        {index > 5 ? (
          <Ad data={ad} imgPriority={data.length > 6} />
        ) : (
          <Ad data={ad} imgPriority={false} />
        )}
      </Fragment>
    ))
  }
  return <div className={styles.wrapper}>{adList()}</div>
}
export default AdList
