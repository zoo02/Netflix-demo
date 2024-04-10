import React from "react"
import Badge from "react-bootstrap/Badge"
import { FaStar } from "react-icons/fa"
import "./MovieCard.css"
import { useMovieGenreQuery } from "../../hooks/useMovieGenre"

const MovieCard = ({ movie }) => {
	const { data: genreData } = useMovieGenreQuery()
    const showGenre = (genreIdList)=> {
        if (!genreData) return []
        const genreNameList = genreIdList.map((id)=>{
            const genreObj = genreData.find((genre)=>genre.id ===id)
            return genreObj.name
        })
        return genreNameList
    }

	const renderStars = () => {
		const stars = []
		const rating = Math.round(movie.vote_average / 2) // 10점 만점을 5점 만점으로 변경

		for (let i = 0; i < 5; i++) {
			if (i < rating) {
				stars.push(<FaStar key={i} color="gold" />)
			} else {
				stars.push(<FaStar key={i} color="gray" />)
			}
		}

		return stars
	}

	const renderRatingIcon = () => {
		if (movie.adult) {
			return (
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQi_mZNhKZuLFNtzOgul0w9Tk8sDB_zGXazNIVce-0g&s"
					alt="over 18"
					style={{ width: "20px", height: "20px" }}/>
			)
		} else {
			return (
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEivr9j9DAse0JRn1FsEV_-4s3_hHdDxlRAeIV-EVOQ&s"
					alt="All"
					style={{ width: "20px", height: "20px" }}/>
			)
		}
	}

	return (
		<div
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
			}}
			className="movieCard"
		>
			<div className="overLay">
				<h1>{movie.title}</h1>
				{showGenre(movie.genre_ids).map(id => (
					<Badge key={id} bg="danger">
						{id}
					</Badge>
				))}
				<div className="starRating">{renderStars()}</div>
				<div>{renderRatingIcon()}</div>
			</div>
		</div>
	)
}

export default MovieCard
