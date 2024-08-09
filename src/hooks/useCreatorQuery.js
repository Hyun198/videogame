import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchCreators = () => {
    return api.get('/creators')
}

export const useCreatorsQuery = () => {
    return useQuery({
        queryKey: ['creators'],
        queryFn: fetchCreators,
        select: data => data.data.results,
        staleTime: 300000, // 5 minute
    })
}