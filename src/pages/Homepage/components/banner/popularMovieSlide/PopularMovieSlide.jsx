import React from "react"
import { usePopularMoviesQuery } from "../../../../../hooks/usePopularMovies"
import { Alert } from "react-bootstrap"
import "react-multi-carousel/lib/styles.css"
import MovieSlider from "../../../../../common/MovieSlider/MovieSlider"
import {responsive} from "../../../../../constants/responsive"


const PopularMovieSlide = () => {
	const { data, isLoading, isError, error } = usePopularMoviesQuery()
	if (isLoading) {
		return <h1>Loading...</h1>
	}
	if (isError) {
		return <Alert variant="danger">{error.message}</Alert>
	}
	return (
		<div>
            <MovieSlider 
			title='Popular Movies' 
			movies={data.results} 
			responsive={responsive}/>
		</div>
	)
}

export default PopularMovieSlide
