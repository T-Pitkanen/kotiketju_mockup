import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Services } from "@/components/home/Services";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { Testimonials } from "@/components/home/Testimonials";
import { Statistics } from "@/components/home/Statistics";
import { BlockchainCTA } from "@/components/home/BlockchainCTA";
import { ExploreProperties } from "@/components/home/ExploreProperties";
import { FAQ } from "@/components/home/FAQ";
import { mockDb } from "@/lib/mockData";

export default async function Home(props: {
  searchParams: Promise<{ error?: string }>;
}) {
  const searchParams = await props.searchParams;
  
  let popularCities: string[] = [];
  
  try {
    const popularCitiesData = await mockDb.property.groupBy({
      by: ['city'],
      where: { published: true },
      _count: { city: true },
      orderBy: { _count: { city: 'desc' } },
      take: 4,
    });
    
    popularCities = popularCitiesData.map(item => item.city);
  } catch (error) {
    console.error('Mock data error:', error);
    // Use fallback cities if mock data fails
    popularCities = ['Helsinki', 'Tampere', 'Turku', 'Oulu'];
  }
  
  return (
    <main className="mx-auto">
      {searchParams.error === 'unauthorized' && (
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <strong>Access Denied:</strong> You do not have administrator privileges to access that page.
          </div>
        </div>
      )}
      
      <Hero popularCities={popularCities} />
      <Services />
      <Statistics />
      <Features />
      <FeaturedProperties />
      <Testimonials />
      <ExploreProperties />
      <BlockchainCTA />
      <FAQ />

    </main>
  );
}
