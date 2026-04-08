import { api } from "../shared/axios";
import type { CategorySlug } from "../utils/enum";

interface getProductsCategoryProps {
    categoryName: CategorySlug;
}

export async function getProductsCategory({ categoryName }: getProductsCategoryProps) {
    const { data } = await api.get(`/products/category/${categoryName}`);
    return data;
}