interface PropertyAmenitiesProps {
  parking?: number | null;
  garage?: boolean | null;
  pool?: boolean | null;
  garden?: boolean | null;
  balcony?: boolean | null;
  furnished?: boolean | null;
  lotSize?: number | null;
}

export function PropertyAmenities({
  parking,
  garage,
  pool,
  garden,
  balcony,
  furnished,
  lotSize,
}: PropertyAmenitiesProps) {
  const amenities = [];

  if (parking) amenities.push(`Pysäköintipaikkoja: ${parking}`);
  if (garage) amenities.push("Autotalli");
  if (pool) amenities.push("Uima-allas");
  if (garden) amenities.push("Puutarha");
  if (balcony) amenities.push("Parveke");
  if (furnished) amenities.push("Kalustettu");
  if (lotSize) amenities.push(`Tontin koko: ${lotSize.toLocaleString()} m²`);

  if (amenities.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">Ominaisuudet & Mukavuudet</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-primary text-xl font-bold">✓</span>
            </div>
            <span className="text-gray-800 font-medium">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
