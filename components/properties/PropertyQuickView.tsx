'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ContactRealtorModal } from '../forms/ContactRealtorModal';

interface PropertyQuickViewProps {
	property: {
		id: string;
		title: string;
		price: number;
		address: string;
		city: string;
		state: string | null;
		bedrooms: number;
		bathrooms: number;
		squareFeet: number;
		mainImage: string | null;
		listingType: string | null;
		description: string | null;
		garage: boolean;
		pool: boolean;
		garden: boolean;
		balcony: boolean;
		realtor: {
			name: string;
			email: string;
		} | null;
	};
	onClose: () => void;
}

export function PropertyQuickView({
	property,
	onClose,
}: PropertyQuickViewProps) {
	const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'about'>(
		'overview'
	);
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	return (
		<div className="h-full flex flex-col bg-white overflow-hidden">
			{/* Header Image */}
			<div className="relative h-40 bg-gray-200 shrink-0">
				{property.mainImage ? (
					<Image
						src={property.mainImage}
						alt={property.title}
						fill
						className="object-cover"
					/>
				) : (
					<div className="flex items-center justify-center h-full text-gray-400">
						Ei kuvaa
					</div>
				)}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
					aria-label="Sulje"
				>
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			{/* Content */}
			<div className="flex-1 overflow-y-auto">
				<div className="p-4">
					{/* Title and Price */}
					<h2 className="text-xl font-bold text-gray-900 mb-1">
						{property.title}
					</h2>
					<p className="text-gray-600 text-xs mb-3">
						{property.address}, {property.city}
					</p>

					{/* Tabs */}
					<div className="flex gap-4 border-b mb-4">
						<button
							onClick={() => setActiveTab('overview')}
							className={`pb-2 px-1 text-sm font-medium transition-colors ${
								activeTab === 'overview'
									? 'text-accent border-b-2 border-accent'
									: 'text-gray-500 hover:text-gray-700'
							}`}
						>
							Yleiskatsaus
						</button>
						<button
							onClick={() => setActiveTab('about')}
							className={`pb-2 px-1 text-sm font-medium transition-colors ${
								activeTab === 'about'
									? 'text-accent border-b-2 border-accent'
									: 'text-gray-500 hover:text-gray-700'
							}`}
						>
							Tietoa
						</button>
					</div>

					{/* Tab Content */}
					{activeTab === 'overview' && (
						<div className="space-y-4">
							{/* Description */}
							<div>
								<h3 className="font-semibold text-gray-900 mb-2 text-sm">Kuvaus</h3>
								<p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
									{property.description || 'Kuvausta ei saatavilla.'}
								</p>
							</div>

							{/* Property Details */}
							<div className="grid grid-cols-2 gap-3">
								<div className="flex items-center gap-2 text-xs">
									<svg
										className="w-4 h-4 text-gray-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>
									<span className="text-gray-700">
										{property.bedrooms} Huonetta
									</span>
								</div>
								<div className="flex items-center gap-2 text-xs">
									<svg
										className="w-4 h-4 text-gray-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
										/>
									</svg>
									<span className="text-gray-700">
										{property.bathrooms} Kylpyhuonetta
									</span>
								</div>
								<div className="flex items-center gap-2 text-xs col-span-2">
									<svg
										className="w-4 h-4 text-gray-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
										/>
									</svg>
									<span className="text-gray-700">
										{property.squareFeet.toLocaleString()} m²
									</span>
								</div>
							</div>

							{/* Amenities */}
							{(property.garage ||
								property.pool ||
								property.garden ||
								property.balcony) && (
								<div className="flex flex-wrap gap-2">
									{property.garage && (
										<span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
											Autotalli
										</span>
									)}
									{property.pool && (
										<span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
											Uima-allas
										</span>
									)}
									{property.garden && (
										<span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
											Puutarha
										</span>
									)}
									{property.balcony && (
										<span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
											Parveke
										</span>
									)}
								</div>
							)}
						</div>
					)}

					{activeTab === 'about' && (
						<div className="space-y-3">
							<div>
								<h3 className="font-semibold text-gray-900 mb-1 text-sm">
									Kohteen tyyppi
								</h3>
								<p className="text-gray-600 text-xs">
									{property.listingType || 'Ei saatavilla'}
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 mb-1 text-sm">Sijainti</h3>
								<p className="text-gray-600 text-xs">
									{property.city}, {property.state}
								</p>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Footer with Price and Actions */}
			<div className="border-t p-6 pb-50 bg-white shrink-0">
				<div className="flex items-center justify-between mb-4">
					<div>
						<p className="text-2xl font-bold text-gray-900">
							€{Number(property.price).toLocaleString('fi-FI')}
							{(property.listingType === 'For Rent' || property.listingType === 'vuokra') && (
								<span className="text-sm font-bold text-gray-700">/kk</span>
							)}
						</p>
					</div>
				</div>
				<div className="flex gap-3">
					<button 
						onClick={() => setIsContactModalOpen(true)}
						className="flex-1 bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
					>
						Ota yhteyttä
					</button>
					<Link
						href={`/properties/${property.id}`}
						className="flex-1 bg-accent text-white py-3 rounded-lg hover:bg-accent/80 transition-colors font-medium text-center"
					>
						Katso lisää
					</Link>
				</div>
			</div>

			{/* Contact Modal */}
			<ContactRealtorModal
				isOpen={isContactModalOpen}
				onClose={() => setIsContactModalOpen(false)}
				propertyId={property.id}
				propertyTitle={property.title}
				realtorName={property.realtor?.name}
				realtorEmail={property.realtor?.email}
			/>
		</div>
	);
}
