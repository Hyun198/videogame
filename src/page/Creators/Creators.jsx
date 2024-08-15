import React from 'react'
import { useCreatorsQuery } from '../../hooks/useCreatorQuery'
import './Creators.style.css';
const Creators = () => {

    const { data: creators, error, isError, isLoading } = useCreatorsQuery();

    if (isLoading) return <div>로딩 중...</div>;
    if (isError) return <div>데이터를 불러오는 중 에러가 발생했습니다: {error.message}</div>;
    return (
        <div className='creators'>
            <h2>Creators</h2>
            <div className="creator-list">
                {creators.map((creator) => (
                    <div key={creator.id} className="creator-card">
                        <p>{creator.name}</p>
                        <img src={creator.image} alt={creator.name} width="160px" height="160px" />
                        <div className="position-tag">
                            {creator.positions.map((position, index) => (
                                <span key={index} >{position.name}</span>
                            ))}
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Creators