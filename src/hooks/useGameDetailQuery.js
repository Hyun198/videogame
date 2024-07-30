import api from '../utils/api';
import { useQuery } from '@tanstack/react-query';


const fetchGameDetails = (gameSlug) => {
    console.log(gameSlug);
    return api.get(`/games/${gameSlug}`)
}


export const useGameDetailQuery = (gameSlug) => {
    return useQuery({
        queryKey: ['gameDetail', gameSlug],
        queryFn: () => fetchGameDetails(gameSlug),
        select: (data) => data.data,
        staleTime: 1000 * 60 * 5 // 5 minutes
    })
}