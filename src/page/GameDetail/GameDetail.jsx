import React from 'react'
import './GameDetail.style.css';
import { useGameDetailQuery } from '../../hooks/useGameDetailQuery';
import { useParams } from 'react-router-dom';
const GameDetail = () => {
    const { gameSlug } = useParams();
    console.log(gameSlug);
    const { data, isLoading, isError, error } = useGameDetailQuery(gameSlug)
    console.log(data);

    return (
        <div>
            detailpage

        </div>
    )
}

export default GameDetail