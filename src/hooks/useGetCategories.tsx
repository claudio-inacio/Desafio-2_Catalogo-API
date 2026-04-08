
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/get-categories";
import { formatCategoryName } from "../utils";
import { allCategorieObject, CategorySlugEnum, favoritesCategorieObject, type CategorySlug } from "../utils/enum";

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
        }
    })
}