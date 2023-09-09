import * as yup from 'yup'

export type AddAdvertisementFormData = yup.InferType<
  typeof ADVERTISEMENT_VALIDATION_SCHEMA
>

export const ADVERTISEMENT_DEFAULT_VALUES: AddAdvertisementFormData = {
  title: '',
  image: ''
}

export const ADVERTISEMENT_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required('Title is required'),
  image: yup.string().required('Image is required')
})
