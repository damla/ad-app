import HomePage from '@/components/homepage/homepage'
import { NextPage } from 'next'

export const dynamic = 'force-dynamic'

const Home: NextPage = () => {
  return <HomePage />
}

export default Home
