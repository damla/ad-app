import classNames from 'classnames'
import { iconNameMap } from './icons'
import styles from './styles.module.scss'

export type IconName = keyof typeof iconNameMap

interface Props {
  name: IconName
  size?: number
  className?: string
}

export function Icon({ name, size, className }: Props) {
  const Component = iconNameMap[name]

  return (
    <span
      className={classNames(styles.icon, className)}
      style={{ fontSize: size }}
    >
      <Component />
    </span>
  )
}
