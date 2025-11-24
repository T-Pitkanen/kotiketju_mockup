'use client';

import Image from 'next/image';
import { useState } from 'react';
import { TourBookingModal } from './TourBookingModal';

interface Realtor {
	name: string;
	email: string | null;
	phone: string | null;
	bio: string | null;
	image: string | null;
}

interface PropertyAgentSidebarProps {
	realtor?: Realtor | null;
	propertyId: string;
	propertyTitle: string;
	createdAt: Date;
	updatedAt: Date;
}

export function PropertyAgentSidebar({
	realtor,
	propertyId,
	propertyTitle,
	createdAt,
	updatedAt,
}: PropertyAgentSidebarProps) {
	const [showTourBooking, setShowTourBooking] = useState(false);
	
	const handleScheduleTour = () => {
		setShowTourBooking(true);
	};

	const handleRequestInfo = () => {
		alert('Lisätietopyyntö tulossa pian!');
	};

	return (
		<div className="bg-linear-to-br from-gray-50 to-white p-6 rounded-2xl sticky top-24 border border-gray-100 shadow-lg">
			<h3 className="text-2xl font-bold mb-6 text-gray-900">
				Ota yhteyttä välittäjään
			</h3>
			{realtor ? (
				<>
					<div className="mb-6">
						<div className="font-bold text-xl text-center text-gray-900">
							{realtor.name}
						</div>
						{realtor.email && (
							<a
								href={`mailto:${realtor.email}`}
								className="text-primary hover:text-secondary transition-colors block mt-2 text-center text-sm"
							>
								{realtor.email}
							</a>
						)}
						{realtor.phone && (
							<a
								href={`tel:${realtor.phone}`}
								className="text-primary hover:text-secondary transition-colors block mt-1 text-center text-sm"
							>
								{realtor.phone}
							</a>
						)}
					</div>

					<div className="space-y-3">
						<button
							onClick={handleScheduleTour}
							className="w-full bg-primary text-white py-3 px-4 rounded-xl hover:shadow-xl transition-all font-semibold"
						>
							Varaa esittelyvuoro
						</button>
						<button
							onClick={handleRequestInfo}
							className="w-full border-2 border-primary text-primary py-3 px-4 rounded-xl hover:bg-primary/5 transition-all font-semibold"
						>
							Pyydä lisätietoja
						</button>
					</div>
				</>
			) : (
				<p className="text-gray-600 text-center py-4">
					Ei välittäjätietoja saatavilla
				</p>
			)}{' '}
			{/* Property Info */}
			<div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600 space-y-2">
				<div>
					<span className="font-semibold text-gray-900">Listattu:</span>{' '}
					{new Date(createdAt).toLocaleDateString('fi-FI')}
				</div>
				{updatedAt && (
					<div>
						<span className="font-semibold text-gray-900">Päivitetty:</span>{' '}
						{new Date(updatedAt).toLocaleDateString('fi-FI')}
					</div>
				)}
			</div>

			{/* Tour Booking Modal */}
			<TourBookingModal
				isOpen={showTourBooking}
				onClose={() => setShowTourBooking(false)}
				propertyId={propertyId}
				propertyTitle={propertyTitle}
			/>
		</div>
	);
}
