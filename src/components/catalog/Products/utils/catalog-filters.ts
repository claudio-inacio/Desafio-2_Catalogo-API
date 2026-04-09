import type { CategorySlug } from "../../category-sidebar/types/category-sidebar.types";
import type { Product, CatalogSortOption } from "../types/product.types";


type FilterCatalogProductsParams = {
  products: Product[];
  apiResultData: Product[];
  category: CategorySlug;
  search: string;
  sort: CatalogSortOption;
  favoritesOnly: boolean;
  favoriteIds: number[];
};

export function filterCatalogProducts({
  products,
  apiResultData,
  category,
  search,
  sort,
  favoritesOnly,
  favoriteIds,
}: FilterCatalogProductsParams): Product[] {
  let result = [...products];
  if (category !== "all" && category !== 'favorites' && !apiResultData) {
    result = result.filter((product) => product.category === category);
  }

  const normalizedSearch = search.trim().toLowerCase();

  if (normalizedSearch) {
    result = result.filter((product) =>
      product.title.toLowerCase().includes(normalizedSearch),
    );
  }

  if (favoritesOnly) {
    result = result.filter((product) => favoriteIds.includes(product.id));
  }

  if (sort === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
}