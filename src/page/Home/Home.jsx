import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Home.style.css'
import { useGamesQuery } from '../../hooks/useGamesQuery';
import { useGameScreenShotQuery } from '../../hooks/useGameScreenShotQuery'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

const Home = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { data: games, error, isLoading, isError } = useGamesQuery();

    if (isLoading) {
        return (
            <div className="loading">
                <DotLoader color="#a25ae9" />
            </div>
        )
    }
    if (isError) return <div>Error: {error.message}</div>;


    const GameScreenShots = ({ gameSlug }) => {
        const { data: screenshots } = useGameScreenShotQuery(gameSlug);
        const firstScreenshot = screenshots?.[3];
        return (
            <div className="screenshots">
                {firstScreenshot ? (
                    <img src={firstScreenshot.image} alt="Game Screenshot" />
                ) : (
                    <div>No screenshots available.</div>
                )}
            </div>

        )
    }

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search/${query}`);
        }
    }

    return (
        <div className="All">
            <section className="Home">
                <div className='content'>
                    <h1>Special.<br></br><span>Experience</span></h1>
                </div>
                <div className="media-icons">
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} className="icon" alt="facebook" /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className="icon" alt="instagram" /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} className="icon" alt="twitter" /></a>
                    <a href="#"><FontAwesomeIcon icon={faDiscord} className="icon" alt="discord" /></a>
                </div>
            </section>

            <section className="search-bar">
                <h1>Find your Adventure</h1>
                <div className="search-container">
                    <input className="search-input"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search ..." />
                    <button onClick={handleSearch} className="search-btn">
                        <FontAwesomeIcon icon={faSearch} style={{ color: '#c141ec' }} />
                    </button>
                </div>
            </section>

            <section className="popular-games">
                <h2>Popular now</h2>
                <Carousel
                    infinite={true}
                    responsive={responsive}
                    itemClass="carousel-item"

                >
                    {games?.map((game) => (
                        <Link to={`/games/${game.slug}`} key={game.id} className="popular-game">
                            <img src={game.background_image} alt={game.name} />
                            <div className="overlay">
                                <h3>{game.name}</h3>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </section>

            <section className="popular-screenshots">
                <h2>Experience</h2>
                <Carousel
                    infinite={true}
                    responsive={responsive}
                    itemClass="carousel-item"
                >
                    {games?.map((game) => (
                        <div key={game.id} className="game-screenshots">
                            <GameScreenShots gameSlug={game.slug} />
                        </div>
                    ))}
                </Carousel>
            </section>
        </div>


    )
}

export default Home