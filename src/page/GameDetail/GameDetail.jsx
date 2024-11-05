import React, { useState } from 'react'
import './GameDetail.style.css';
import { useGameDetailQuery } from '../../hooks/useGameDetailQuery';
import { useGameSeriesQuery } from '../../hooks/useGameSeriesQuery';
import { useParams } from 'react-router-dom';
import { useGameScreenShotQuery } from '../../hooks/useGameScreenShotQuery';
import { Container } from 'react-bootstrap';

const GameDetail = () => {
    const { gameSlug } = useParams();

    const [selectedMenu, setSelectedMenu] = useState('description');

    const handleMenu = (menu) => {
        setSelectedMenu(menu);
    }


    const { data, isLoading, isError, error } = useGameDetailQuery(gameSlug)
    const { data: series } = useGameSeriesQuery(gameSlug)
    const { data: screenshots } = useGameScreenShotQuery(gameSlug)



    if (!data || !data || data.length === 0) {
        return <div>No games found.</div>;
    }

    if (!screenshots || !screenshots || screenshots.length === 0) {
        return <div>No games found.</div>;
    }
    return (

        <Container className="game-detail">
            <div className="game-detail-top">
                <div className="game-detail-left" lg={6} xs={12}>
                    <h1>{data?.name}</h1>
                    <img src={data?.background_image} alt={data?.name} width="490" height="450" />
                </div>

                <div className="game-detail-right" lg={6} xs={12}>
                    <h2><span>Game </span>Details</h2>
                    <div className="game-description" dangerouslySetInnerHTML={{ __html: data?.description }}>

                    </div>
                    <div className="game-informations">
                        <span>RELEASE DATE : </span>{data?.released}
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
            </div>


            <div className="game-detail-bottom">
                <ul className="menu">
                    <li className={selectedMenu === 'description' ? 'menu-item active' : 'menu-item'} onClick={() => handleMenu('description')}>description</li>
                    <li className={selectedMenu === 'store' ? 'menu-item active' : 'menu-item'} onClick={() => handleMenu('store')}>store</li>
                    <li className={selectedMenu === 'series' ? 'menu-item active' : 'menu-item'} onClick={() => handleMenu('series')}>series</li>
                </ul>
                <div className="game-detail-content">
                    {selectedMenu === 'description' && (
                        <div className="game-description">
                            <p>{data?.description_raw}</p>
                        </div>
                    )}
                    {selectedMenu === 'store' && (
                        <div>
                            <ul>
                                {data?.stores.map(store => (
                                    <li key={store.id}>{store.store.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {selectedMenu === 'series' && (
                        <div>
                            {series?.map(series => (
                                <div key={series.id} className="game-series">
                                    <img src={series.background_image} />
                                    {series.name}
                                </div>
                            ))}

                        </div>
                    )}
                </div>
            </div>

        </Container>


    )
}

export default GameDetail