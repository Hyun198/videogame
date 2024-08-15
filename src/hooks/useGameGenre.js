import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";


const fetchGameGenre = () => {
    return api.get('/genres');
}

export const useGameGenreQuery = () => {
    return useQuery({
        queryKey: ['gameGenre'],
        queryFn: fetchGameGenre,  // 함수 자체를 전달
        select: data => data.data.results,
        staleTime: 300000 * 60, // 5 minute
    });
}