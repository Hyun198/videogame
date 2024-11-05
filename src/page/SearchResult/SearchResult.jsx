import React from 'react'
import { useParams } from 'react-router-dom'
import { useGameSearchQuery } from '../../hooks/useGameSearchQuery'
import './SearchResult.style.css'

const SearchResult = () => {
    const { query } = useParams();
    const { data: searchResults, isLoading, isError } = useGameSearchQuery(query);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div> Error loading search results.</div>


    const sortedResults = searchResults?.sort((a, b) => new Date(b.released) - new Date(a.released));
    const mostPopularResult = sortedResults[0];

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            <div className="most-popular-game">

                <h2>{mostPopularResult.name}</h2>
                <img src={mostPopularResult.background_image} />
                <p>Released: {mostPopularResult.released}</p>
            </div>

            <h3>Other Results</h3>
            <div className="other-results">

                {sortedResults?.slice(1).map((game) => (
                    <div key={game.id} className="game-item">
                        <img src={game.background_image} alt={game.name} />
                        <p>{game.name}</p>
                        <p>Released: {game.released}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResult