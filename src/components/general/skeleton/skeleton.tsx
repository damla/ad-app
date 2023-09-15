import classNames from 'classnames'
import styles from './styles.module.scss'

interface Props {
  className?: string
}

export const Skeleton = ({ className }: Props) => {
  return <div className={classNames(styles.skeleton, className)} />
}
