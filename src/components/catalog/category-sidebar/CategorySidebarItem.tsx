import { Home } from "lucide-react";
import type { CategoryItem } from "./types/category-sidebar.types";
import { IconCategoriesEnum, NameCategoriesEnum } from "../../../utils/enum";
import { FavoriteQuantity } from "../../favorite/FavoriteQuantity";

type CategorySidebarItemProps = {
    category: CategoryItem;
    isActive: boolean;
    quantity: number;
    handleControlOpenCategory: () => void;
    onSelect: (category: CategoryItem) => void;
};

export function CategorySidebarItem({
    category,
    isActive,
    onSelect,
    quantity,
    handleControlOpenCategory,
}: CategorySidebarItemProps) {
    const Icon = IconCategoriesEnum[category.slug] ?? Home;
    return (
        <button
            type="button"
            onClick={() => {
                onSelect(category)
                handleControlOpenCategory();
            }}
            className={[
                "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition",
                isActive
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900",
            ].join(" ")}
            aria-pressed={isActive}
        >
            <span className="flex items-center gap-3">

                {category.slug === "favorites" ? (
                    <FavoriteQuantity quantity={quantity} />
                ) : (
                    <Icon className="h-6 w-6 shrink-0" />
                )}


                <span className="text-sm font-medium">{NameCategoriesEnum[category.slug]}</span>
            </span>

            <span
                className={[
                    "h-2 w-2 rounded-full transition",
                    isActive ? "bg-white" : "bg-slate-300",
                ].join(" ")}
            />
        </button>
    );
}