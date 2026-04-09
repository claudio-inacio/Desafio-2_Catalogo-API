import { useState } from "react";

const FAVORITES_STORAGE_KEY = "favorites";

function getFavoritesFromStorage(): number[] {
    try {
        const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);

        if (!stored) return [];

        const parsed = JSON.parse(stored);

        if (!Array.isArray(parsed)) return [];

        return parsed.filter((item) => typeof item === "number");
    } catch {
        return [];
    }
}

function saveLikedStorage(data: number[]) {
    return localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(data));
}

export function useFavorites() {
    const [favoriteIds, setFavoriteIds] = useState<number[]>(getFavoritesFromStorage());


    function toggleFavorite(productId: number) {
        const currentFavorites = getFavoritesFromStorage()

        if (currentFavorites.length === 0) {
            saveLikedStorage([productId])
            return setFavoriteIds([productId])
        }
        currentFavorites.map(() => {
            let result = [];
            if (currentFavorites.includes(productId)) {
                result = currentFavorites.filter((id) => id !== productId);
                saveLikedStorage(result)
                setFavoriteIds(result)
                return result;
            }
            result = [...currentFavorites, productId];
            saveLikedStorage(result)
            setFavoriteIds(result)
            return result
        });
    }

    function isFavorite(productId: number) {
        return favoriteIds.includes(productId);
    }


    return {
        favoriteIds,
        toggleFavorite,
        isFavorite,
    };
}