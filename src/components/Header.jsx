import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header({ onSearch }) {
    
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent page refresh
        if (searchQuery.trim() !== "") {
            onSearch(searchQuery);
        }
    };

    return (
        <>
            <Navbar expand="lg" className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">
                        TMDB
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 " navbarScroll
                        >

                            <NavDropdown title="Movies" id="navbarScrollingDropdown " data-bs-theme="light" variant="secondary">

                                <NavDropdown.Item href="#action3">Popular</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Now Playing</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Top Rated</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Upcoming</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="TV Shows" id="navbarScrollingDropdown " data-bs-theme="light" variant="secondary">

                                <NavDropdown.Item href="#action3">Popular</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Airing Today</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">On TV</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Top rated</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="People" id="navbarScrollingDropdown " data-bs-theme="light" variant="secondary">

                                <NavDropdown.Item href="#action3">Popular People</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="More" id="navbarScrollingDropdown " data-bs-theme="light" variant="secondary">

                                <NavDropdown.Item href="#action3">Discussions</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Leaderboard</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Support</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">API Documentation</NavDropdown.Item>
                            </NavDropdown>

                            <Form className="d-flex" onSubmit={handleSearch}>
                                <Form.Control
                                    type="search"
                                    placeholder="Search Movies"
                                    className="me-2 bg-light text-dark"
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Button variant="primary" type='submit'>Search</Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;