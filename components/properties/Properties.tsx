import { mockDb } from '@/lib/mockData';
import Image from 'next/image';
import Link from 'next/link';

export async function Properties() {
	const properties = await mockDb.property.findMany({
		where: { published: true },
		include: {
			realtor: true, 
		},
		orderBy: { createdAt: 'desc' },
	});

	if (properties.length === 0) {
		return (
			<div className="text-center py-12">
				<p className="text-gray-500">Asuntoja ei löydy tällä hetkellä.</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{properties.map((property) => (
				<Link
					key={property.id}
					href={`/properties/${property.id}`}
					className="rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow block"
				>
					{/* Property Image */}
					<div className="relative h-48 bg-gray-200">
						{property.mainImage ? (
							<Image
								src={property.mainImage}
								alt={property.title}
								fill
								className="object-cover"
							/>
						) : (
							<div className="flex items-center justify-center h-full text-gray-400">
								Ei kuvaa saatavilla
							</div>
						)}
						
						<div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs font-semibold">
							{property.listingType}
						</div>
					</div>

					{/* Property Details */}
					<div className="p-4">
						<h3 className="text-xl font-bold mb-2">{property.title}</h3>
						<p className="text-2xl font-bold text-gray-700 mb-2">
							{Number(property.price).toLocaleString('fi-FI')} €
						</p>
						<p className="text-gray-600 text-sm mb-3">
							{property.address}, {property.city}, {property.state}{' '}
							{property.zipCode}
						</p>

						{/* Property Features */}
						<div className="flex gap-4 text-sm text-gray-700 mb-3">
							<span> {property.bedrooms} makuuhuonetta</span>
							<span> {property.bathrooms.toString()} kylpyhuonetta</span>
							<span> {property.squareFeet.toLocaleString()} m²</span>
						</div>

						<p className="text-gray-600 text-sm line-clamp-2 mb-3">
							{property.description}
						</p>

						{/* Amenities */}
						<div className="flex flex-wrap gap-2 mb-3">
							{property.garage && (
								<span className="bg-gray-100 px-2 py-1 rounded text-xs">
									 Autotalli
								</span>
							)}
							{property.pool && (
								<span className="bg-gray-100 px-2 py-1 rounded text-xs">
									 Uima-allas
								</span>
							)}
							{property.garden && (
								<span className="bg-gray-100 px-2 py-1 rounded text-xs">
									 Puutarha
								</span>
							)}
							{property.balcony && (
								<span className="bg-gray-100 px-2 py-1 rounded text-xs">
									 Parveke
								</span>
							)}
						</div>

						{/* Agent Info */}
						{property.realtor && (
							<div className="border-t pt-3 mt-3 text-sm text-gray-600">
								<p className="font-semibold">
									Välittäjä: {property.realtor.name}
								</p>
								{property.realtor.phone && <p>📞 {property.realtor.phone}</p>}
							</div>
						)}

						<button className="w-full mt-3 bg-primary text-white py-2 rounded hover:bg-primary-hover transition-colors">
							Näytä tiedot
						</button>
					</div>
				</Link>
			))}
		</div>
	);
}
