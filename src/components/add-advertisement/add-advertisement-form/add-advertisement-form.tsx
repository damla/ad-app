'use client'

import {
  ADVERTISEMENT_DEFAULT_VALUES,
  ADVERTISEMENT_VALIDATION_SCHEMA
} from './validation'
import { ChangeEvent, useState } from 'react'

import Button from '@/components/general/button/button'
import { Icon } from '@/components/general/icon/icon'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'
import { yupResolver } from '@hookform/resolvers/yup'

const cloudinaryInfo = {
  CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUD_NAME || '',
  UPLOAD_PRESET: process.env.NEXT_PUBLIC_UPLOAD_PRESET || ''
}

const AddAdvertisementForm: React.FC = () => {
  const [imageUploadLabel, setImageUploadLabel] = useState<string>('Yükle')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const formOptions = {
    resolver: yupResolver(ADVERTISEMENT_VALIDATION_SCHEMA),
    defaultValues: ADVERTISEMENT_DEFAULT_VALUES
  }

  const { showToast } = useToast()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState,
    setValue,
    setError,
    clearErrors,
    watch
  } = useForm(formOptions)
  const { errors } = formState

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]

      // Check if file size exceeds 5MB
      if (file.size > 5 * 1024 * 1024) {
        setError('imageUrl', { message: "Görsel boyutu 5MB'dan büyük olamaz" })
        setIsLoading(false)
        return
      }

      // Check for accepted MIME types
      if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
        setError('imageUrl', {
          message: 'Lütfen png veya jpeg formatında görsel yükleyiniz'
        })
        setIsLoading(false)
        return
      }

      const formData = new FormData()
      formData.append('file', e.target.files[0])
      formData.append('upload_preset', cloudinaryInfo.UPLOAD_PRESET)

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudinaryInfo.CLOUD_NAME}/upload/`,
          {
            method: 'POST',
            body: formData
          }
        )
        const data = await response.json()

        setValue('imageUrl', data.secure_url)
        setImageUploadLabel(e.target.files[0].name)
        clearErrors('imageUrl')
      } catch (error) {
        setError('imageUrl', { message: 'Bir hata oluştu' })
      } finally {
        setIsLoading(false)
      }
    }
  }

  const onSubmit = async () => {
    const response = await fetch('/api/advertisements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...watch() })
    })

    if (response.ok) {
      router.refresh()
      router.push('/')
    } else {
      const error = await response.text()
      showToast(error, 'error')
      reset()
    }

    reset()
    setImageUploadLabel('Yükle')
    showToast(
      'İlan başarıyla kaydedilmiştir. Ana sayfaya yönlendiriliyorsunuz',
      'success'
    )
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='centerAlignedItems ptXl'>
      <div className={styles.wrapper}>
        <div className={styles.titleFieldGroup}>
          <div className={styles.titleLabel}>
            <label
              htmlFor='title'
              className={classNames({
                ['requiredField']: errors.title,
                ['mlMd']: !errors.title
              })}
            >
              İlan Başlığı
            </label>
            {errors.title && (
              <span className={styles.errorMessage}>
                {errors.title.message}
              </span>
            )}
          </div>
          <input
            type='text'
            id='title'
            placeholder='örnek başlık'
            className={styles.titleInput}
            {...register('title')}
          />
        </div>
        <div className={styles.imageFieldGroup}>
          <div className={styles.imageLabel}>
            <span
              className={classNames({
                ['requiredField']: errors.imageUrl,
                ['mlMd']: !errors.imageUrl
              })}
            >
              İlan Kapak Görseli
            </span>
            {errors.imageUrl && (
              <span className={styles.errorMessage}>
                {errors.imageUrl.message}
              </span>
            )}
          </div>
          <label
            htmlFor='imageUrl'
            className={classNames(styles.imageUploadButton, 'button')}
          >
            <Icon name='ImageIcon' size={18} />
            <span className={styles.imageUploadLabel}>{imageUploadLabel}</span>
          </label>
          <input
            type='file'
            id='imageUrl'
            name='imageUrl'
            style={{ display: 'none' }}
            accept='image/png, image/jpeg'
            onChange={handleFileChange}
          />
        </div>
        <div className={styles.urgentFieldGroup}>
          <label htmlFor='isUrgent'>Acil Mi?</label>
          <input id='isUrgent' type='checkbox' {...register('isUrgent')} />
        </div>
        <Button
          type='submit'
          disabled={isLoading}
          className={styles.submitButton}
        >
          KAYDET
        </Button>
      </div>
    </form>
  )
}

export default AddAdvertisementForm
