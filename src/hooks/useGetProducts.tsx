
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/get-products";
import type { AxiosError } from "axios";

export function useGetProducts() {

    return useQuery({
        queryKey: ["allProducts"],
        queryFn: getProducts,
        retry: (failureCount, error: AxiosError) => {
            if (error?.response?.status === 526) {
                return false;
            }
            return failureCount < 1;
        },
        refetchOnWindowFocus: false,
    })
}