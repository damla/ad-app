import AdList from './ad-list/ad-list'
import Breadcrumb from '../general/breadcrumb/breadcrumb'
import ListingDropdown from './listing-dropdown/listing-dropdown'

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

const HomePage: React.FC = () => {
  return (
    <div className='container'>
      <Breadcrumb page='ana sayfa' subtitle='vitrini'>
        <ListingDropdown />
      </Breadcrumb>
      <AdList />
    </div>
  )
}

export default HomePage
