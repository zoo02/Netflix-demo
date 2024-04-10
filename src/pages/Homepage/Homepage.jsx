import React from 'react'
import Banner from './components/banner/Banner'
import PopularMovieSlide from './components/banner/popularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/banner/topRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './components/banner/upComingMovieSlide/UpcomingMovieSlide'


const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
    </div>
  )
}

export default Homepage