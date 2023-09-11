import Ad from '@/components/homepage/ad/ad'
import { Advertisement } from '@prisma/client'
import { Fragment } from 'react'
import styles from './styles.module.scss'

interface Props {
  data: Advertisement[]
}

// TODO: Sorting algorithm will be added.
const AdList: React.FC<Props> = ({ data }) => {
  const ads = () => {
    if (data.length === 0 || !data) {
      return <p>Henüz ilan bulunmamaktadır.</p>
    }
    return data.map((ad, index) => (
      <Fragment key={`ad-card-${index}`}>
        <Ad data={ad} />
      </Fragment>
    ))
  }
  return <div className={styles.wrapper}>{ads()}</div>
}
export default AdList
