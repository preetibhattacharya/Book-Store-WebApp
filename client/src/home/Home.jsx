import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'
import Banner2 from '../components/Banner2'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FavouriteBooks/>
      <Banner2/>
      <PromoBanner/>
      <OtherBooks/>
    </div>
  )
}

export default Home
