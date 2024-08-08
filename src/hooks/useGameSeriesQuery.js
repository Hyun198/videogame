import api from "../utils/api";
import { useQuery } from '@tanstack/react-query';

const fetchGameSeries = (gameSlug) => {
    console.log(gameSlug);
    return api.get(`/games/${gameSlug}/game-series`)
}

export const useGameSeriesQuery = (gameSlug) => {
    return useQuery({
        queryKey: ['gameSameSeries', gameSlug],
        queryFn: () => fetchGameSeries(gameSlug),
        select: (data) => data.data.results,
        staleTime: 60000, // 2minute
    })
}