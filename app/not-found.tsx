import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
			<div className="text-center">
				<div className="mb-8">
					<h1 className="text-9xl font-bold text-primary">404</h1>
					<div className="text-6xl mb-4">🏠</div>
				</div>

				<h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
					Sivua ei löytynyt
				</h2>

				<p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
					Pahoittelemme, emme löytäneet etsimääsi sivua. Hakemasi kohde on
					saatettu siirtää tai se ei ole enää olemassa.
				</p>

				<div className="flex gap-4 justify-center flex-wrap">
					<Link
						href="/"
						className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors font-medium"
					>
						Etusivulle
					</Link>
					<Link
						href="/properties"
						className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
					>
						Selaa kohteita
					</Link>
					<Link
						href="/contact"
						className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
					>
						Ota yhteyttä
					</Link>
				</div>

				<div className="mt-12 text-sm text-gray-500 dark:text-gray-500">
					<p>
						Tarvitsetko apua?{' '}
						<Link href="/contact" className="text-primary hover:underline">
							Ota yhteyttä asiakastukeemme
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
