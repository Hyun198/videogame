import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchGameScreenShot = (gameSlug) => {
    return api.get(`/games/${gameSlug}/screenshots`)
}

export const useGameScreenShotQuery = (gameSlug) => {
    return useQuery({
        queryKey: ['gameScreenShot', gameSlug],
        queryFn: () => fetchGameScreenShot(gameSlug),
        select: data => data.data.results,
        staleTime: 1000 * 60 * 5 // 5 minutes
    });
}