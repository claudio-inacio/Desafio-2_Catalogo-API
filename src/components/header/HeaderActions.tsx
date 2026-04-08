import { Search } from "lucide-react";

export type SortOption = "asc" | "desc";

type HeaderActionsProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
  selectedSort: SortOption;
};

export function HeaderActions({
  searchValue,
  onSearchChange,
  onSortChange,
  selectedSort,
}: HeaderActionsProps) {
  return (
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
  );
}

