'use client'

import Ad from '@/components/homepage/ad/ad'
import { Advertisement } from '@prisma/client'
import { Fragment } from 'react'
import { sortAds } from '@/utils/helpers'
import styles from './styles.module.scss'
import { useSortOption } from '@/context/sort-option.context'

interface Props {
  data: Advertisement[]
}

// TODO: Sorting algorithm will be added.
const AdList: React.FC<Props> = ({ data }) => {
  const { sortOption } = useSortOption()
  let sortedAds = data

  if (sortOption) {
    sortedAds = sortAds(data, sortOption)
  }

  const ads = () => {
    if (data.length === 0 || !data) {
      return <p>Henüz ilan bulunmamaktadır.</p>
    }
    return sortedAds.map((ad, index) => (
      <Fragment key={`ad-card-${index}`}>
        <Ad data={ad} />
      </Fragment>
    ))
  }
  return <div className={styles.wrapper}>{ads()}</div>
}
export default AdList
