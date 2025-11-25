export default function PropertiesLoading() {
  return (
    <div className="flex h-[calc(100vh-80px)] relative bg-gray-50">
      <div className="w-full overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar Skeleton */}
            <div className="w-72 shrink-0 animate-pulse">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
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
            </div>

            {/* Middle - Properties Grid Skeleton */}
            <div className="flex-1">
              <div className="h-5 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                    {/* Image Skeleton - matches h-56 sm:h-64 */}
                    <div className="h-56 sm:h-64 bg-gray-200 relative">
                      <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-lg"></div>
                      <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content Skeleton - matches p-4 sm:p-6 */}
                    <div className="p-4 sm:p-6 space-y-3">
                      <div className="h-7 sm:h-8 bg-gray-200 rounded w-32"></div>
                      <div className="h-5 sm:h-6 bg-gray-200 rounded w-48"></div>
                      <div className="h-5 bg-gray-200 rounded w-40"></div>
                      <div className="h-5 bg-gray-200 rounded w-36"></div>
                      <div className="h-5 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
