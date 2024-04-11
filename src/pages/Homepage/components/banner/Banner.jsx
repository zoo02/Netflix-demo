import React from "react"
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies"
import Spinner from "react-bootstrap/Spinner"
import Alert from "react-bootstrap/Alert"
import "./Banner.style.css"

const Banner = () => {
	const { data, isLoading, isError, error } = usePopularMoviesQuery()
	if (isLoading) {
		return(
		<h1>
			Loading...
		</h1>
	)}
	if (isError) {
        return(
		<Alert variant="danger">{error.message}</Alert>
	)}
	return (
		<div
			style={{
				backgroundImage:
					"url(" +
					`https://media.themoviedb.org/t/p/w1920_and_h600_bestv2${data.results[0].poster_path}` +
					")",
			}}
			className="banner">
			<div className="text-white banner-text-area" >
				<h1 style={{color: "black"}}>{data?.results[0].title}</h1>
				<p style={{color: "black"}}>{data?.results[0].overview}</p>
			</div>
		</div>
	)
}

export default Banner
