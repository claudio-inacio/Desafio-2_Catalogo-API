import { Heart } from "lucide-react";

type Props = {
  isFavorite?: boolean;
  onClick?: () => void;
};

export function ProductFavoriteButton({ isFavorite, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-sm hover:bg-slate-50"
    >
      <Heart
        className={`h-4 w-4 ${
          isFavorite ? "fill-red-500 text-red-500" : "text-slate-400"
        }`}
      />
    </button>
  );
}