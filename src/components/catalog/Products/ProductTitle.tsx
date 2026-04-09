type Props = {
    title: string;
};

export function ProductTitle({ title }: Props) {
    return (
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
            {title}
        </h3>
    );
}