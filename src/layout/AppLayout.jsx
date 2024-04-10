import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link, useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import "./AppLayout.css"


const AppLayout = () => {
	const [keyword, setKeyword] = useState("")
	const navigate = useNavigate()

	const searchByKeyword = (event)=> {
		event.preventDefault()
		navigate(`/movies?q=${keyword}`)
		setKeyword("")
	}
	return (
		<div className="bg-dark">
			<Navbar expand="lg" >
					<Navbar.Brand href="#" >
                        <img src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI" className="netflixLogo"/></Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll>
							<Nav><Link to="/" className="text-white">Home </Link></Nav>
							<Nav><Link to="/movies" className="text-white"> Movies</Link></Nav>
						</Nav>
						<Form className="d-flex" onSubmit={searchByKeyword}>
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
								value={keyword}
								onChange={(event)=> setKeyword(event.target.value)}
								/>
							<Button variant="outline-danger">Search</Button>
						</Form>
					</Navbar.Collapse>
			</Navbar>
            <Outlet></Outlet>
		</div>
	)
}

export default AppLayout
