import React from 'react'
import './GameDetail.style.css';
import { useGameDetailQuery } from '../../hooks/useGameDetailQuery';
import { useParams } from 'react-router-dom';
const GameDetail = () => {
    const { gameSlug } = useParams();

    const { data, isLoading, isError, error } = useGameDetailQuery(gameSlug)

    return (
        <div>
            <h1>{data?.name}</h1>
            <p>Released: {data?.released}</p>
            <p>Description: {data?.description_raw}</p>
            <img src={data?.background_image} alt={data?.name} width="400" />


        </div>
    )
}

export default GameDetail