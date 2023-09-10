import { Advertisement } from '@prisma/client'
import Card from '../card/card'
import { Fragment } from 'react'
import styles from './styles.module.scss'

interface Props {
  data: Advertisement[]
}
// TODO: Sorting algorithm will be added.
const CardList: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data.map((ad, index) => (
        <Fragment key={`ad-card-${index}`}>
          <Card data={ad} />
        </Fragment>
      ))}
    </div>
  )
}

export default CardList
