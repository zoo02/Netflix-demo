import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useMovieDetail from "../../hooks/useMovieDetail"
import Spinner from "react-bootstrap/Spinner"
import Alert from "react-bootstrap/Alert"
import MovieCard from "../../common/movieCard/MovieCard"
import Badge from "react-bootstrap/Badge"
import { FaStar } from "react-icons/fa"
import { useMovieGenreQuery } from "../../hooks/useMovieGenre"
import api from "../../utils/api"
import { Container, Row, Col } from "react-bootstrap"

const MovieDetail = ({ movie }) => {
	const { id } = useParams()
	const { data: genreData } = useMovieGenreQuery()
	const [reviews, setReviews] = useState([])
	const [isLoadingReviews, setIsLoadingReviews] = useState(false)
	const [errorReviews, setErrorReviews] = useState(null)

	useEffect(() => {
		const fetchReviews = async () => {
			setIsLoadingReviews(true)
			try {
				const response = await api.get(`/movie/${id}/reviews`)
				setReviews(response.data.results)
			} catch (error) {
				setErrorReviews(error)
			}
			setIsLoadingReviews(false)
		}

		fetchReviews()
	}, [id])

	const showGenre = genreIdList => {
		if (!genreData) return []
		const genreNameList = genreIdList.map(id => {
			const genreObj = genreData.find(genre => genre.id === id)
			return genreObj.name
		})
		return genreNameList
	}

	const renderStars = voteAverage => {
		const stars = []
		const rating = Math.round(voteAverage / 2)

		for (let i = 0; i < 5; i++) {
			if (i < rating) {
				stars.push(<FaStar key={i} color="gold" />)
			} else {
				stars.push(<FaStar key={i} color="gray" />)
			}
		}
		return stars
	}

	const renderRatingIcon = adult => {
		if (adult) {
			return (
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQi_mZNhKZuLFNtzOgul0w9Tk8sDB_zGXazNIVce-0g&s"
					alt="over 18"
					style={{ width: "20px", height: "20px" }}
				/>
			)
		} else {
			return (
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEivr9j9DAse0JRn1FsEV_-4s3_hHdDxlRAeIV-EVOQ&s"
					alt="All"
					style={{ width: "20px", height: "20px" }}
				/>
			)
		}
	}

	const { data, isLoading, isError, error } = useMovieDetail({ id })
	if (isLoading) {
		return <Spinner animation="border" variant="primary" />
	}
	if (isError) {
		return <Alert variant="danger">{error.message}</Alert>
	}

	return (
		<Container className="movieDetail">
			<Row>
				<Col style={{ marginBottom: 30, borderRadius: 30, height:600, width: 500 }}>
					{data.poster_path && (
						<img
							style={{ borderRadius: 30, height: "100%", width:"100%" }}
							src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
						/>
					)}
				</Col>

				<Col style={{ margin: 30 }}>
					<h1>{data.title}</h1>
					{showGenre}
					{renderStars()}
					{renderRatingIcon()}
				</Col>

				<h2>Reviews</h2>
				<ul>
					{reviews.map(review => (
						<li key={review.id}>
							<p>{review.content}</p>
							<p>By: {review.author}</p>
						</li>
					))}
				</ul>
			</Row>
		</Container>
	)
}

export default MovieDetail
