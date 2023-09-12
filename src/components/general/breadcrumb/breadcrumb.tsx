import { Skeleton } from '@/components/general/skeleton/skeleton'
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

interface BreadcrumbSkeletonProps {
  children?: React.ReactNode
}

export const BreadcrumbSkeleton: React.FC<BreadcrumbSkeletonProps> = ({
  children
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSkeleton}>
        <Skeleton className={styles.titleSkeleton} />
      </div>
      {children}
      <div className={styles.divider} />
    </div>
  )
}

export const ButtonSkeleton: React.FC = () => {
  return <Skeleton className={styles.buttonSkeleton} />
}
