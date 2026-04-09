import { useMemo } from "react";
import { filterCatalogProducts } from "../utils/catalog-filters";
import type { CategorySlug } from "../../category-sidebar/types/category-sidebar.types";
import type { CatalogSortOption, Product } from "../types/product.types";

type UseCatalogProductsParams = {
    productsList: Product[]
    apiResultData: Product[]
    category: CategorySlug;
    search: string;
    sort: CatalogSortOption;
    favoritesOnly: boolean;
    favoriteIds: number[];
};

export function useCatalogProducts({
    productsList,
    apiResultData,
    category,
    search,
    sort,
    favoritesOnly,
    favoriteIds,
}: UseCatalogProductsParams) {
    const products = useMemo(() => {
        return filterCatalogProducts({
            products: productsList,
            apiResultData,
            category,
            search,
            sort,
            favoritesOnly,
            favoriteIds,
        });
    }, [category, search, sort, favoritesOnly, favoriteIds, productsList, apiResultData]);

    return {
        products,
        total: products.length,
        isLoading: false,
        isEmpty: products.length === 0,
    };
}