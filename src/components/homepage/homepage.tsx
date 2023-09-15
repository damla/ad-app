import { AdList } from './ad-list/ad-list'
import { Breadcrumb } from '@/components/general/breadcrumb/breadcrumb'
import ListingDropdown from './listing-dropdown/listing-dropdown'
import { ReactQueryHydrate } from '../hydrate'
import { dehydrate } from '@tanstack/react-query'
import { getAdvertisements } from '@/lib/query-service'
import getQueryClient from '@/lib/getQueryClient'

const HomePage = async () => {
  const queryClient = getQueryClient()
  const dehydratedState = dehydrate(queryClient)

  return (
    <div className='container'>
      <Breadcrumb page='ana sayfa' subtitle='vitrini'>
        <ListingDropdown />
      </Breadcrumb>
      <ReactQueryHydrate state={dehydratedState}>
        <AdList />
      </ReactQueryHydrate>
    </div>
  )
}

export default HomePage
