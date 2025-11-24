import { mockDb } from "@/lib/mockData";

export async function PropertyByCity() {
  // Get property count and average price by city
  const citiesData = await mockDb.property.groupBy({
    by: ["city"],
    _count: {
      city: true,
    },
    _avg: {
      price: true,
    },
    where: {
      published: true,
    },
    orderBy: {
      _count: {
        city: "desc",
      },
    },
    take: 10, // Top 10 cities
  });

  const cities = citiesData.map((city) => ({
    city: city.city,
    count: city._count.city,
    avgPrice: city._avg.price ? Number(city._avg.price) : 0,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Kohteet kaupungeittain</h3>
      <div className="space-y-3">
        {cities.length === 0 ? (
          <p className="text-gray-500">Ei julkaistuja kohteita vielä</p>
        ) : (
          cities.map((city, index) => (
            <div key={index} className="border-b pb-3 last:border-b-0">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">{city.city}</span>
                <span className="text-sm text-gray-600">
                  {city.count} {city.count === 1 ? "kohde" : "kohdetta"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="grow bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${(city.count / cities[0].count) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-primary whitespace-nowrap">
                  Ka: {city.avgPrice.toLocaleString("fi-FI", {
                    maximumFractionDigits: 0,
                  })}{" "}
                  €
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
