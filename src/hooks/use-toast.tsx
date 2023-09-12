'use client'

import { ToastActionTypes } from '@/types'
import { ToastContext } from '@/context/toast.context'
import { useContext } from 'react'

export const useToast = () => {
  const { dispatch } = useContext(ToastContext)

  const showToast = (message: string, toastType: 'success' | 'error') => {
    dispatch({
      type: ToastActionTypes.SHOW_TOAST,
      payload: { message, toastType }
    })
    setTimeout(() => {
      dispatch({ type: ToastActionTypes.HIDE_TOAST })
    }, 3000)
  }

  return {
    showToast
  }
}
