export type CategorySlug =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing"
  | "all"
  | "favorites"

export type CategoryItem = {
  categoryName: string;
  id: string;
  slug: CategorySlug;
};