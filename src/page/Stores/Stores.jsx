import React from 'react'
import { Link } from 'react-router-dom'
import { useStoresQuery } from '../../hooks/useStoreQuery'
import './Stores.style.css'
const Stores = () => {

    const { data: stores } = useStoresQuery();


    return (
        <div className="stores">
            <h1>Stores</h1>
            <div className="store">
                <div className='store-list'>
                    {stores?.map(store => (
                        <Link to={`/stores/${store.slug}`} key={store.id} className="store-card">
                            <h2>{store.name}</h2>
                            <p>{store.games_count}</p>
                            <img src={store.image_background} alt={store.name} width="100px" height="100px" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stores