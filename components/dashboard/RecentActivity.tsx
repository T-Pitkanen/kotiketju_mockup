import { mockDb } from "@/lib/mockData";

export async function RecentActivity() {
  const recentProperties = await mockDb.property.findMany({
    orderBy: { updatedAt: "desc" },
    take: 5,
    select: {
      id: true,
      title: true,
      city: true,
      price: true,
      published: true,
      updatedAt: true,
    },
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Viimeaikainen toiminta</h3>
      <div className="space-y-3">
        {recentProperties.length === 0 ? (
          <p className="text-gray-500">Ei viimeaikaista toimintaa</p>
        ) : (
          recentProperties.map((property) => (
            <div
              key={property.id}
              className="flex items-start justify-between border-b pb-3 last:border-b-0 gap-3"
            >
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 truncate">
                  {property.title}
                </p>
                <p className="text-sm text-gray-600 truncate">
                  {property.city} • {Number(property.price).toLocaleString("fi-FI")} €
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span
                  className={`text-xs px-2 py-1 rounded whitespace-nowrap ${
                    property.published
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {property.published ? "Julkaistu" : "Luonnos"}
                </span>
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {new Date(property.updatedAt).toLocaleDateString("fi-FI")}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
