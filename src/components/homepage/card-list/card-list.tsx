import styles from './styles.module.scss'

interface Props {
  children: React.ReactNode
}

const CardList: React.FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default CardList
