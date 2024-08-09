import React from 'react'
import './Banner.style.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Banner = () => {
    return (
        <Container className='header'>
            <Link to="/" className='brand'>Home</Link>
            <div className="navigation">
                <div className="navigation-items">
                    <Link to="/games">Games</Link>
                    <Link to="/creators">Creators</Link>
                    <Link to="/stores">Stores</Link>
                    <Link to="#">Contact</Link>
                </div>
            </div>

        </Container>

    )
}

export default Banner