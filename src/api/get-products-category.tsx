import type { CategorySlug } from "../components/catalog/category-sidebar/types/category-sidebar.types";
import { api } from "../shared/axios";


interface getProductsCategoryProps {
    categoryName: CategorySlug;
}

export async function getProductsCategory({ categoryName }: getProductsCategoryProps) {
    const { data } = await api.get(`/products/category/${categoryName}`);
    return data;
}