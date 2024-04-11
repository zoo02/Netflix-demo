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

    const searchByKeyword = (event) => {
        event.preventDefault()
        navigate(`/movies?q=${keyword}`)
        setKeyword("")
    }

    return (
        <div className="bg-dark">
            <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="#" >
                    <img src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI" className="netflixLogo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="text-white">Home </Nav.Link>
                        <Nav.Link as={Link} to="/movies" className="text-white"> Movies</Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={searchByKeyword}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={keyword}
                            onChange={(event) => setKeyword(event.target.value)}/>
                        <Button variant="outline-danger" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default AppLayout
