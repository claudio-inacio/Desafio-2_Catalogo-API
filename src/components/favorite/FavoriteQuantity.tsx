import { Heart } from "lucide-react";

type FavoriteQuantityProps = {
    quantity: number;
};

export function FavoriteQuantity({
    quantity,

}: FavoriteQuantityProps) {

    return (
        <div className="relative inline-flex -ml-1  items-center h-8 min-w-8 justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">

            <Heart className="h-6 w-6" />
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-semibold text-slate-900">
                {quantity}
            </span>

        </div>
    );
}