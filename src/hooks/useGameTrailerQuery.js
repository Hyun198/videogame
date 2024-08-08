import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchGameTrailer = (gameSlug) => {
    return api.get(`/games/${gameSlug}/movies`)
}

export const useGameTrailerQuery = (gameSlug) => {
    return useQuery({
        queryKey: ['gameTrailer', gameSlug],
        queryFn: () => fetchGameTrailer(gameSlug),
        staleTime: 20000,
    })
}