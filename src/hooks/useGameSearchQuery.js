import api from '../utils/api'
import { useQuery } from "@tanstack/react-query";

const fetchGameSearch = (query) => {
    return api.get(`/games?search=${query}`);
}

export const useGameSearchQuery = (query) => {
    return useQuery({
        queryKey: ['gameSearch', query],
        queryFn: () => fetchGameSearch(query),

    })
}