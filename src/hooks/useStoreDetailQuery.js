import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchStoreDetails = (storeSlug) => {
    return api.get(`/stores/${storeSlug}`);
}

export const useStoreDetailsQuery = (storeSlug) => {
    return useQuery({
        queryKey: ['storeDetails', storeSlug],
        queryFn: () => fetchStoreDetails(storeSlug),
        select: data => data.data,
        staleTime: 300000, //5 minute
    });
}