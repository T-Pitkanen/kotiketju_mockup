'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function ProfileTabs() {
	const pathname = usePathname();

	const tabs = [
		{
			name: 'Yleiskatsaus',
			href: '/profile',
			icon: (
				<svg
					className="w-full h-full"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/>
				</svg>
			),
		},
		{
			name: 'Suosikit',
			href: '/profile/favorites',
			icon: (
				<svg
					className="w-full h-full"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			),
		},
		{
			name: 'Blockchain',
			href: '/profile/blockchain',
			icon: (
				<svg
					className="w-full h-full"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
					/>
				</svg>
			),
		},
		{
			name: 'Asetukset',
			href: '/profile/settings',
			icon: (
				<svg
					className="w-full h-full"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			),
		},
	];

	return (
		<div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
			<div className="max-w-4xl mx-auto px-4 sm:px-6">
				<nav className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide -mb-px" aria-label="Tabs">
					{tabs.map((tab) => {
						const isActive = pathname === tab.href;
						return (
							<Link
								key={tab.name}
								href={tab.href}
								className={`
                  flex items-center gap-1.5 sm:gap-2 py-3 sm:py-4 px-2 sm:px-3 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0
                  ${
										isActive
											? 'border-accent-600 text-white dark:text-white'
											: 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
									}
                `}
							>
								<span className="w-4 h-4 sm:w-5 sm:h-5 shrink-0">{tab.icon}</span>
								<span className="hidden xs:inline sm:inline">{tab.name}</span>
							</Link>
						);
					})}
				</nav>
			</div>
		</div>
	);
}
