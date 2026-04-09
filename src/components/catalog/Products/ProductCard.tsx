import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductPrice } from "./ProductPrice";
import { ProductFavoriteButton } from "./ProductFavoriteButton";
import type { Product } from "./types/product.types";
import { ProductDescription } from "./ProductDescription";


type Props = {
    product: Product;
};

export function ProductCard({ product }: Props) {
    return (
        <div className="relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
            <ProductFavoriteButton />

            <ProductImage src={product.image} alt={product.title} />

            <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                    <ProductTitle title={product.title} />
                    <ProductPrice price={product.price} />
                </div>

                <ProductDescription description={product.description} />
            </div>
        </div>
    );
}