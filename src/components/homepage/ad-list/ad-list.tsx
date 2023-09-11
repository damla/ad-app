import Ad from '@/components/homepage/ad/ad'
import { Advertisement } from '@prisma/client'
import { Fragment } from 'react'
import prisma from '@/lib/prisma'
import styles from './styles.module.scss'

// TODO: Sorting algorithm will be added.
const AdList: React.FC = async () => {
  const advertisements: Advertisement[] = await prisma.advertisement.findMany()

  const ads = () => {
    if (!advertisements) {
      return <p>Henüz ilan bulunmamaktadır.</p>
    } else {
      return advertisements.map((ad, index) => (
        <Fragment key={`ad-card-${index}`}>
          <Ad data={ad} />
        </Fragment>
      ))
    }
  }

  return <div className={styles.wrapper}>{ads()}</div>
}

export default AdList
