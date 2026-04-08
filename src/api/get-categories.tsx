import { api } from "../shared/axios";

export async function getCategories() {
    const { data } = await api.get("/products/categories");
    return data;
}