import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { useGamesQuery } from '../../hooks/useGamesQuery';
import './Games.style.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
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


const Games = () => {

    const { data: GameList, error, isLoading, isError } = useGamesQuery();
    console.log(GameList);

    if (isLoading) {
        <div>Loading...</div>
    }

    if (isError) {
        <div>에러 발생 ...</div>
    }

    // Check if data is loaded and has results
    if (!GameList || !GameList || GameList.length === 0) {
        return <div>No games found.</div>;
    }

    return (
        <div className="Games-container">
            <h1>Games</h1>
            <Carousel responsive={responsive}>
                {GameList?.map((game) => (
                    <Link to={`/games/${game.slug}`}>
                        <div className="GameCard" key={game.id}>
                            <img src={game.background_image} alt={game.name} width="250" />
                            <div className="overlay">
                                <h3>{game.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>


    )
}

export default Games