interface PropertyPricingProps {
  price: number;
  listingType: string;
  propertyType: string;
  bedrooms: number;
}

export function PropertyPricing({ price, listingType, propertyType, bedrooms }: PropertyPricingProps) {
  const isRental = listingType.toLowerCase().includes('vuokra');
  
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 shrink-0">
          {price.toLocaleString('fi-FI')} €{isRental ? '/kk' : ''}
        </span>
        <span className="text-gray-600 text-sm sm:text-base md:text-lg shrink-0">
          {bedrooms}h, k, s
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <span className="text-gray-900 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-semibold shadow-md text-sm sm:text-base">
          {listingType}
        </span>
        <span className="bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-semibold text-gray-700 text-sm sm:text-base">
          {propertyType}
        </span>
      </div>
    </div>
  );
}
