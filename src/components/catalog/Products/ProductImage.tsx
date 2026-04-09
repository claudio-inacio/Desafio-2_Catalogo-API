type ProductImageProps = {
    src: string;
    alt: string;
};

export function ProductImage({ src, alt }: ProductImageProps) {
    return (
        <div className="flex h-48 items-center justify-center rounded-xl bg-slate-50 p-4">
            <img
                src={src}
                alt={alt}
                className="h-full object-contain"
            />
        </div>
    );
}