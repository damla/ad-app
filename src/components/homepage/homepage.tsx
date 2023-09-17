import { AdList } from './ad-list/ad-list'
import { Breadcrumb } from '@/components/general/breadcrumb/breadcrumb'
import ListingDropdown from './listing-dropdown/listing-dropdown'
import { getAdvertisements } from '@/lib/advertisement-service'

const HomePage = async () => {
  const data = await getAdvertisements()

  return (
    <div className='container'>
      <Breadcrumb page='ana sayfa' subtitle='vitrini'>
        <ListingDropdown />
      </Breadcrumb>
      <AdList ads={data} />
    </div>
  )
}

export default HomePage
