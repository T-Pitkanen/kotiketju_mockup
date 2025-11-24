interface PropertyKeyFeaturesProps {
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  yearBuilt?: number | null;
}

export function PropertyKeyFeatures({ bedrooms, bathrooms, squareFeet, yearBuilt }: PropertyKeyFeaturesProps) {
  return (
    <div className="mb-6">
      <div className="text-gray-600 text-lg">
        {bedrooms}h, k, s
      </div>
    </div>
  );
}
