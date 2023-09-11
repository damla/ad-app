import AdList from './ad-list/ad-list'
import Breadcrumb from '@/components/general/breadcrumb/breadcrumb'
import ListingDropdown from './listing-dropdown/listing-dropdown'
import { getAdvertisements } from '@/lib/advertisement-service'

const HomePage: React.FC = async () => {
  const ads = await getAdvertisements()
  return (
    <div className='container'>
      <Breadcrumb page='ana sayfa' subtitle='vitrini'>
        <ListingDropdown />
      </Breadcrumb>
      <AdList data={ads} />
    </div>
  )
}

export default HomePage
