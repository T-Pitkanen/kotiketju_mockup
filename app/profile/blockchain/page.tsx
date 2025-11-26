import { BlockchainDashboard } from "@/components/blockchain/BlockchainDashboard";
import { ProfileTabs } from "@/components/profile/ProfileTabs";

export default async function BlockchainPage() {
  // Showcase mode - demo blockchain dashboard
  return (
    <main className="min-h-screen bg-gray-50">
      <ProfileTabs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlockchainDashboard />
      </div>
    </main>
  );
}
