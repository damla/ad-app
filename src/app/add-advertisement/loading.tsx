import { AddAdvertisementFormSkeleton } from '@/components/add-advertisement/add-advertisement-form/add-advertisement-form'
import { BreadcrumbSkeleton } from '@/components/general/breadcrumb/breadcrumb'
import { NextPage } from 'next'

const Loading: NextPage = () => {
  return (
    <div className='container'>
      <BreadcrumbSkeleton />
      <AddAdvertisementFormSkeleton />
    </div>
  )
}

export default Loading
