import { TeamSection } from "@/components/home/TeamSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/layout/PageHero";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const params = await searchParams;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Ota yhteyttä"
        subtitle="Ota yhteyttä asiantunteviin kiinteistönvälittäjiimme"
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {params.success === "sent" && (
          <div className="mb-8 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700">
            <p className="font-semibold">
              ✅ Kiitos! Viestisi on lähetetty. Palaamme asiaan pian.
            </p>
          </div>
        )}

        <TeamSection />

        <ContactForm />

      </div>
    </div>
  );
}
