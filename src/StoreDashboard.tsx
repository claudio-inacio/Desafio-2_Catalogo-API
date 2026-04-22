import { useMemo, useState } from "react";
import { StoreHeader } from "./components/header/StoreHeader";
import { useGetProducts } from "./hooks/useGetProducts";
import { CategorySidebar } from "./components/catalog/category-sidebar/CategorySidebar";
import { useGetCategories } from "./hooks/useGetCategories";
import { allCategorieObject } from "./utils/enum";
import { useGetProductsToCategory } from "./hooks/useGetProductsToCategory";
import type { CategoryItem } from "./components/catalog/category-sidebar/types/category-sidebar.types";;
import { useCatalogProducts } from "./components/catalog/Products/hooks/useCatalogProducts";
import { ProductList } from "./components/catalog/Products/ProductList";
import type { CatalogSortOption } from "./components/catalog/Products/types/product.types";
import LoadingComponent from "./components/Loading";
import { useFavorites } from "./hooks/useFavorites";
import { RequestErrorModal } from "./components/error/RequestErrorModal";




function StoreDashboard() {
    const { toggleFavorite, favoriteIds } = useFavorites();
    const [selectedCategory, setSelectedCategory] = useState<CategoryItem>(
        allCategorieObject,
    );
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<CatalogSortOption>("default");
    const [favoritesOnly, setFavoritesOnly] = useState(false);
    const {
        isPending,
        data: productsData,
        isError: errorGetProducts,
    } = useGetProducts();
    const {
        isPending: loadingProductsToCategory,
        data: productsCategoryData,
        isError: errorGetProductsToCategory,
    } = useGetProductsToCategory({ category: selectedCategory?.slug });
    const {
        isPending: loadingCategories,
        data: categoriesData,
        isError: errorGetCategories,
    } = useGetCategories();
    const apiDataProductsIsOk = productsCategoryData || productsData;
    const { products, total, isLoading, isEmpty } = useCatalogProducts({
        productsList: productsCategoryData || productsData,
        apiResultData: apiDataProductsIsOk,
        category: selectedCategory.slug,
        search,
        sort,
        favoritesOnly,
        favoriteIds,
    });
    const existErrorToRequest =  errorGetProductsToCategory || errorGetCategories || errorGetProducts
    const [errorToRequest, setErrorToRequest] = useState(existErrorToRequest);

    const handleSelectCategory = useMemo(() => {
        return categoriesData?.find((category) => category.slug === selectedCategory.slug) || allCategorieObject
    }, [selectedCategory, categoriesData]);




    return (
        <>
            <StoreHeader
                storeName="MODA NACIONAL"
                subtitle="Explore nossos produtos e encontre os melhores preços"
                searchValue={search}
                loading={isPending}
                selectedSort={sort}
                onSearchChange={setSearch}
                onSortChange={setSort}

            />
            {isPending ? (
                <LoadingComponent title="Preaprando dados" messageLoading="Estamos buscando as categorias e produtos disponíveis, aguarde um momento..." />
            ) : (
                <div className="min-h-screen bg-slate-100 ">
                    <div className="mx-auto grid  gap-6 p-2 grid-cols-1 lg:grid-cols-[260px_1fr]">
                        <aside>
                            <CategorySidebar
                                selectedCategory={handleSelectCategory}
                                categories={categoriesData}
                                favoriteQuantity={favoriteIds.length}
                                isLoading={loadingCategories}
                                onCategoryChange={(category) => {
                                    setSelectedCategory(category)
                                    setFavoritesOnly(category.slug === 'favorites')
                                }}
                            />
                        </aside>
                        <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="mb-6 flex items-center justify-between gap-4">
                                <div>
                                    <h1 className="text-2xl font-semibold text-slate-900">
                                        Catálogo de produtos
                                    </h1>

                                    <p className="mt-1 text-sm text-slate-500">
                                        {favoritesOnly
                                            ? `Exibindo ${total} favorito(s)`
                                            : `Exibindo ${total} produto(s)`}
                                    </p>
                                </div>
                            </div>

                            {isEmpty ? (
                                <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-slate-500">
                                    Nenhum produto encontrado para os filtros aplicados.
                                </div>
                            ) : (
                                <ProductList favoriteIds={favoriteIds} handleFavorite={toggleFavorite} products={products} isLoading={isLoading || loadingProductsToCategory} />
                            )}
                        </main>
                    </div>
                    <RequestErrorModal open={errorToRequest} title="Erro de Requisição" onClose={() => setErrorToRequest(false)} />
                </div>
            )}

        </>
    )
}

export default StoreDashboard
