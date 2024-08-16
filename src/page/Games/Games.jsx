import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useGamesQuery } from '../../hooks/useGamesQuery';
import './Games.style.css';
import { useGameGenreQuery } from '../../hooks/useGameGenre';

//카테고리별로 나누기
const Games = () => {

    const { data: GameList, error, isLoading, isError } = useGamesQuery();
    // 데이터 로딩 중, 에러 발생, 데이터 없음 처리
    const { data: genreList } = useGameGenreQuery();
    console.log(genreList);

    const [selectedGenre, setSelectedGenre] = useState(null);



    if (isLoading) return <div>로딩 중...</div>;
    if (isError) return <div>게임을 불러오는 중 에러가 발생했습니다.</div>;
    if (!GameList || GameList.length === 0) {
        return <div>게임이 없습니다.</div>;
    }

    const filterGames = selectedGenre ? GameList.filter(game => game.genres.some(genre => genre.id === selectedGenre)) : GameList;

    const changeDate = (inputTime) => {
        const date = new Date(inputTime);
        const formattedTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        return formattedTime
    }

    return (
        <div className="Games-container">

            <div className="sidebar">
                <h2>Genres</h2>
                <ul>
                    {genreList?.map((genre) =>

                        <li key={genre.id} onClick={() => setSelectedGenre(genre.id)}
                            className={selectedGenre === genre.id ? 'selected' : ''}
                        >{genre.name}</li>

                    )}
                </ul>
            </div>

            <div className="Games-content">
                <h1>Game List</h1>
                <div className="Games">
                    {filterGames.length > 0 ? (
                        filterGames.map((game) => (
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
                        ))
                    ) : (
                        <div className="no-games-message">
                            <p>해당 장르에 속하는 게임이 없습니다.</p>
                        </div>
                    )}
                </div>
            </div>

        </div>

    )
}

export default Games