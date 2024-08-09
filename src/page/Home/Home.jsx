import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Home.style.css'
import { useGamesQuery } from '../../hooks/useGamesQuery';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

//1. 인기 탑 게임들
//2. 카테고리별 구별
//3. footer
//4. our game stores ? 랜덤한 게임들 보여주기?

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
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Home = () => {

    const { data: games, error, isLoading, isError } = useGamesQuery();
    console.log(games);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div className="All">
            <section className="Home">
                <div className='content'>
                    <h1>Special.<br></br><span>Experience</span></h1>
                </div>
                <div className="media-icons">
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} className="icon" /></a>
                    <a href="#" ><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
                    <a href="#"><FontAwesomeIcon icon={faDiscord} className="icon" /></a >
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

        </div>


    )
}

export default Home