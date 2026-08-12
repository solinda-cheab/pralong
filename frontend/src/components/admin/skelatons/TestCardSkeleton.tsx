export function TestCardSkeleton() {
  return (
    <div className="relative bg-white rounded-md border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between h-[185px] w-full animate-pulse">
      {/* Left Vertical Indicator Skeleton */}
      <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-slate-200 rounded-r" />

      {/* Header Skeleton */}
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="h-5 w-14 bg-slate-200 rounded" />
            <div className="h-4 w-28 bg-slate-200 rounded" />
          </div>
          <div className="h-5 w-5 bg-slate-200 rounded" />
        </div>

        {/* Title Skeleton */}
        <div className="mt-4 h-5 w-3/4 bg-slate-200 rounded" />

        {/* Description Skeleton */}
        <div className="mt-2 h-4 w-1/2 bg-slate-200 rounded" />
      </div>

      {/* Footer Skeleton */}
      <div className="flex items-center justify-between gap-2 w-full pt-1">
        <div className="flex items-center gap-2">
          <div className="h-4 w-20 bg-slate-200 rounded" />
          <div className="h-3 w-px bg-slate-200" />
          <div className="h-4 w-20 bg-slate-200 rounded" />
        </div>
        <div className="h-5 w-24 bg-slate-200 rounded" />
      </div>
    </div>
  );
}