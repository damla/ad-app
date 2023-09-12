'use client'

import { useContext, useEffect } from 'react'

import { ToastContext } from '@/context/toast.context'
import classNames from 'classnames'
import styles from './styles.module.scss'

const Toast: React.FC = () => {
  const {
    state: { display, type, message }
  } = useContext(ToastContext)

  useEffect(() => {
    if (display) {
      const header = document.querySelector('#header')
      if (header) {
        setTimeout(() => header.scrollIntoView({ behavior: 'smooth' }), 200)
      }
    }
  }, [display])

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.show]: display,
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {message}
    </div>
  )
}

export default Toast
