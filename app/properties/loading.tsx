export default function PropertiesLoading() {
  return (
    <div className="flex h-[calc(100vh-80px)]">
      {/* Left Sidebar Skeleton */}
      <div className="w-72 border-r border-gray-200 bg-white p-6 shrink-0 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-32 mb-6"></div>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-28"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Middle - Properties Grid Skeleton */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <div className="h-5 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
              {/* Image Skeleton */}
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-lg"></div>
                <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full"></div>
              </div>
              
              {/* Content Skeleton */}
              <div className="p-5 space-y-3">
                <div className="h-8 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded w-48"></div>
                <div className="h-5 bg-gray-200 rounded w-40"></div>
                <div className="h-4 bg-gray-200 rounded w-36"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar Skeleton */}
      <div className="w-96 border-l border-gray-200 bg-gray-50 p-6 shrink-0 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
        <div className="space-y-3">
          <div className="h-32 bg-gray-200 rounded-lg"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
          <div className="h-4 bg-gray-200 rounded w-28"></div>
        </div>
      </div>
    </div>
  );
}
