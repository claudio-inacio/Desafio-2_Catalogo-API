type Props = {
    description: string;
};

export function ProductDescription({ description }: Props) {
    return (
        <p className="text-xs text-slate-500 line-clamp-2">
            {description}
        </p>
    );
}