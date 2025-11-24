import { mockDb } from "@/lib/mockData";
import { PropertiesLayout } from "@/components/properties/PropertiesLayout";

export default async function PropertiesPage(props: {
  searchParams: Promise<{
    search?: string;
    city?: string;
    minPrice?: string;
    maxPrice?: string;
    bedrooms?: string;
    bathrooms?: string;
    listingType?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  
  // Showcase mode - no authentication
  const user = null;
  
  const where: any = { published: true };

  if (searchParams.search && searchParams.search.trim()) {
    where.OR = [
      { title: { contains: searchParams.search, mode: "insensitive" } },
      { description: { contains: searchParams.search, mode: "insensitive" } },
      { address: { contains: searchParams.search, mode: "insensitive" } },
    ];
  }

  if (searchParams.city && searchParams.city.trim()) {
    where.city = searchParams.city;
  }

  if (searchParams.minPrice || searchParams.maxPrice) {
    where.price = {};
    if (searchParams.minPrice) {
      where.price.gte = parseFloat(searchParams.minPrice);
    }
    if (searchParams.maxPrice) {
      where.price.lte = parseFloat(searchParams.maxPrice);
    }
  }

  if (searchParams.bedrooms) {
    where.bedrooms = { gte: parseInt(searchParams.bedrooms) };
  }

  if (searchParams.bathrooms) {
    where.bathrooms = { gte: parseFloat(searchParams.bathrooms) };
  }

  if (searchParams.listingType && searchParams.listingType.trim()) {
    where.listingType = searchParams.listingType;
  }

  // Pagination
  const page = parseInt(searchParams.page || '1');
  const itemsPerPage = 50;
  const skip = (page - 1) * itemsPerPage;

  // Get total count for pagination
  const totalCount = await mockDb.property.count({ where });
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const properties = await mockDb.property.findMany({
    where,
    include: {
      realtor: true,
    },
    orderBy: { createdAt: "desc" },
    skip,
    take: itemsPerPage,
  });

  const serializedProperties = properties.map(property => ({
    ...property,
    price: Number(property.price),
    bathrooms: Number(property.bathrooms),
    squareFeet: Number(property.squareFeet),
    lotSize: property.lotSize ? Number(property.lotSize) : null,
    latitude: null,
    longitude: null,
    realtor: property.realtor || null,
  }));

  const cities = await mockDb.property.findMany({
    where: { published: true },
    select: { city: true },
    distinct: ["city"],
  });

  return (
    <main>
      <PropertiesLayout 
        properties={serializedProperties}
        isLoggedIn={!!user}
        searchParams={searchParams}
        cities={cities}
        currentPage={page}
        totalPages={totalPages}
        totalCount={totalCount}
      />
    </main>
  );
}