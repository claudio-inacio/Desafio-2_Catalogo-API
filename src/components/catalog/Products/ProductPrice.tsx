type Props = {
  price: number;
};

export function ProductPrice({ price }: Props) {
  return (
    <span className="text-sm font-bold text-slate-900">
      R${price.toFixed(2)}
    </span>
  );
}