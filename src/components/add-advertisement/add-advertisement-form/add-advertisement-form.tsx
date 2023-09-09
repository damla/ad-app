'use client'

import {
  ADVERTISEMENT_DEFAULT_VALUES,
  ADVERTISEMENT_VALIDATION_SCHEMA
} from './validation'

import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const AddAdvertisementForm: React.FC = () => {
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
    watch,
    getValues
  } = useForm(formOptions)

  const { errors } = formState

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]

      // Check if file size exceeds 5MB
      if (file.size > 5 * 1024 * 1024) {
        setError('imageUrl', { message: "Görsel boyutu 5MB'dan büyük olamaz." })
        return
      }

      // Check for accepted MIME types
      if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
        setError('imageUrl', {
          message: 'Lütfen png veya jpeg formatında görsel yükleyiniz.'
        })
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
      } catch (error) {
        console.error(error)
      }
    }
  }

  const onSubmit = () => {
    const advertisementData = watch()
    // addToLocalStorage(advertisementData)

    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {errors.title && <p>{errors.title.message}</p>}
          <label htmlFor='title'>Your title</label>
          <input
            type='text'
            id='title'
            placeholder='Your title'
            {...register('title')}
          />
        </div>

        <div>
          {errors.imageUrl && <p>{errors.imageUrl.message}</p>}
          <label htmlFor='imageUrl'>Upload Image</label>
          <input
            type='file'
            id='imageUrl'
            name='imageUrl'
            accept='image/png, image/jpeg'
            onChange={handleFileChange}
          />
        </div>
        <div>
          <input
            id='urgent'
            type='checkbox'
            checked={getValues('urgent')}
            {...register('urgent')}
          />
          <label htmlFor='urgent'>Urgent</label>
        </div>

        <button type='submit'>Submit</button>
        <button type='button' onClick={() => reset()}>
          Reset
        </button>
      </form>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </div>
  )
}

export default AddAdvertisementForm
