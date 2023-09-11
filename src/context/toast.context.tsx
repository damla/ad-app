'use client'

import React, { Dispatch, createContext, useReducer } from 'react'

import { ToastActionTypes } from '@/types'

type StateType = {
  display: boolean
  message: string
  type: 'success' | 'error'
  duration: number
}

type ActionType = {
  type: ToastActionTypes
  payload?: {
    message?: string
    toastType?: 'success' | 'error'
  }
}

const initialState: StateType = {
  display: false,
  message: '',
  type: 'success',
  duration: 5000
}

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case ToastActionTypes.SHOW_TOAST:
      return {
        ...state,
        display: true,
        message: action.payload?.message || '',
        type: action.payload?.toastType || 'success'
      }
    case ToastActionTypes.HIDE_TOAST:
      return { ...state, display: false }
    default:
      return state
  }
}

export const ToastContext = createContext<{
  state: StateType
  dispatch: Dispatch<ActionType>
}>({
  state: initialState,
  dispatch: () => null
})

interface Props {
  children: React.ReactNode
}

export const ToastProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  )
}
