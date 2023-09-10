import AddAdvertisementForm from './add-advertisement-form/add-advertisement-form'
import Breadcrumb from '@/components/general/breadcrumb/breadcrumb'
import styles from './styles.module.scss'

const AddAdvertisement: React.FC = () => {
  return (
    <div className='container'>
      <Breadcrumb page='yeni ilan' subtitle='ekle' />
      <AddAdvertisementForm />
    </div>
  )
}

export default AddAdvertisement
