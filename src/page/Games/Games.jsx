import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGamesQuery } from '../../hooks/useGamesQuery';
import './Games.style.css';

//카테고리별로 나누기
const Games = () => {

    const { data: GameList, error, isLoading, isError } = useGamesQuery();
    // 데이터 로딩 중, 에러 발생, 데이터 없음 처리

    console.log(GameList);
    if (isLoading) return <div>로딩 중...</div>;
    if (isError) return <div>게임을 불러오는 중 에러가 발생했습니다.</div>;
    if (!GameList || GameList.length === 0) {
        return <div>게임이 없습니다.</div>;
    }

    const changeDate = (inputTime) => {
        const date = new Date(inputTime);
        const formattedTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        return formattedTime
    }

    return (
        <div className="Games-container">

            <h1>Game List</h1>
            <div className="Games">
                {GameList.map((game) => (
                    <div className="GameCard" key={game.id}>
                        <img src={game.background_image} alt={game.name} className="card-img" />
                        <div className="card-body">
                            <h3 className="card-title">{game.name}</h3>
                            <p className="card-text">
                                Reviews: {game.reviews_count}
                            </p>
                            <div className="card-details">
                                <div className='detail-left'>
                                    <p>Released: {changeDate(game.released)}</p>
                                    <p>Updated: {changeDate(game.updated)}</p>
                                </div>
                                <Link to={`/games/${game.slug}`} className="card-link">See More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Games