'use client'

import { ToastContext } from '@/context/toast.context'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { useContext } from 'react'

const Toast: React.FC = () => {
  const { state } = useContext(ToastContext)

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.show]: state.display,
        [styles.success]: state.type === 'success',
        [styles.error]: state.type === 'error'
      })}
    >
      {state.message}
    </div>
  )
}

export default Toast
