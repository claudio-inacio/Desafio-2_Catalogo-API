import { Folder } from "lucide-react";
import { CategorySidebarItem } from "./CategorySidebarItem";
import type { CategoryItem } from "./types/category-sidebar.types";

type CategorySidebarProps = {
  categories: CategoryItem[] | undefined;
  isLoading?: boolean;
  favoriteQuantity: number;
  selectedCategory: CategoryItem;
  onCategoryChange: (category: CategoryItem) => Promise<void> | void;
};

export function CategorySidebar({
  categories,
  selectedCategory,
  isLoading = false,
  favoriteQuantity,
  onCategoryChange,
}: CategorySidebarProps) {


  return (
    <aside className="w-full max-w-[260px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Folder className="h-5 w-5 text-slate-700" />
        <h2 className="text-lg font-semibold text-slate-900">CATEGORIAS</h2>
      </div>

      <div className="flex flex-col gap-2">
        {categories?.map((category) => (
          <CategorySidebarItem
            key={category.id}
            quantity={favoriteQuantity}
            category={category}
            isActive={selectedCategory?.id === category.id}
            onSelect={onCategoryChange}
          />
        ))}
      </div>

      {isLoading ? (
        <div className="mt-4 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-500">
          Buscando categorias disponíveis...
        </div>
      ) : !categories || categories?.length === 1 ? <div className="mt-4 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-500">
        Não foi Possivel obter as categorias disponíveis... Tente novamente mais tarde!
      </div> : null}
    </aside>
  );
}