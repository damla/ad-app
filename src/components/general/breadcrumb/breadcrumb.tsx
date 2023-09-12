import { Skeleton } from "@/components/general/skeleton/skeleton"
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

export const BreadcrumbSkeleton: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSkeleton}>
        <Skeleton className={styles.titleSkeleton} />
      </div>
      <Skeleton className={styles.buttonSkeleton} />
      <div className={styles.divider} />
    </div>
  )
}
