/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { StoreHeader } from "./components/header/StoreHeader";
import { useGetProducts } from "./hooks/useGetProducts";

import { CategorySidebar } from "./components/catalog/category-sidebar/CategorySidebar";
import { useGetCategories } from "./hooks/useGetCategories";
import { allCategorieObject } from "./utils/enum";
import { useGetProductsToCategory } from "./hooks/useGetProductsToCategory";
import type { CategoryItem } from "./components/catalog/category-sidebar/category-sidebar.types";



type SortOption = "asc" | "desc";

function StoreDashboard() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryItem>(
        allCategorieObject,
    );
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<SortOption>("asc");

    const {
        isPending,
        data: productsData,
    } = useGetProducts();
    const {
        isPending: loadingCategories,
        data: categoriesData,
    } = useGetCategories();

    const {
        isPending: loadingProductsToCategory,
        data: productsCategoryData,

    } = useGetProductsToCategory({ category: selectedCategory?.slug });

    function handleSelectCategory(category: CategoryItem) {
        setSelectedCategory(category);
    }

    if (isPending) return (<>CARREGANDO...</>)
    return (
        <>
            <StoreHeader
                storeName="NACIONAL MODAS"
                subtitle="Explore nossos produtos e encontre os melhores preços"
                searchValue={search}
                selectedSort={sort}
                onSearchChange={setSearch}
                onSortChange={setSort}

            />
            <div className="min-h-screen bg-slate-100 ">
                <div className="mx-auto grid  gap-6 p-2 grid-cols-[260px_1fr]">
                    <aside>
                        <CategorySidebar
                            selectedCategory={selectedCategory}
                            categories={categoriesData}
                            favoriteQuantity={8}
                            isLoading={isPending}
                            onCategoryChange={handleSelectCategory}
                        />
                    </aside>
                    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 text-center">
                        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                            Agile RiseUp - Desafio 2: Catalogo com API
                        </h1>
                    </main>
                </div>
            </div>
        </>
    )
}

export default StoreDashboard
