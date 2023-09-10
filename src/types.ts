export interface Advertisement {
  id: string
  title: string
  favoriteCount: number
  isUrgent: boolean
  imageUrl: string
  lastUpdated: Date
}

export enum ToastActionTypes {
  SHOW_TOAST = 'SHOW_TOAST',
  HIDE_TOAST = 'HIDE_TOAST'
}
