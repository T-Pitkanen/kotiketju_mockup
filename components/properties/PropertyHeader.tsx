import Link from "next/link";

interface PropertyHeaderProps {
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  featured: boolean;
}

export function PropertyHeader({ title, address, city, state, zipCode, featured }: PropertyHeaderProps) {
  return (
    <>
      {/* Back Button */}
      <Link
        href="/properties"
        className="inline-block mb-4 sm:mb-6 text-gray-700 hover:text-gray-900 font-medium text-sm sm:text-base"
      >
        ← Takaisin kohteisiin
      </Link>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pr-2">{title}</h1>
        
        </div>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          {address}, {city}, {state} {zipCode}
        </p>
      </div>
    </>
  );
}
