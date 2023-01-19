import React from 'react'
import Slider from '../components/Slider'
import FeaturedProducts from '../components/FeaturedProducts'
import Categories from '../components/Categories'
import './Home.scss'

const Home = () => {
  
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type='Featured' />
      <Categories />
      <FeaturedProducts type='Trending'/>
    </div>
  )
}

export default Home