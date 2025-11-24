import { mockDb } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import { PropertyImageSwiper } from '@/components/properties/PropertyImageSwiper';
import { FavoriteButton } from '@/components/ui/FavoriteButton';
import { PropertyContactForm } from '@/components/properties/PropertyContactForm';
import { PropertyHeader } from '@/components/properties/PropertyHeader';
import { PropertyPricing } from '@/components/properties/PropertyPricing';
import { PropertyDescription } from '@/components/properties/PropertyDescription';
import { PropertyAmenities } from '@/components/properties/PropertyAmenities';
import { PropertyAgentSidebar } from '@/components/properties/PropertyAgentSidebar';
import { PropertyViewTracker } from '@/components/properties/PropertyViewTracker';
import PropertyBlockchainInfo from '@/components/properties/PropertyBlockchainInfo';

export default async function PropertyPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	// Showcase mode - no authentication
	const user = null;

	const property = await mockDb.property.findUnique({
		where: { id },
		include: {
			realtor: true,
		},
	});

	if (!property) {
		notFound();
	}

	return (
		<main className="max-w-6xl mx-auto p-4 sm:p-6">
			<PropertyViewTracker propertyId={property.id} isLoggedIn={!!user} />
			
			<PropertyHeader
				title={property.title}
				address={property.address}
				city={property.city}
				state={property.state}
				zipCode={property.zipCode}
				featured={property.featured}
			/>

			<PropertyPricing
				price={Number(property.price)}
				listingType={property.listingType}
				propertyType={property.propertyType}
				bedrooms={property.bedrooms}
			/>

			{/* Main Image */}
			<div className="relative mb-8">
				<PropertyImageSwiper
					images={
						property.images ||
						([property.mainImage].filter(Boolean) as string[])
					}
					title={property.title}
				/>

				{/* Favorite Button positioned over the image */}
				<div className="absolute top-4 right-4 z-20">
					<FavoriteButton
						propertyId={property.id}
						initialIsFavorite={false}
						isLoggedIn={!!user}
					/>
				</div>
			</div>

			<div className="grid md:grid-cols-3 gap-8">
				{/* Main Details */}
				<div className="md:col-span-2 space-y-8">

					<PropertyDescription description={property.description} />

					<PropertyAmenities
						parking={property.parking}
						garage={property.garage}
						pool={property.pool}
						garden={property.garden}
						balcony={property.balcony}
						furnished={property.furnished}
						lotSize={property.lotSize ? Number(property.lotSize) : null}
					/>

				{/* Blockchain Information */}
				{property.blockchainHash && (
					<PropertyBlockchainInfo
						blockchainHash={property.blockchainHash}
						blockchainVerified={property.blockchainVerified || false}
						smartContractAddress={property.smartContractAddress || ''}
					/>
				)}					{/* Contact Form */}
					<PropertyContactForm
						propertyId={property.id}
						propertyTitle={property.title}
						realtorName={property.realtor?.name || 'välittäjä'}
						realtorEmail={property.realtor?.email}
					/>
				</div>

				{/* Sidebar - Agent Contact */}
				<div className="md:col-span-1">
					<PropertyAgentSidebar
						realtor={property.realtor}
						propertyId={property.id}
						propertyTitle={property.title}
						createdAt={property.createdAt}
						updatedAt={property.updatedAt}
					/>
				</div>
			</div>
		</main>
	);
}
