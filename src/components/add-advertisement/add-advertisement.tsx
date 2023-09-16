import { AddAdvertisementForm } from './add-advertisement-form/add-advertisement-form'
import { Breadcrumb } from '@/components/general/breadcrumb/breadcrumb'

const AddAdvertisement = () => {
  return (
    <div className='container'>
      <Breadcrumb page='yeni ilan' subtitle='ekle' />
      <AddAdvertisementForm />
    </div>
  )
}

export default AddAdvertisement
