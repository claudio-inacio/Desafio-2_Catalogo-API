import {
    Home,
    Laptop,
    Gem,
    Shirt,
    ShoppingBag,
    Heart,
    type LucideIcon,
} from "lucide-react";
import type { CategoryItem } from "../components/catalog/category-sidebar/category-sidebar.types";


export type CategorySlug =
    | "electronics"
    | "jewelery"
    | "men's clothing"
    | "women's clothing"
    | "all"
    | "favorites"

export const CategorySlugEnum: Record<string, CategorySlug> = {
    electronics: "electronics",
    "men's clothing": "men's clothing",
    jewelery: "jewelery",
    "women's clothing": "women's clothing",
    all: "all",
    favorites: "favorites",
}
export const IconCategoriesEnum: Record<CategorySlug, LucideIcon> = {
    "women's clothing": ShoppingBag,
    "men's clothing": Shirt,
    jewelery: Gem,
    electronics: Laptop,
    all: Home,
    favorites: Heart,
}

export const NameCategoriesEnum: Record<CategorySlug, string> = {
    electronics: "ELETRÔNICOS",
    jewelery: "JÓIAS",
    "men's clothing": "ROUPAS MASCULINAS",
    "women's clothing": "ROUPAS FEMININAS",
    all: "TODOS",
    favorites: "FAVORITOS",
};
export const allCategorieObject: CategoryItem = { id: 'all', categoryName: 'Todos', slug: 'all' }
export const favoritesCategorieObject: CategoryItem = { id: 'favorites', categoryName: 'Favoritos', slug: "favorites" }