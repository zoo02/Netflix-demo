import React, { useEffect, useState } from "react"
import { useSearchMoviesQuery } from "../../hooks/useSearchMovies"
import { useSearchParams } from "react-router-dom"
import { Alert, Col, Container, Row, Spinner, Button } from "react-bootstrap"
import MovieCard from "../../common/movieCard/MovieCard"
import ReactPaginate from "react-paginate"
import { useMovieGenreQuery } from "../../hooks/useMovieGenre"

const Movies = () => {
	const [query, setQuery] = useSearchParams()
	const [page, setPage] = useState(1)
	const keyword = query.get("q")
	const { data, isLoading, isError, error } = useSearchMoviesQuery({ keyword, page })
	const { data: genre } = useMovieGenreQuery()
	const [sortType, setSortType] = useState(null)

	const handlePageClick = ({ selected }) => {
		setPage(selected + 1)
	}

	const handleSortPopularRank = () => {
		setSortType("popular")
	}

	const handleSortRecentRank = () => {
		setSortType("recent")
	}

	useEffect(() => {
		setPage(1)
	}, [keyword])

	useEffect(() => {
		setPage(1)
	}, [page])

	useEffect(() => {
		setPage(1)
	}, [setQuery])

	const sortedData = () => {
		if (sortType === "popular") {
			return [...data?.results].sort((a, b) => b.popularity - a.popularity)
		} else if (sortType === "recent") {
			return [...data?.results].sort(
				(a, b) => new Date(b.release_date) - new Date(a.release_date)
			)
		} else {
			return data?.results
		}
	}

	if (isLoading) {
		return (
			<div className="spinner-area">
				<Spinner
					animation="border"
					variant="danger"
					style={{ width: "5rem", height: "5rem" }}
				/>
			</div>
		)
	}

	if (isError) {
		return <Alert variant="danger">{error.message}</Alert>
	}

	return (
		<div>
			<Row>
				<Col lg={4} xs={12} className="d-flex justify-content-center">
					<div className="SortButton">
						<Button
							className="m-1"
							variant={sortType === "popular" ? "danger" : "secondary"}
							onClick={handleSortPopularRank}
						>
							인기순
						</Button>
						<Button
							className="m-1"
							variant={sortType === "recent" ? "danger" : "secondary"}
							onClick={handleSortRecentRank}
						>
							최신순
						</Button>
					</div>
				</Col>
				<Col lg={8} xs={12}>
					<Row>
						{sortedData()?.map((movie, index) => (
							<Col key={index} lg={4} xs={12}>
								<MovieCard movie={movie} />
							</Col>
						))}
					</Row>
					<ReactPaginate
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						marginPagesDisplayed={2}
						pageCount={data?.total_pages}
						previousLabel="< previous"
						pageClassName="page-item"
						pageLinkClassName="page-link"
						previousClassName="page-item"
						previousLinkClassName="page-link"
						nextClassName="page-item"
						nextLinkClassName="page-link"
						breakLabel="..."
						breakClassName="page-item"
						breakLinkClassName="page-link"
						containerClassName="pagination"
						activeClassName="active"
						renderOnZeroPageCount={null}
						forcePage={page - 1}
					/>
				</Col>
			</Row>
		</div>
	)
}

export default Movies
