import { mockDb } from "@/lib/mockData";

export async function DashboardStats() {
  // Get stats
  const totalProperties = await mockDb.property.count();
  const publishedProperties = await mockDb.property.count({
    where: { published: true },
  });
  const featuredProperties = await mockDb.property.count({
    where: { featured: true },
  });

  const priceAggregate = await mockDb.property.aggregate({
    _avg: {
      price: true,
    },
  });

  const avgPrice = priceAggregate._avg.price
    ? Number(priceAggregate._avg.price)
    : 0;

  const stats = [
    {
      label: "Kohteet yhteensä",
      value: totalProperties,
      icon: "🏘️",
      color: "bg-blue-500",
    },
    {
      label: "Julkaistut",
      value: publishedProperties,
      icon: "✅",
      color: "bg-green-500",
    },
    {
      label: "Suositut",
      value: featuredProperties,
      icon: "⭐",
      color: "bg-yellow-500",
    },
    {
      label: "Keskihinta",
      value: `${avgPrice.toLocaleString("fi-FI", {
        maximumFractionDigits: 0,
      })} €`,
      icon: "💰",
      color: "bg-primary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 border-l-4"
          style={{ borderLeftColor: stat.color.replace("bg-", "#") }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
            <div className="text-4xl">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
