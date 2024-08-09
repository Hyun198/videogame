import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchStores = () => {
    return api.get('/stores')
}

export const useStoresQuery = () => {
    return useQuery({
        queryKey: ['stores'],
        queryFn: fetchStores,
        select: (data) => data.data.results,
        staleTime: 3000000, //5 minute
    })
}