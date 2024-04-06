import logo from "./logo.svg"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Homepage from "./pages/Homepage/Homepage"
import Movies from "./pages/Movies/Movies"
import MovieDetail from "./pages/MovieDetail/MovieDetail"
import NotFound from "./pages/NotFound/NotFound"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

// 홈페이지
// 영화 페이지 (서치) /movies
// 영화 디테일 페이지 /movies/:id
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<AppLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path="movies">
                        <Route index element={<Movies />} />
                        <Route path=":id" element={<MovieDetail />} />
                    </Route>
                    {/* <Route path="/movies" element={<Movies />} /> //위에 2줄과 같은코드
                    <Route path="/movies/:id" element={<MovieDetail />} /> */}
                </Route>
                <Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}


export default App
