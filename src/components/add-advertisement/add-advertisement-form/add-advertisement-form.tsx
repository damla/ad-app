'use client'

import {
  ADVERTISEMENT_DEFAULT_VALUES,
  ADVERTISEMENT_VALIDATION_SCHEMA
} from './validation'
import { ChangeEvent, useState } from 'react'
import { checkFile, uploadToCloudinary } from '@/utils/helpers'

import { Button } from '@/components/general/button/button'
import Icon from '@/components/general/icon/icon'
import { Skeleton } from '@/components/general/skeleton/skeleton'
import { addAdvertisements } from '@/lib/query-service'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useQueryClientInstance } from '@/context/query-client.context'
// Because of using App dir, we need to use next/navigation instead of next/router
// See: https://nextjs.org/docs/messages/next-router-not-mounted
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'
import { yupResolver } from '@hookform/resolvers/yup'

export const AddAdvertisementForm = () => {
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

  const { queryClient } = useQueryClientInstance()

  const { isLoading: dataIsLoading, mutate } = useMutation({
    mutationFn: addAdvertisements,
    onSuccess: () => {
      showToast(
        'İlan başarıyla kaydedilmiştir. Ana sayfaya yönlendiriliyorsunuz',
        'success'
      )
      queryClient.invalidateQueries({ queryKey: ['ads'] })
    },
    onError: () => {
      showToast('İlan eklenirken bir sorun oluştu.', 'error')
    }
  })

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)

    const file = e.target?.files?.[0]
    const fileCheckResult = checkFile(file)

    if (!fileCheckResult.file) {
      setError('imageUrl', { message: fileCheckResult.error })
      setIsLoading(false)
      return
    }

    try {
      const data = await uploadToCloudinary(fileCheckResult.file)
      setValue('imageUrl', data.secure_url)
      setImageUploadLabel(fileCheckResult.file.name)
      clearErrors('imageUrl')
    } catch (error) {
      setError('imageUrl', { message: 'Bir hata oluştu' })
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async () => {
    mutate(
      { ...watch() },
      {
        onSuccess: () => {
          setImageUploadLabel('Yükle')
          router.push('/')
        }
      }
    )
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
            className={classNames(styles.imageUploadButton, 'button', {
              [styles.disabled]: isLoading
            })}
          >
            {isLoading ? (
              <Icon name='Spinner' size={24} />
            ) : (
              <>
                <Icon name='ImageIcon' size={18} />
                <span className={styles.imageUploadLabel}>
                  {imageUploadLabel}
                </span>
              </>
            )}
          </label>
          <input
            type='file'
            id='imageUrl'
            name='imageUrl'
            style={{ display: 'none' }}
            accept='image/png, image/jpeg'
            onChange={handleFileChange}
            disabled={isLoading}
          />
        </div>
        <div className={styles.urgentFieldGroup}>
          <label htmlFor='isUrgent'>Acil Mi?</label>
          <input id='isUrgent' type='checkbox' {...register('isUrgent')} />
        </div>
        <Button
          type='submit'
          disabled={isLoading || dataIsLoading}
          className={styles.submitButton}
        >
          {isLoading ? <Icon name='Spinner' size={16} /> : 'KAYDET'}
        </Button>
      </div>
    </form>
  )
}

export const AddAdvertisementFormSkeleton = () => {
  return (
    <div className='centerAlignedItems ptXl'>
      <div className={classNames(styles.wrapper, 'pl2xl')}>
        <div className={styles.titleFieldGroupSkeleton}>
          <Skeleton />
          <Skeleton />
        </div>
        <div className={styles.imageFieldGroupSkeleton}>
          <Skeleton />
          <Skeleton />
        </div>
        <div className={styles.urgentFieldGroupSkeleton}>
          <Skeleton />
          <Skeleton />
        </div>
        <Skeleton className={styles.submitButtonSkeleton} />
      </div>
    </div>
  )
}
