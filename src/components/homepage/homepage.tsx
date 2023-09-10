import AdList from './ad-list/ad-list'
import Breadcrumb from '../general/breadcrumb/breadcrumb'
import ListingDropdown from './listing-dropdown/listing-dropdown'
import { Suspense } from 'react'

const HomePage: React.FC = async () => {
  return (
    <div className='container'>
      <Breadcrumb page='ana sayfa' subtitle='vitrini'>
        <ListingDropdown />
      </Breadcrumb>
      <Suspense fallback={<p>Yükleniyor...</p>}>
        <AdList />
      </Suspense>
    </div>
  )
}

export default HomePage
