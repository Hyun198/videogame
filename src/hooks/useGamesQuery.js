import api from '../utils/api'
import { useQuery } from '@tanstack/react-query'


const fetchGamesList = () => {
    return api.get('/games')
}


export const useGamesQuery = () => {
    return useQuery({
        queryKey: ['games'],
        queryFn: fetchGamesList,
        select: (data) => data.data.results,
        staleTime: 300000, // 1 minute
    })
}