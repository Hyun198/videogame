import React from 'react'
import './GameDetail.style.css';
import { useGameDetailQuery } from '../../hooks/useGameDetailQuery';
import { useGameSeriesQuery } from '../../hooks/useGameSeriesQuery';
import { useParams } from 'react-router-dom';
import { useGameScreenShotQuery } from '../../hooks/useGameScreenShotQuery';
import { useGameTrailerQuery } from '../../hooks/useGameTrailerQuery';
import { Container, Row, Col } from 'react-bootstrap';

const GameDetail = () => {
    const { gameSlug } = useParams();

    const { data, isLoading, isError, error } = useGameDetailQuery(gameSlug)
    const { data: series } = useGameSeriesQuery(gameSlug)
    const { data: screenshots } = useGameScreenShotQuery(gameSlug)
    const { data: trailer } = useGameTrailerQuery(gameSlug);
    console.log(data);

    if (!screenshots || !screenshots || screenshots.length === 0) {
        return <div>No games found.</div>;
    }
    return (

        <Container className="game-detail">

            <div className="game-detail-left" lg={6} xs={12}>
                <h1>{data?.name}</h1>
                <img src={data?.background_image} alt={data?.name} width="490" height="450" />
            </div>

            <div className="game-detail-right" lg={6} xs={12}>
                <h2><span>Game </span>Details</h2>
                <div className="game-description">
                    {(data?.description).split('<br />')[0].replace(/<p>/g, '')}
                </div>
                <div className="game-informations">
                    <span>RELASE DATE : </span>{data?.released}
                    <span>Platforms :</span>
                    <div className="platforms">
                        {data?.platforms.map(platform => (
                            <p>{platform.platform.name}</p>
                        ))}
                    </div>
                    <span>Developers :</span>
                    <div className='developers'>
                        {data?.developers.map(developer => (
                            <p>{developer.name}</p>
                        ))}
                    </div>

                    <span>Genres :</span>
                    <div className='genres'>
                        {data?.genres.map(genre => (
                            <p>{genre.name}</p>
                        ))}
                    </div>
                    <span>Publishers :</span>
                    <div className='publishers'>
                        {data?.publishers.map(publisher => (
                            <p>{publisher.name}</p>
                        ))}
                    </div>

                </div>

            </div>

        </Container>


    )
}

export default GameDetail