import Ad from '@/components/homepage/ad/ad'
import { Advertisement } from '@prisma/client'
import { Fragment } from 'react'
import styles from './styles.module.scss'

const getAdvertisement = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/advertisements', {
      cache: 'no-cache'
    })
    if (!res.ok) {
      throw new Error('Failed to fetch advertisements.')
    }
    return res.json()
  } catch (error) {
    console.log('error loading advertisements: ', error)
  }
}

// TODO: Sorting algorithm will be added.
const AdList: React.FC = async () => {
  const data: Advertisement[] = await getAdvertisement()

  const ads = () => {
    if (data.length === 0 || !data) {
      return <p>Henüz ilan bulunmamaktadır.</p>
    } else {
      return data.map((ad, index) => (
        <Fragment key={`ad-card-${index}`}>
          <Ad data={ad} />
        </Fragment>
      ))
    }
  }

  return <div className={styles.wrapper}>{ads()}</div>
}

export default AdList
