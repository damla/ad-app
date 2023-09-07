import Breadcrumb from '../general/breadcrumb/breadcrumb'
import ListingDropdown from './listing-dropdown/listing-dropdown'
import styles from './styles.module.scss'

const HomePage: React.FC = () => {
  return (
    <div className='container'>
      <Breadcrumb page='ana sayfa' subtitle='vitrini'>
        <ListingDropdown />
      </Breadcrumb>
      ...
    </div>
  )
}

export default HomePage
