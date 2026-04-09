
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/get-categories";
import { formatCategoryName } from "../utils";
import { allCategorieObject, CategorySlugEnum, favoritesCategorieObject } from "../utils/enum";
import type { CategorySlug } from "../components/catalog/category-sidebar/types/category-sidebar.types";
import type { AxiosError } from "axios";

type Category = {
    id: string;
    categoryName: string;
    slug: CategorySlug;
};


export function useGetCategories() {
    return useQuery({
        queryKey: ["allCategories"],
        queryFn: getCategories,

        select: (data: string[]): Category[] => {
            const resultSet = data.map((category) => ({
                id: category,
                categoryName: formatCategoryName(category),
                slug: CategorySlugEnum[category],
            }))
            return [allCategorieObject, favoritesCategorieObject, ...(resultSet || [])];
        },
        retry: (failureCount, error: AxiosError) => {            
            if (error?.response?.status === 526) {
                return false;
            }
            return failureCount < 1;
        },
        refetchOnWindowFocus: false,
    })
}