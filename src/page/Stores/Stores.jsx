import React from 'react'
import { useStoresQuery } from '../../hooks/useStoreQuery'

const Stores = () => {

    const { data: stores } = useStoresQuery();
    console.log("stores", stores);
    return (
        <div>
            <h1>Stores</h1>
            <div>
                {stores.map(store => (
                    <div>
                        <h2>{store.name}</h2>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default Stores