import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// const fetchMovieDetail = ({id}) => {
//     api.get(`/movie/${id}`)
// }

const fetchMovieDetail = ({id}) => {
    return api.get(`/movie/${id}`)
               .then(response => {
                   console.log(response.data);
                   return response.data;
               })
               .catch(error => {
                   console.error("Error fetching movie detail:", error);
                   throw error;
               });
}

const useMovieDetail = ({id}) => {
    return useQuery({
        queryKey: ['movie-detail', {id}],
        queryFn: () => fetchMovieDetail({id}) 
})
}

export default useMovieDetail