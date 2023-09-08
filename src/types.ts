export interface Advertisement {
  id: string
  title: string
  favoriteCount: number
  urgent: boolean
  lastUpdated: Date
  image: string // Base64 encoded
}

export enum ToastActionTypes {
  SHOW_TOAST = 'SHOW_TOAST',
  HIDE_TOAST = 'HIDE_TOAST'
}
