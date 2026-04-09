import { HeaderBrand } from "./HeaderBrand";
import { HeaderActions } from "./HeaderActions";
import type { CatalogSortOption } from "../catalog/Products/types/product.types";



type StoreHeaderProps = {
  storeName: string;
  subtitle?: string;
  searchValue: string;
  selectedSort: CatalogSortOption;
  onSearchChange: (value: string) => void;
  onSortChange: (value: CatalogSortOption) => void;
  loading: boolean;
};

export function StoreHeader({
  storeName,
  subtitle,
  loading,
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
          disabled={loading}
          searchValue={searchValue}
          selectedSort={selectedSort}
        />

      </div>
    </header>
  );
}