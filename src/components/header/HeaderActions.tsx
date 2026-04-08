import { Heart } from "lucide-react";

type HeaderActionsProps = {
  favoritesCount?: number;
  onFavoritesClick?: () => void;  
};

export function HeaderActions({
  favoritesCount = 0,
  onFavoritesClick,
  
}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onFavoritesClick}
        className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        aria-label="Abrir favoritos"
      >
        <Heart className="h-5 w-5" />
        {favoritesCount > 0 ? (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-semibold text-slate-900">
            {favoritesCount}
          </span>
        ) : null}
      </button>
    </div>
  );
}