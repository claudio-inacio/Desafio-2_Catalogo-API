
import { useQuery } from "@tanstack/react-query";
import { getProductsCategory } from "../api/get-products-category";
import { CategorySlugEnum, type CategorySlug } from "../utils/enum";

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
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}