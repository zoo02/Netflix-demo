import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieGenre = (language) => {
  return api.get(`genre/movie/list?language=${language}`)
}

export const useMovieGenreQuery = (language = "en") => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: () => fetchMovieGenre(language),
    select: (result) => result.data.genres,
    staleTime: 300000, //5분
  })
}