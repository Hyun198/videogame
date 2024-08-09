import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGamesQuery } from '../../hooks/useGamesQuery';
import './Games.style.css';
import Banner from '../../components/Banner/Banner';



const Games = () => {

    const { data: GameList, error, isLoading, isError } = useGamesQuery();
    // 데이터 로딩 중, 에러 발생, 데이터 없음 처리
    if (isLoading) return <div>로딩 중...</div>;
    if (isError) return <div>게임을 불러오는 중 에러가 발생했습니다.</div>;
    if (!GameList || GameList.length === 0) {
        return <div>게임이 없습니다.</div>;
    }


    return (
        <div className="Games-container">

            <h1>게임 목록</h1>
            <div className="Games">
                {GameList.map((game) => (
                    <Link to={`/games/${game.slug}`} key={game.id} className="GameCard">
                        <img src={game.background_image} alt={game.name} />
                        <div className="overlay">
                            <h3>{game.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default Games