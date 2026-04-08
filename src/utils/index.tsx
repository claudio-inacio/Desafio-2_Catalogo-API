export function formatCategoryName(category: string) {
    return category
        .replace(/'/g, "") // remove apostrofo
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
}