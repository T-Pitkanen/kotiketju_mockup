'use client';

import { useState, useEffect } from 'react';
import { addDays, format, startOfDay } from 'date-fns';

interface Property {
	id: string;
	title: string;
	city: string;
}

interface TourAvailability {
	id: string;
	propertyId: string;
	date: string;
	timeSlots: string;
	isAvailable: boolean;
}

const DEFAULT_TIME_SLOTS = [

	'13:00',
	'14:00',
	'15:00',
	'16:00',
    '17:00',
    '18:00',
    '19:00',
];

export function TourManagement() {
	const [properties, setProperties] = useState<Property[]>([]);
	const [selectedProperty, setSelectedProperty] = useState<string>('');
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [selectedTimes, setSelectedTimes] = useState<string[]>(DEFAULT_TIME_SLOTS);
	const [skipSundays, setSkipSundays] = useState(true);

	const [availability, setAvailability] = useState<TourAvailability[]>([]);

	useEffect(() => {
		fetchProperties();
	}, []);

	useEffect(() => {
		if (selectedProperty) {
			fetchAvailability();
		}
	}, [selectedProperty]);

	const fetchProperties = async () => {
		try {
			const response = await fetch('/api/properties');
			if (response.ok) {
				const data = await response.json();
				setProperties(data);
			}
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	const fetchAvailability = async () => {
		try {
			const response = await fetch(
				`/api/tour-dates?propertyId=${selectedProperty}`
			);
			if (response.ok) {
				const data = await response.json();
				setAvailability(data);
			}
		} catch (error) {
		}
	};

	const handleTimeToggle = (time: string) => {
		setSelectedTimes((prev) =>
			prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
		);
	};

	const handleBulkAdd = async () => {
		if (!selectedProperty || !startDate || !endDate) {
			alert('Valitse kiinteistö ja päivämäärät');
			return;
		}

		if (selectedTimes.length === 0) {
			alert('Valitse vähintään yksi aika');
			return;
		}

		setSaving(true);

		try {
			const response = await fetch('/api/tours/bulk-add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					propertyId: selectedProperty,
					startDate,
					endDate,
					timeSlots: selectedTimes,
					skipSundays,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				alert(`✅ Lisätty ${data.count} päivää onnistuneesti!`);
				fetchAvailability();
				setStartDate('');
				setEndDate('');
			} else {
				alert('❌ Virhe lisättäessä päiviä');
			}
		} catch (error) {
			alert('❌ Virhe lisättäessä päiviä');
		} finally {
			setSaving(false);
		}
	};

	const handleDelete = async (id: string) => {
		if (!confirm('Haluatko varmasti poistaa tämän päivän?')) return;

		try {
			const response = await fetch(`/api/tours/delete`, {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ id }),
			});

			if (response.ok) {
				alert('✅ Poistettu onnistuneesti!');
				fetchAvailability();
			} else {
				alert('❌ Virhe poistettaessa');
			}
		} catch (error) {
			alert('❌ Virhe poistettaessa');
		}
	};

	const handleToggleAvailability = async (id: string, currentStatus: boolean) => {
		try {
			const response = await fetch(`/api/tours/toggle`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ id, isAvailable: !currentStatus }),
			});

			if (response.ok) {
				fetchAvailability();
			} else {
				alert('❌ Virhe päivitettäessä');
			}
		} catch (error) {
			alert('❌ Virhe päivitettäessä');
		}
	};

	return (
		<div className="space-y-8">
			{/* Property Selection */}
			<div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
				<h2 className="text-xl font-bold mb-4">Valitse kiinteistö</h2>
				
				{/* Search Input */}
				<div className="mb-4">
					<input
						type="text"
						placeholder="Etsi kiinteistöä nimellä tai kaupungilla..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
					/>
				</div>

				<select
					value={selectedProperty}
					onChange={(e) => setSelectedProperty(e.target.value)}
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
				>
					<option value="">-- Valitse kiinteistö --</option>
					{properties
						.filter(
							(property) =>
								property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
								property.city.toLowerCase().includes(searchQuery.toLowerCase())
						)
						.map((property) => (
							<option key={property.id} value={property.id}>
								{property.title} - {property.city}
							</option>
						))}
				</select>
			</div>

			{selectedProperty && (
				<>
					{/* Bulk Add Section */}
					<div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
						<h2 className="text-xl font-bold mb-4">Lisää useita päiviä kerralla</h2>

						<div className="grid md:grid-cols-2 gap-4 mb-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Alkupäivä
								</label>
								<input
									type="date"
									value={startDate}
									onChange={(e) => setStartDate(e.target.value)}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Loppupäivä
								</label>
								<input
									type="date"
									value={endDate}
									onChange={(e) => setEndDate(e.target.value)}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
								/>
							</div>
						</div>

						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Saatavilla olevat ajat
							</label>
							<div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
								{DEFAULT_TIME_SLOTS.map((time) => (
									<button
										key={time}
										type="button"
										onClick={() => handleTimeToggle(time)}
										className={`p-2 rounded-lg font-medium transition-colors ${
											selectedTimes.includes(time)
												? 'bg-accent text-white'
												: 'bg-gray-100 hover:bg-gray-200 text-gray-700'
										}`}
									>
										{time}
									</button>
								))}
							</div>
						</div>

						<div className="mb-4">
							<label className="flex items-center gap-2">
								<input
									type="checkbox"
									checked={skipSundays}
									onChange={(e) => setSkipSundays(e.target.checked)}
									className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
								/>
								<span className="text-sm text-gray-700">
									Ohita sunnuntait
								</span>
							</label>
						</div>

						<button
							onClick={handleBulkAdd}
							disabled={saving}
							className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{saving ? 'Lisätään...' : 'Lisää päivät'}
						</button>
					</div>

					{/* Existing Availability */}
					<div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
						<h2 className="text-xl font-bold mb-4">Olemassa olevat päivät</h2>

						{availability.length === 0 ? (
							<p className="text-gray-500 text-center py-8">
								Ei saatavilla olevia päiviä
							</p>
						) : (
							<div className="space-y-3">
								{availability.map((avail) => {
									const dateObj = new Date(avail.date);
									const timeSlots = JSON.parse(avail.timeSlots);

									return (
										<div
											key={avail.id}
											className={`p-4 rounded-lg border-2 transition-colors ${
												avail.isAvailable
													? 'border-green-200 bg-green-50'
													: 'border-gray-200 bg-gray-50'
											}`}
										>
											<div className="flex items-center justify-between">
												<div className="flex-1">
													<div className="font-semibold text-gray-900">
														{format(dateObj, 'EEEE, d.M.yyyy')}
													</div>
													<div className="text-sm text-gray-600 mt-1">
														Ajat: {timeSlots.join(', ')}
													</div>
												</div>

												<div className="flex items-center gap-2">
													<button
														onClick={() =>
															handleToggleAvailability(
																avail.id,
																avail.isAvailable
															)
														}
														className={`px-3 py-1 rounded-lg text-sm font-medium ${
															avail.isAvailable
																? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
																: 'bg-green-100 text-green-700 hover:bg-green-200'
														}`}
													>
														{avail.isAvailable
															? 'Piilota'
															: 'Aktivoi'}
													</button>

													<button
														onClick={() => handleDelete(avail.id)}
														className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200"
													>
														Poista
													</button>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
}
