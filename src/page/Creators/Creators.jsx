import React from 'react'
import { useCreatorsQuery } from '../../hooks/useCreatorQuery'

const Creators = () => {

    const { data: creators, error, isError, isLoading } = useCreatorsQuery();
    console.log(creators);
    if (isLoading) return <div>로딩 중...</div>;
    if (isError) return <div>데이터를 불러오는 중 에러가 발생했습니다: {error.message}</div>;
    return (
        <div>Creators
            {creators.map((creator) => (
                <div key={creator.id} className="creator-card">
                    <h2>이름: {creator.name}</h2>
                    <img src={creator.image} alt={creator.name} width="160px" height="160px" />
                    <div>
                        포지션: {creator.positions.map((position, index) => (
                            <span key={index} className="position-tag">{position.name}</span>
                        ))}
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Creators