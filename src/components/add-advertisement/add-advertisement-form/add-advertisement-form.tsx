'use client'

import {
  ADVERTISEMENT_DEFAULT_VALUES,
  ADVERTISEMENT_VALIDATION_SCHEMA
} from './validation'

import type { AddAdvertisementFormData } from './validation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const AddAdvertisementForm: React.FC = () => {
  const formOptions = {
    resolver: yupResolver(ADVERTISEMENT_VALIDATION_SCHEMA),
    defaultValues: ADVERTISEMENT_DEFAULT_VALUES
  }

  const { register, handleSubmit, reset, formState, watch } =
    useForm(formOptions)

  const { errors } = formState

  function onSubmit(data: AddAdvertisementFormData) {
    alert('SUCCESS!!\n' + JSON.stringify(data, null, 4))
    return false
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
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
          {errors.image && <p>{errors.image.message}</p>}
          <label htmlFor='title'>Your image</label>
          <input
            type='name'
            id='image'
            placeholder='Your image'
            {...register('image')}
          />
        </div>
        <br />
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
