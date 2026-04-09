
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CategorySidebarItem } from "./CategorySidebarItem";
import type { CategoryItem } from "./types/category-sidebar.types";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);


  function handleControlOpenCategory() {
    setIsOpen((prev) => !prev)
  }

  return (
    <aside className="w-full max-w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:max-w-[260px]">
      <div onClick={(e) => {
        e.stopPropagation()
        handleControlOpenCategory()
      }} className="flex items-center justify-between">
        <div className="flex space-x-2 items-end w-full">

          <h2 className="text-lg font-semibold text-slate-900">Categorias</h2>
          <div className={`w-full flex flex-row  lg:hidden ${isOpen ?'justify-end' :  'justify-between'} items-end`}>

            {!isOpen && (
              <span className="text-xs text-blue-600">{`(${selectedCategory.categoryName})`}</span>
            )}
            {!isOpen ? <ChevronDown /> : <ChevronUp />}
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } lg:mt-4 lg:max-h-none lg:opacity-100`}
      >
        {categories?.map((category) => (
          <CategorySidebarItem
            key={category.id}
            quantity={favoriteQuantity}
            category={category}
            isActive={selectedCategory?.id === category.id}
            onSelect={onCategoryChange}
            handleControlOpenCategory={handleControlOpenCategory}
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