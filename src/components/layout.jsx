import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const layout = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">

                <Navbar.Brand href="/">Video Game</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Game</Nav.Link>
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>

            </Navbar>



        </div>
    )
}

export default layout