import type { CategorySlug } from "../../../utils/enum";

export type CategoryItem = {
  categoryName: string;
  id: string;
  slug: CategorySlug;
};