export default function Loading() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
			<div className="text-center">
				<div className="mb-8">
					{/* Animated spinner */}
					<div className="relative w-24 h-24 mx-auto">
						<div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
						<div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
					</div>
				</div>

				<h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
					Ladataan...
				</h2>

				<p className="text-gray-600 dark:text-gray-400">
					Odota hetki, haemme sisältöä
				</p>

				{/* Animated dots */}
				<div className="flex justify-center gap-2 mt-6">
					<div
						className="w-2 h-2 bg-primary rounded-full animate-bounce"
						style={{ animationDelay: '0ms' }}
					></div>
					<div
						className="w-2 h-2 bg-primary rounded-full animate-bounce"
						style={{ animationDelay: '150ms' }}
					></div>
					<div
						className="w-2 h-2 bg-primary rounded-full animate-bounce"
						style={{ animationDelay: '300ms' }}
					></div>
				</div>
			</div>
		</div>
	);
}
