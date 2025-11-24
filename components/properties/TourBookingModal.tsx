'use client';

import { useState, useEffect } from 'react';

interface TourBookingModalProps {
	isOpen: boolean;
	onClose: () => void;
	propertyId: string;
	propertyTitle: string;
}

export function TourBookingModal({
	isOpen,
	onClose,
	propertyId,
	propertyTitle,
}: TourBookingModalProps) {
	const [selectedDate, setSelectedDate] = useState<string>('');
	const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
	const [availableDates, setAvailableDates] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [booking, setBooking] = useState(false);
	const [success, setSuccess] = useState(false);

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		notes: '',
	});

	useEffect(() => {
		if (isOpen) {
			fetchAvailability();
		}
	}, [isOpen, propertyId]);

	const fetchAvailability = async () => {
		try {
			const response = await fetch(`/api/tour-dates?propertyId=${propertyId}`);
			if (response.ok) {
				const data = await response.json();
				setAvailableDates(data);
			}
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	const handleDateChange = (date: string) => {
		setSelectedDate(date);
		setSelectedTimeSlot('');
	};

	const getAvailableTimeSlots = () => {
		if (!selectedDate) return [];
		const availability = availableDates.find(
			(a) => a.date.split('T')[0] === selectedDate
		);
		return availability ? JSON.parse(availability.timeSlots) : [];
	};

	const handleBooking = async (e: React.FormEvent) => {
		e.preventDefault();
		setBooking(true);

		try {
			const response = await fetch('/api/tour-booking', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					propertyId,
					date: selectedDate,
					timeSlot: selectedTimeSlot,
					visitorName: formData.name,
					visitorEmail: formData.email,
					visitorPhone: formData.phone,
					notes: formData.notes,
				}),
			});

			if (response.ok) {
				setSuccess(true);
				setTimeout(() => {
					onClose();
					setSuccess(false);
					setSelectedDate('');
					setSelectedTimeSlot('');
					setFormData({ name: '', email: '', phone: '', notes: '' });
				}, 2000);
			} else {
				const error = await response.json();
				alert(`❌ Varaus epäonnistui: ${error.error}`);
			}
		} catch (error) {
			alert('❌ Varaus epäonnistui. Yritä uudelleen.');
		} finally {
			setBooking(false);
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black transition-opacity opacity-80"
				onClick={onClose}
			/>

			{/* Modal */}
			<div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-bold text-gray-900">Varaa esittelyvuoro</h2>
						<p className="text-sm text-gray-600 mt-1">{propertyTitle}</p>
					</div>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-600 transition-colors"
						aria-label="Sulje"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				{/* Content */}
				<div className="p-6">
					{success ? (
						<div className="text-center py-12">
							<div className="text-6xl mb-4">✅</div>
							<h3 className="text-2xl font-bold text-green-600 mb-2">Varaus onnistui!</h3>
							<p className="text-gray-600">Lähetimme vahvistuksen sähköpostiisi.</p>
						</div>
					) : loading ? (
						<div className="text-center py-12">
							<div className="text-4xl mb-4">⏳</div>
							<p className="text-gray-600">Ladataan saatavilla olevia aikoja...</p>
						</div>
					) : availableDates.length === 0 ? (
						<div className="text-center py-12">
							<div className="text-4xl mb-4">📅</div>
							<p className="text-gray-600">Ei saatavilla olevia aikoja tällä hetkellä.</p>
							<p className="text-sm text-gray-500 mt-2">Ota yhteyttä välittäjään suoraan.</p>
						</div>
					) : (
						<form onSubmit={handleBooking} className="space-y-6">
							{/* Date Selection */}
							<div>
								<label className="block text-sm font-semibold text-gray-900 mb-3">
									Valitse päivä:
								</label>
								<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
									{availableDates.map((availability) => {
										const date = availability.date.split('T')[0];
										const dateObj = new Date(date);
										const formattedDate = dateObj.toLocaleDateString('fi-FI', {
											weekday: 'short',
											day: 'numeric',
											month: 'short',
										});

										return (
											<button
												key={date}
												type="button"
												onClick={() => handleDateChange(date)}
												className={`p-4 rounded-lg font-medium transition-all border-2 ${
													selectedDate === date
														? 'bg-accent text-white border-accent'
														: 'bg-white text-gray-700 border-gray-200 hover:border-accent hover:bg-accent/5'
												}`}
											>
												{formattedDate}
											</button>
										);
									})}
								</div>
							</div>

							{/* Time Slot Selection */}
							{selectedDate && (
								<div>
									<label className="block text-sm font-semibold text-gray-900 mb-3">
										Valitse aika:
									</label>
									<div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
										{getAvailableTimeSlots().map((slot: string) => (
											<button
												key={slot}
												type="button"
												onClick={() => setSelectedTimeSlot(slot)}
												className={`p-3 rounded-lg font-medium transition-all ${
													selectedTimeSlot === slot
														? 'bg-accent text-white'
														: 'bg-gray-100 hover:bg-gray-200 text-gray-700'
												}`}
											>
												{slot}
											</button>
										))}
									</div>
								</div>
							)}

							{/* Contact Form */}
							{selectedTimeSlot && (
								<>
									<div className="border-t pt-6">
										<h3 className="font-semibold text-gray-900 mb-4">Yhteystietosi:</h3>
										<div className="space-y-4">
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Nimi *
												</label>
												<input
													type="text"
													required
													value={formData.name}
													onChange={(e) => setFormData({ ...formData, name: e.target.value })}
													className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
													placeholder="Nimesi"
												/>
											</div>

											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Sähköposti *
												</label>
												<input
													type="email"
													required
													value={formData.email}
													onChange={(e) => setFormData({ ...formData, email: e.target.value })}
													className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
													placeholder="esimerkki@email.com"
												/>
											</div>

											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Puhelinnumero
												</label>
												<input
													type="tel"
													value={formData.phone}
													onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
													className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
													placeholder="+358 40 123 4567"
												/>
											</div>

											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Lisätiedot
												</label>
												<textarea
													value={formData.notes}
													onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
													className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
													rows={3}
													placeholder="Erityistoiveita tai kysymyksiä..."
												/>
											</div>
										</div>
									</div>

									<button
										type="submit"
										disabled={booking}
										className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
									>
										{booking ? 'Varataan...' : 'Vahvista varaus'}
									</button>
								</>
							)}
						</form>
					)}
				</div>
			</div>
		</div>
	);
}
