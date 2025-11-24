import Image from 'next/image';
import Link from 'next/link';

interface ActivityProperty {
  id: string;
  title: string;
  mainImage: string | null;
  price: number;
  city: string;
  listingType: string;
}

interface RecentActivityProps {
  activities: {
    id: string;
    propertyId: string;
    viewedAt: Date;
    property: ActivityProperty;
  }[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  if (activities.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Viimeksi katsotut kohteet</h3>
        <div className="text-center py-8 text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <p>Et ole vielä katsonut yhtään kohdetta</p>
          <Link href="/properties" className="text-primary hover:underline mt-2 inline-block">
            Selaa kohteita
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold mb-4">Viimeksi katsotut</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <Link
            key={activity.id}
            href={`/properties/${activity.propertyId}`}
            className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
          >
            {/* Property Image */}
            <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
              {activity.property.mainImage ? (
                <Image
                  src={activity.property.mainImage}
                  alt={activity.property.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                  Ei kuvaa
                </div>
              )}
            </div>

            {/* Property Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-gray-900 truncate mb-0.5">
                {activity.property.title}
              </h4>
              <p className="text-xs text-gray-600 truncate mb-1">
                {activity.property.city}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-xs text-primary">
                  {activity.property.price.toLocaleString('fi-FI')} €
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
