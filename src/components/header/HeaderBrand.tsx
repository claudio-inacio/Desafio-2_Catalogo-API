type HeaderBrandProps = {
  storeName: string;
  subtitle?: string;
};

export function HeaderBrand({
  storeName,
  subtitle,
}: HeaderBrandProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">
        {storeName}
      </h1>

      {subtitle ? (
        <span className="mt-1 text-sm text-slate-500">
          {subtitle}
        </span>
      ) : null}
    </div>
  );
}