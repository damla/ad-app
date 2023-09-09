'use client'

import {
  ADVERTISEMENT_DEFAULT_VALUES,
  ADVERTISEMENT_VALIDATION_SCHEMA
} from './validation'
import { ChangeEvent, useState } from 'react'
import { set, useForm } from 'react-hook-form'

import Button from '@/components/general/button/button'
import { Icon } from '@/components/general/icon/icon'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'
import { yupResolver } from '@hookform/resolvers/yup'

const AddAdvertisementForm: React.FC = () => {
  const { showToast } = useToast()
  const router = useRouter()

  const [imageUploadLabel, setImageUploadLabel] = useState<string>('Yükle')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const formOptions = {
    resolver: yupResolver(ADVERTISEMENT_VALIDATION_SCHEMA),
    defaultValues: ADVERTISEMENT_DEFAULT_VALUES
  }

  const {
    register,
    handleSubmit,
    reset,
    formState,
    setValue,
    setError,
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
      formData.append('upload_preset', 'ad-app')

      try {
        const response = await fetch(
          'https://api.cloudinary.com/v1_1/dwqknejrz/upload/',
          {
            method: 'POST',
            body: formData
          }
        )

        const data = await response.json()
        setValue('imageUrl', data.secure_url)
        setImageUploadLabel(e.target.files[0].name)
        setIsLoading(false)
      } catch (error) {
        setError('imageUrl', { message: 'Bir hata oluştu' })
        setIsLoading(false)
      }
    }
  }

  const onSubmit = () => {
    const advertisementData = watch()
    // TODO: add advertisement to the database

    reset()
    setImageUploadLabel('Yükle')
    showToast(
      'İlan başarıyla kaydedilmiştir. Ana sayfaya yönlendiriliyorsunuz',
      'success'
    )
    router.push('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='centerAlignedItems'>
        <div className={styles.formGroup}>
          <div className={styles.titleFieldGroup}>
            <label
              htmlFor='title'
              className={classNames({
                ['requiredField']: errors.title,
                ['mMd']: !errors.title
              })}
            >
              İlan Başlığı
            </label>
            {errors.title && (
              <span className={styles.errorMessage}>
                {errors.title.message}
              </span>
            )}
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
                  ['mMd']: !errors.imageUrl
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
              {imageUploadLabel}
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
            <label htmlFor='urgent'>Acil Mi?</label>
            <input id='urgent' type='checkbox' {...register('urgent')} />
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
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </>
  )
}

export default AddAdvertisementForm
