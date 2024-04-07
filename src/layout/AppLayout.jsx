import React from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Outlet } from "react-router-dom"
import "./AppLayout.css"

const AppLayout = () => {
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
							<Nav.Link href="#action1" className="text-white">Home</Nav.Link>
							<Nav.Link href="#action2" className="text-white">Movies</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"/>
							<Button variant="outline-danger">Search</Button>
						</Form>
					</Navbar.Collapse>
			</Navbar>
            <Outlet></Outlet>
		</div>
	)
}

export default AppLayout
