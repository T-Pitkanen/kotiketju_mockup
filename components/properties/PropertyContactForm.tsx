'use client';

import { useState, useRef } from 'react';

interface PropertyContactFormProps {
	propertyId: string;
	propertyTitle: string;
	realtorName?: string;
	realtorEmail?: string | null;
}

export function PropertyContactForm({
	propertyId,
	propertyTitle,
	realtorName,
	realtorEmail,
}: PropertyContactFormProps) {
	const [formState, setFormState] = useState<
		'idle' | 'submitting' | 'success' | 'error'
	>('idle');
	const [message, setMessage] = useState('');
	const formRef = useRef<HTMLFormElement>(null);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setFormState('submitting');

		const formData = new FormData(e.currentTarget);
		const data = {
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			phone: formData.get('phone') as string,
			message: formData.get('message') as string,
			propertyId,
			propertyTitle,
			realtorEmail: realtorEmail || '',
		};

		try {
			const response = await fetch('/api/contact-realtor', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Failed to send message');
			}

			setFormState('success');
			setMessage('Kiitos! Viestisi on lähetetty välittäjälle.');

			formRef.current?.reset();

			setTimeout(() => {
				setFormState('idle');
				setMessage('');
			}, 5000);
		} catch (error) {
			setFormState('error');
			setMessage(
				'Jokin meni pieleen. Yritä uudelleen tai ota yhteyttä välittäjään suoraan.'
			);
		}
	}

	return (
		<div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
			<h3 className="text-xl font-bold mb-2">Kiinnostunut tästä kohteesta?</h3>
			<p className="text-gray-600 mb-4">
				Lähetä viesti välittäjälle{' '}
				<span className="font-semibold">{realtorName}</span>
			</p>

			{formState === 'success' && (
				<div className="mb-4 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
					{message}
				</div>
			)}

			{formState === 'error' && (
				<div className="mb-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
					{message}
				</div>
			)}

			<form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
				<div className="grid md:grid-cols-2 gap-4">
					<div>
						<label htmlFor="name" className="block text-sm font-medium mb-1">
							Nimesi *
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
							placeholder="Matti Meikäläinen"
							disabled={formState === 'submitting'}
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium mb-1">
							Sähköpostisi *
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
							placeholder="matti@esimerkki.fi"
							disabled={formState === 'submitting'}
						/>
					</div>
				</div>

				<div>
					<label htmlFor="phone" className="block text-sm font-medium mb-1">
						Puhelinnumero
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
						placeholder="+358 40 123 4567"
						disabled={formState === 'submitting'}
					/>
				</div>

				<div>
					<label htmlFor="message" className="block text-sm font-medium mb-1">
						Viesti *
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows={4}
						className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
						placeholder={`Olen kiinnostunut kohteesta ${propertyTitle}. Pyydän lisätietoja.`}
						disabled={formState === 'submitting'}
					/>
				</div>

				<button
					type="submit"
					disabled={formState === 'submitting'}
					className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-hover transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{formState === 'submitting' ? 'Lähetetään...' : 'Lähetä viesti'}
				</button>

				<p className="text-xs text-gray-500 text-center">
					Lähettämällä tämän lomakkeen hyväksyt, että välittäjä ottaa sinuun
					yhteyttä.
				</p>
			</form>
		</div>
	);
}
