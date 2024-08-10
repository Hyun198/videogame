import React from 'react'
import { useParams } from 'react-router-dom';
import { useStoreDetailsQuery } from '../../hooks/useStoreDetailQuery';
import './StoreDetail.style.css';

const StoreDetail = () => {
    const { storeSlug } = useParams();
    const { data: storeDetail } = useStoreDetailsQuery(storeSlug);
    console.log(storeDetail);

    if (!storeDetail || storeDetail.length === 0) {
        return <div>No stores found.</div>;
    }

    return (
        <div>
            <div className="store-detail">
                <div className="store-detail-left">
                    <img src={storeDetail.image_background} alt={storeDetail.name} width="400px" height="400px" />
                </div>
                <div className="store-detail-right">
                    <h2>
                        {storeDetail.name}
                    </h2>
                    <div>{storeDetail.games_count}</div>
                    <p>{storeDetail.description}</p>
                </div>
            </div>


        </div>
    )
}

export default StoreDetail