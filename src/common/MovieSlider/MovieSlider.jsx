import React from "react"
import "./MovieSlider.style.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel"
import MovieCard from "../movieCard/MovieCard"


const MovieSlider = ({title,movies, responsive}) => {
	return (
		<div className="sliderContainer">
			<h1 className="sliderTitle">{title}</h1>
			<Carousel
				infinite={true}
				centerMode={true}
				itemClass="movie-slider p-1"
				containerClass="carousel-container"
				responsive={responsive}>
				{movies.map((movie, index) => (
				<MovieCard movie={movie} key={index} />
				))}
			</Carousel>
		</div>
	)
}

export default MovieSlider
