import * as yup from 'yup'

export type AddAdvertisementFormData = yup.InferType<
  typeof ADVERTISEMENT_VALIDATION_SCHEMA
>

export const ADVERTISEMENT_DEFAULT_VALUES: AddAdvertisementFormData = {
  title: '',
  urgent: false,
  imageUrl: ''
}

export const ADVERTISEMENT_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required('Lütfen bir başlık giriniz'),
  urgent: yup.boolean().required('Lütfen aciliyet durumunu seçiniz'),
  imageUrl: yup.string().required('Lütfen bir görsel yükleyiniz')
})
