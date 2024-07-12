export default function PaginationNumberLoading() {
  return (
    <div className="flex animate-pulse items-center gap-2">
      <div className="h-4 w-4 rounded bg-gray-300"></div>
      <span>-</span>
      <div className="h-4 w-4 rounded bg-gray-300"></div>
    </div>
  );
}
