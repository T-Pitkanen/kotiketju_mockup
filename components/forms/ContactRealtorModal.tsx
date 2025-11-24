'use client';

import { useState } from 'react';

interface ContactRealtorModalProps {
	isOpen: boolean;
	onClose: () => void;
	propertyId: string;
	propertyTitle: string;
	realtorName?: string;
	realtorEmail?: string;
}

export function ContactRealtorModal({
	isOpen,
	onClose,
	propertyId,
	propertyTitle,
	realtorName,
	realtorEmail,
}: ContactRealtorModalProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			const response = await fetch('/api/contact-realtor', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...formData,
					propertyId,
					propertyTitle,
					realtorEmail,
				}),
			});

			if (response.ok) {
				setSubmitStatus('success');
				setTimeout(() => {
					onClose();
					setFormData({ name: '', email: '', phone: '', message: '' });
					setSubmitStatus('idle');
				}, 2000);
			} else {
				setSubmitStatus('error');
			}
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
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
			<div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
					<h2 className="text-xl font-bold text-gray-900">Ota yhteyttä</h2>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-600 transition-colors"
						aria-label="Sulje"
					>
						<svg
							className="w-6 h-6"
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
				<div className="p-6">
					{/* Property Info */}
					<div className="mb-6 p-4 bg-gray-50 rounded-lg">
						<p className="text-sm text-gray-600 mb-1">Kohde:</p>
						<p className="font-semibold text-gray-900">{propertyTitle}</p>
						{realtorName && (
							<p className="text-sm text-gray-600 mt-2">
								Välittäjä: <span className="font-medium">{realtorName}</span>
							</p>
						)}
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Nimi *
							</label>
							<input
								type="text"
								id="name"
								required
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
								placeholder="Nimesi"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Sähköposti *
							</label>
							<input
								type="email"
								id="email"
								required
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
								placeholder="esimerkki@email.com"
							/>
						</div>

						<div>
							<label
								htmlFor="phone"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Puhelinnumero
							</label>
							<input
								type="tel"
								id="phone"
								value={formData.phone}
								onChange={(e) =>
									setFormData({ ...formData, phone: e.target.value })
								}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
								placeholder="+358 40 123 4567"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Viesti *
							</label>
							<textarea
								id="message"
								required
								rows={4}
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
								placeholder="Kirjoita viestisi tähän..."
							/>
						</div>

						{/* Status Messages */}
						{submitStatus === 'success' && (
							<div className="p-3 bg-green-50 border border-green-200 rounded-lg">
								<p className="text-sm text-green-800">
									✓ Viesti lähetetty onnistuneesti!
								</p>
							</div>
						)}

						{submitStatus === 'error' && (
							<div className="p-3 bg-red-50 border border-red-200 rounded-lg">
								<p className="text-sm text-red-800">
									✗ Viestin lähetys epäonnistui. Yritä uudelleen.
								</p>
							</div>
						)}

						{/* Submit Button */}
						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-accent text-white py-3 rounded-lg hover:bg-accent/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSubmitting ? 'Lähetetään...' : 'Lähetä viesti'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
