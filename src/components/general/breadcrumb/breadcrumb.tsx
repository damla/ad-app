import styles from './styles.module.scss'

interface Props {
  page: string
  subtitle: string
  children?: React.ReactNode
}

export const Breadcrumb: React.FC<Props> = ({ page, subtitle, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h5>{page.toLocaleUpperCase('tr')}</h5>
        <span>{subtitle.toLocaleUpperCase('tr')}</span>
      </div>
      {children}
      <div className={styles.divider} />
    </div>
  )
}
