import React from 'react'
import { useStoresQuery } from '../../hooks/useStoreQuery'

const Stores = () => {

    const { data: stores } = useStoresQuery();
    console.log(stores);
    return (
        <div>Stores</div>
    )
}

export default Stores