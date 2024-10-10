import api from '../utils/api'
import { useQuery } from '@tanstack/react-query'


const fetchGamesList = () => {
    return api.get('/games'
        , {
            params: {
                page_size: 50,
            }
        }
    )
}


export const useGamesQuery = () => {
    return useQuery({
        queryKey: ['games'],
        queryFn: fetchGamesList,
        select: (data) => data.data.results,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 5,
    })
}
