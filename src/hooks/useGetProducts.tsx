
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/get-products";

export function useGetProducts() {

    return useQuery({
        queryKey: ["allProducts"],
        queryFn: getProducts,
    })
}