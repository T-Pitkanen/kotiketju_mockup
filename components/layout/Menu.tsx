'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Menu({
	isLoggedIn = false,
	userName,
}: {
	isLoggedIn?: boolean;
	userName?: string;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
			<div className="max-w-7xl mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 group">
						<Image
							src="/kotiketju-logo.png"
							alt="KotiKetju Logo"
							width={82}
							height={82}
							className="object-contain"
						/>
						{/* <span className="text-xl font-semibold text-gray-900">
							KotiKetju
						</span> */}
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						<Link
							href="/properties"
							className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
						>
							Kohteet
						</Link>
						<Link
							href="/contact"
							className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
						>
							Ota yhteyttä
						</Link>
						<Link
							href="/blog"
							className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
						>
							Blogi
						</Link>
						<Link
							href="/profile"
							className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
						>
							Profiili
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg transition-colors"
						aria-label="Toggle menu"
					>
						<span
							className={`block w-6 h-0.5 bg-gray-800 transition-transform ${
								isOpen ? 'rotate-45 translate-y-2' : ''
							}`}
						/>
						<span
							className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${
								isOpen ? 'opacity-0' : ''
							}`}
						/>
						<span
							className={`block w-6 h-0.5 bg-gray-800 transition-transform ${
								isOpen ? '-rotate-45 -translate-y-2' : ''
							}`}
						/>
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
						<div className="flex flex-col gap-3">
							<Link
								href="/properties"
								className="text-gray-700 hover:text-gray-900 transition-colors font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50"
								onClick={() => setIsOpen(false)}
							>
								Kohteet
							</Link>
							<Link
								href="/contact"
								className="text-gray-700 hover:text-gray-900 transition-colors font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50"
								onClick={() => setIsOpen(false)}
							>
								Ota yhteyttä
							</Link>
							<Link
								href="/blog"
								className="text-gray-700 hover:text-gray-900 transition-colors font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50"
								onClick={() => setIsOpen(false)}
							>
								Blogi
							</Link>
							<Link
								href="/profile"
								className="text-gray-700 hover:text-gray-900 transition-colors font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50"
								onClick={() => setIsOpen(false)}
							>
								Profiili
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
