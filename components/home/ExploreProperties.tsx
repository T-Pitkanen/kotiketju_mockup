import { mockDb } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';

export async function ExploreProperties() {
	// Get 6 random published properties
	const properties = await mockDb.property.findMany({
		where: {
			published: true,
			mainImage: { not: null },
		},
		select: {
			id: true,
			title: true,
			price: true,
			address: true,
			city: true,
			state: true,
			bedrooms: true,
			bathrooms: true,
			mainImage: true,
			listingType: true,
		},
		take: 6,
		orderBy: { createdAt: 'desc' },
	});

	if (properties.length === 0) {
		return null;
	}

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="flex items-center justify-between mb-12">
					<div>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
							Inspiraatiota kotihakuun
						</h2>
						<p className="text-gray-600 text-lg max-w-3xl">
							Olemme valinneet sinulle parhaat kohteet ympäri Suomea. Jokaisella 
							on oma tarinansa ja persoonansa. Ehkä juuri yksi näistä on se 
							paikka, jossa kirjoitat seuraavan luvun elämästäsi.
						</p>
					</div>
					<Link
						href="/properties"
						className="hidden lg:inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
					>
						Katso kaikki kohteet
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
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Link>
				</div>

				{/* Properties Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{properties.map((property) => (
						<Link
							key={property.id}
							href={`/properties/${property.id}`}
							className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
						>
							{/* Property Image */}
							<div className="relative h-64 overflow-hidden">
								{property.mainImage ? (
									<Image
										src={property.mainImage}
										alt={property.title}
										fill
										className="object-cover group-hover:scale-102 transition-transform duration-700"
									/>
								) : (
									<div className="flex items-center justify-center h-full bg-gray-200 text-gray-400">
										Ei kuvaa
									</div>
								)}

								{/* KotiKetju Logo - Top Right */}
								<div className="absolute top-3 right-3 z-10 bg-white rounded-lg p-1.5 shadow-md">
									<Image
										src="/kotiketju-logo.png"
										alt="KotiKetju"
										width={32}
										height={32}
										className="object-contain"
									/>
								</div>
							</div>

							{/* Property Details */}
							<div className="p-5">
								{/* Price */}
								<div className="text-2xl font-bold text-gray-900 mb-2">
									{Number(property.price).toLocaleString('fi-FI')} €
								</div>

								{/* Square Meters and Rooms */}
								<div className="flex items-center gap-3 text-gray-600 mb-3 text-sm">
									<span>{property.bedrooms} Makuuh.</span>
									<span>•</span>
									<span>{property.bathrooms.toString()} Kylpyh.</span>
								</div>

								{/* Location */}
								<div className="text-gray-900 font-medium mb-1">
									{property.address}
								</div>
								<div className="text-gray-600 text-sm mb-2">
									{property.city}, {property.state}
								</div>

								{/* Property Type */}
								<div className="text-gray-600 text-sm">
									{property.listingType || 'Kerrostalo'}
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Mobile CTA */}
				<div className="text-center mt-12 lg:hidden">
					<Link
						href="/properties"
						className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
					>
						Katso kaikki kohteet
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
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
}
