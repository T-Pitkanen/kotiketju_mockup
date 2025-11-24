import { mockDb } from '@/lib/mockData';
import { addDays, startOfDay } from 'date-fns';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const propertyId = searchParams.get('propertyId');

  if (!propertyId) {
    return new Response(JSON.stringify({ error: 'Property ID required' }), { status: 400 });
  }

  try {
    const today = startOfDay(new Date());
    const thirtyDaysLater = addDays(today, 30);

    const availability = await mockDb.tourAvailability.findMany({
      where: {
        propertyId,
        date: {
          gte: today,
          lte: thirtyDaysLater,
        },
        isAvailable: true,
      },
      orderBy: { date: 'asc' },
    });

    return new Response(JSON.stringify(availability), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch availability',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), { status: 500 });
  }
}