
import { useQuery } from "@tanstack/react-query";
import { getProductsCategory } from "../api/get-products-category";
import { CategorySlugEnum } from "../utils/enum";
import type { CategorySlug } from "../components/catalog/category-sidebar/types/category-sidebar.types";

interface useProductsCategoryProps {
    category: CategorySlug;
}


export function useGetProductsToCategory({ category }: useProductsCategoryProps) {
    const arrayDontRequest = [CategorySlugEnum.all, CategorySlugEnum.favorites]
    return useQuery({
        queryKey: ['categoryProducts', category],
        queryFn: () => {
            if (arrayDontRequest.includes(category)) {
                return null;
            }

            return getProductsCategory({ categoryName: category });
        },
        retry: 0,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}