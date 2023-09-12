import {
  BreadcrumbSkeleton,
  ButtonSkeleton
} from '@/components/general/breadcrumb/breadcrumb'

import { AdListSkeleton } from '@/components/homepage/ad-list/ad-list'
import { AdSkeleton } from '@/components/homepage/ad/ad'
import { NextPage } from 'next'

const Loading: NextPage = () => {
  return (
    <div className='container'>
      <BreadcrumbSkeleton>
        <ButtonSkeleton />
      </BreadcrumbSkeleton>
      <AdListSkeleton>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <AdSkeleton key={index} />
          ))}
      </AdListSkeleton>
    </div>
  )
}

export default Loading
