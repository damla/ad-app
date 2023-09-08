import Breadcrumb from '../general/breadcrumb/breadcrumb'
import Card from './card/card'
import CardList from './card-list/card-list'
import ListingDropdown from './listing-dropdown/listing-dropdown'

const HomePage: React.FC = () => {
  return (
    <div className='container'>
      <Breadcrumb page='ana sayfa' subtitle='vitrini'>
        <ListingDropdown />
      </Breadcrumb>
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </div>
  )
}

export default HomePage
