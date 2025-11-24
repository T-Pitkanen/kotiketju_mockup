'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
	}, [error]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
			<div className="text-center max-w-2xl">
				<div className="mb-8">
					<div className="text-8xl mb-4">⚠️</div>
					<h1 className="text-5xl font-bold text-red-600 dark:text-red-500 mb-2">
						Hups!
					</h1>
				</div>

				<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
					Jotain meni pieleen
				</h2>

				<p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
					Pahoittelemme, mutta tapahtui odottamaton virhe. Älä huoli, tiimimme
					on saanut ilmoituksen ja työskentelemme asian korjaamiseksi.
				</p>

				{error.message && (
					<div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
						<p className="text-sm text-red-800 dark:text-red-300 font-mono">
							{error.message}
						</p>
					</div>
				)}

				<div className="flex gap-4 justify-center flex-wrap">
					<button
						onClick={reset}
						className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors font-medium"
					>
						Yritä uudelleen
					</button>
					<Link
						href="/"
						className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
					>
						Etusivulle
					</Link>
					<Link
						href="/contact"
						className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
					>
						Ota yhteyttä
					</Link>
				</div>

				<div className="mt-12 text-sm text-gray-500 dark:text-gray-500">
					<p>Jos ongelma jatkuu, ota yhteyttä asiakastukeemme.</p>
				</div>
			</div>
		</div>
	);
}
