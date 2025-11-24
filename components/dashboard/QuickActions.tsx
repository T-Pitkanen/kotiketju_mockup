import { mockDb } from "@/lib/mockData";

export async function QuickActions() {
  const unpublishedCount = await mockDb.property.count({
    where: { published: false },
  });

  let unreadMessagesCount = 0;
  try {
    unreadMessagesCount = await mockDb.contactMessage.count({
      where: { isRead: false },
    });
  } catch (error) {
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Pikatoiminnot</h3>
      <div className="space-y-3">
        <a
          href="/dashboard/properties"
          className="block w-full bg-primary text-white text-center py-3 rounded-lg  hover:bg-accent/90 transition-colors font-medium"
        >
        Hallinnoi kohteita
        </a>

        <a
          href="/dashboard/messages"
          className="block w-full bg-accent text-white text-center py-3 rounded-lg hover:bg-accent/90 transition-colors font-medium relative"
        >
          Viestit
          {unreadMessagesCount > 0 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {unreadMessagesCount}
            </span>
          )}
        </a>

        <a
          href="/dashboard/tours"
          className="block w-full bg-primary text-white text-center hover:bg-accent/90 py-3 rounded-lg  transition-colors font-medium"
        >
          Esittelyvuorot
        </a>
        
        {unpublishedCount > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800">
              <strong>{unpublishedCount}</strong> {unpublishedCount === 1 ? 'kohde' : 'kohdetta'} odottaa julkaisua
            </p>
          </div>
        )}

        <div className="pt-3 border-t space-y-2">
          <a
            href="/properties"
            target="_blank"
            className="block text-sm text-primary hover:underline"
          >
            → Näytä julkinen kohteet-sivu
          </a>
          <a
            href="/"
            target="_blank"
            className="block text-sm text-primary hover:underline"
          >
            → Näytä etusivu
          </a>
        </div>
      </div>
    </div>
  );
}
