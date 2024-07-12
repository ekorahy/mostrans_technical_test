export default function CharacterItemLoading() {
  return (
    <div className="animate-pulse rounded-md shadow">
      <div className="h-48 w-full rounded bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 w-full rounded bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-gray-300"></div>
          <div className="h-4 w-1/4 rounded bg-gray-300"></div>
          <span>-</span>
          <div className="h-4 w-1/4 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
