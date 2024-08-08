import React from 'react'
import './GameDetail.style.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGameDetailQuery } from '../../hooks/useGameDetailQuery';
import { useGameSeriesQuery } from '../../hooks/useGameSeriesQuery';
import { useParams } from 'react-router-dom';
import { useGameScreenShotQuery } from '../../hooks/useGameScreenShotQuery';
import { useGameTrailerQuery } from '../../hooks/useGameTrailerQuery';

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

const GameDetail = () => {
    const { gameSlug } = useParams();

    const { data, isLoading, isError, error } = useGameDetailQuery(gameSlug)
    const { data: series } = useGameSeriesQuery(gameSlug)
    const { data: screenshots } = useGameScreenShotQuery(gameSlug)
    const { data: trailer } = useGameTrailerQuery(gameSlug);


    if (!screenshots || !screenshots || screenshots.length === 0) {
        return <div>No games found.</div>;
    }
    return (
        <div>
            <div className="game-detail">
                <h1>{data?.name}</h1>
                <img src={data?.background_image} alt={data?.name} width="400" />
                <p>Released: {data?.released}</p>
                <p>Description: {data?.description_raw}</p>

            </div>
            <h2>Screenshots</h2>
            <Carousel responsive={responsive}>
                {screenshots?.map((screenshot) => (
                    <div key={screenshot.id} className="screenshot">
                        <img src={screenshot.image} alt="screenshot" />
                    </div>
                ))}
            </Carousel>

            <h2>DLC</h2>
            <div>
                {series?.map((game, index) => (
                    <img src={game.background_image} alt={game.name} width={"160px"} height={"160px"} />
                ))}
            </div>

        </div>
    )
}

export default GameDetail