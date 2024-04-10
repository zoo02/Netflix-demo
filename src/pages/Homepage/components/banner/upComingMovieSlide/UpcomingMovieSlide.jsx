import React from "react"
import { useUpcomingMovies } from "../../../../../hooks/useUpcomingMovies"
import { Alert } from "react-bootstrap"
import "react-multi-carousel/lib/styles.css"
import MovieSlider from "../../../../../common/MovieSlider/MovieSlider"
import {responsive} from "../../../../../constants/responsive"

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMovies()
  if (isLoading) {
    return <h1>Loading...</h1>
}
if (isError) {
    return <Alert variant="danger">{error.message}</Alert>
}
  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  )
}
export default UpcomingMovieSlide