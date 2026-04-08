import { Home } from "lucide-react";
import type { CategoryItem } from "./category-sidebar.types";
import { IconCategoriesEnum, NameCategoriesEnum } from "../../../utils/enum";

type CategorySidebarItemProps = {
    category: CategoryItem;
    isActive: boolean;
    onSelect: (category: CategoryItem) => void;
};

export function CategorySidebarItem({
    category,
    isActive,
    onSelect,
}: CategorySidebarItemProps) {
    const Icon = IconCategoriesEnum[category.slug] ?? Home;

    return (
        <button
            type="button"
            onClick={() => onSelect(category)}
            className={[
                "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition",
                isActive
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900",
            ].join(" ")}
            aria-pressed={isActive}
        >
            <span className="flex items-center gap-3">
                <Icon className="h-4 w-4 shrink-0" />
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