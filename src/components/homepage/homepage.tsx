import { Advertisement } from '@prisma/client'
import Breadcrumb from '../general/breadcrumb/breadcrumb'
import CardList from './card-list/card-list'
import ListingDropdown from './listing-dropdown/listing-dropdown'
import { url } from '@/utils/env'

async function getAds() {
  const res = await fetch(`${url}/api/advertisements`)

  if (!res.ok) {
    throw new Error('Failed to fetch ads')
  }

  return res.json()
}

const HomePage: React.FC = async () => {
  const ads: Advertisement[] = await getAds()

  return (
    <div className='container'>
      <Breadcrumb page='ana sayfa' subtitle='vitrini'>
        <ListingDropdown />
      </Breadcrumb>
      {ads.length === 0 || !ads ? (
        <p>Henüz ilan bulunmamaktadır.</p>
      ) : (
        <CardList data={ads} />
      )}
    </div>
  )
}

export default HomePage
