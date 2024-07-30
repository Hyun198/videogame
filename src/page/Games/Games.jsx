import React from 'react'
import { Link } from 'react-router-dom';
import { useGamesQuery } from '../../hooks/useGamesQuery';
import './Games.style.css';
const Games = () => {

    const { data: GameList, error, isLoading, isError } = useGamesQuery();
    console.log(GameList);

    if (isLoading) {
        <div>Loading...</div>
    }

    if (isError) {
        <div>에러 발생 ...</div>
    }
    return (
        <div className="Games-container">
            <h1>Games</h1>
            <ul>
                {GameList?.map((game) => (
                    <Link to={`/games/${game.slug}`}>
                        <li key={game.id}>
                            <h2>{game.name}</h2>
                            <p>Released: {game.released}</p>
                            <img src={game.background_image} alt={game.name} width="200" />
                        </li>
                    </Link>
                ))}
            </ul>
        </div>


    )
}

export default Games