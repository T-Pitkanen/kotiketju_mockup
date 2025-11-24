import { mockDb } from '@/lib/mockData';
import Image from 'next/image';
import Link from 'next/link';
import { FavoriteButton } from '@/components/ui/FavoriteButton';

export async function FeaturedProperties() {
	// Showcase mode - no authentication
	const user = null;

	const properties = await mockDb.property.findMany({
		where: {
			published: true,
			featured: true,
		},
		include: {
			realtor: true,
		},
		take: 4,
		orderBy: { createdAt: 'desc' },
	});

	if (properties.length === 0) {
		return null;
	}

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-6">
				{/* Header */}
				<div className="mb-12">
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						Koti, joka tuntuu omalta
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl">
						Jokainen meistä kaipaa paikkaa, jossa voi olla oma itsensä. Selaa 
						valikoimaamme ja anna sydämesi kertoa, mikä tuntuu kodilta. Me olemme 
						täällä auttamassa sinua löytämään sen.
					</p>
				</div>

				{/* Properties Grid - Masonry Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{properties.map((property, index) => (
						<div
							key={property.id}
							className={`${index === 0 ? 'md:row-span-2' : ''} relative group`}
						>
							<Link
								href={`/properties/${property.id}`}
								className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
							>
								{/* Property Image */}
								<div
									className={`relative ${
										index === 0 ? 'h-[500px]' : 'h-60'
									} overflow-hidden`}
								>
									{property.mainImage ? (
										<Image
											src={property.mainImage}
											alt={property.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-700"
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

								{/* Property Info Overlay */}
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
									<div className="text-white">
										<div className="text-3xl font-bold mb-2">
											€{Number(property.price).toLocaleString('fi-FI')}
										</div>
										<div className="text-sm mb-3">{property.address}</div>
										<div className="text-xs mb-3">
											{property.city}, {property.state} {property.zipCode}
										</div>
										<div className="flex items-center gap-6 text-sm">
											<div className="flex items-center gap-1">
												<span>{property.squareFeet.toLocaleString()}</span>
												<span className="text-white/80">m²</span>
											</div>
											<div className="flex items-center gap-1">
												<span>{property.bedrooms}</span>
												<span className="text-white/80">Makuuh.</span>
											</div>
											<div className="flex items-center gap-1">
												<span>{property.bathrooms.toString()}</span>
												<span className="text-white/80">Kylpyh.</span>
											</div>
										</div>
									</div>

									{/* Arrow Button */}
									<div className="absolute bottom-6 right-6">
										<div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent transition-colors">
											<svg
												className="w-5 h-5 text-white"
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
										</div>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
