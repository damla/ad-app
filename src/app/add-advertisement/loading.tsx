import { AddAdvertisementFormSkeleton } from '@/components/add-advertisement/add-advertisement-form/add-advertisement-form'
import { BreadcrumbSkeleton } from '@/components/general/breadcrumb/breadcrumb'

const Loading = () => {
  return (
    <div className='container'>
      <BreadcrumbSkeleton />
      <AddAdvertisementFormSkeleton />
    </div>
  )
}

export default Loading
