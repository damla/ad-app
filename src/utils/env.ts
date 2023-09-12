export const isProduction = process.env.NEXT_PUBLIC_PROJECT_ENV === 'production'

export const isDevelopment =
  process.env.NEXT_PUBLIC_PROJECT_ENV === 'development'

export const url = new URL(
  process.env.NEXT_PUBLIC_PROJECT_HTTP_URL ?? 'http://localhost:3000'
)

export const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME || ''
export const UPLOAD_PRESET = process.env.NEXT_PUBLIC_UPLOAD_PRESET || ''
