import { ProductCard } from "./ProductCard";
import type { Product } from "./types/product.types";


type Props = {
    products?: Product[];
    isLoading?: boolean;
};

export function ProductList({ products, isLoading }: Props) {
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="h-[320px] animate-pulse rounded-2xl bg-slate-200"
                    />
                ))}
            </div>
        );
    }

    if (!products?.length) {
        return (
            <div className="flex h-[300px] items-center justify-center text-slate-500">
                Nenhum produto encontrado
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}