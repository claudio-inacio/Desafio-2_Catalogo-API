import { Search } from "lucide-react";
import { HeaderBrand } from "./HeaderBrand";
import { HeaderActions } from "./HeaderActions";

type SortOption = "asc" | "desc";

type StoreHeaderProps = {
  storeName: string;
  subtitle?: string;
  searchValue: string;
  selectedSort: SortOption;
  favoritesCount?: number;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
  onFavoritesClick?: () => void;
};

export function StoreHeader({
  storeName,
  subtitle,
  searchValue,
  selectedSort,
  favoritesCount = 0,
  onSearchChange,
  onSortChange,
  onFavoritesClick,
}: StoreHeaderProps) {
  return (
    <header className="w-full border-b border-slate-200 bg-slate-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6">
        <div className="flex items-center justify-between gap-4">
          <HeaderBrand
            storeName={storeName}
            subtitle={subtitle}
          />

          <HeaderActions
            favoritesCount={favoritesCount}            
            onFavoritesClick={onFavoritesClick}
            
          />
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Buscar produto pelo nome..."
              className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <div className="flex w-full flex-col gap-2 lg:w-auto">
            <label
              htmlFor="sort-products"
              className="text-sm font-medium text-slate-600"
            >
              Ordenar por preço
            </label>

            <select
              id="sort-products"
              value={selectedSort}
              onChange={(event) =>
                onSortChange(event.target.value as SortOption)
              }
              className="h-12 min-w-[220px] rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            >
              <option value="asc">Menor para maior</option>
              <option value="desc">Maior para menor</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}