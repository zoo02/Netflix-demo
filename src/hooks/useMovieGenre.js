import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieGenre = () => {
  return api.get(`genre/movie/list`)
}

export const useMovieGenreQuery = (language) => {
  return useQuery({
    queryKey: ["movie-genre", language],
    queryFn: () => fetchMovieGenre(language),
    select: (result) => result.data.genres,
    staleTime: 300000, //5분
  })
}