import { HeaderBrand } from "./HeaderBrand";
import { HeaderActions, type SortOption } from "./HeaderActions";



type StoreHeaderProps = {
  storeName: string;
  subtitle?: string;
  searchValue: string;
  selectedSort: SortOption;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
};

export function StoreHeader({
  storeName,
  subtitle,
  searchValue,
  selectedSort,
  onSearchChange,
  onSortChange,
}: StoreHeaderProps) {
  return (
    <header className="w-full border-b border-slate-200 bg-slate-300/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6">
        <div className="flex items-center justify-between gap-4">
          <HeaderBrand
            storeName={storeName}
            subtitle={subtitle}
          />
        </div>

        <HeaderActions
          onSearchChange={onSearchChange}
          onSortChange={onSortChange}
          searchValue={searchValue}
          selectedSort={selectedSort}
        />

      </div>
    </header>
  );
}