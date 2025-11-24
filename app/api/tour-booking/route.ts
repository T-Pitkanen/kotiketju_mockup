import { mockDb } from '@/lib/mockData';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { propertyId, date, timeSlot, visitorName, visitorEmail, visitorPhone, notes } = body;

    if (!propertyId || !date || !timeSlot || !visitorName || !visitorEmail) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const existingBooking = await mockDb.tourBooking.findFirst({
      where: {
        propertyId,
        date: new Date(date),
        timeSlot,
        status: { not: 'cancelled' },
      },
    });

    if (existingBooking) {
      return new Response(JSON.stringify({ error: 'Time slot already booked' }), { status: 409 });
    }

    const booking = await mockDb.tourBooking.create({
      data: {
        propertyId,
        date: new Date(date),
        timeSlot,
        visitorName,
        visitorEmail,
        visitorPhone,
        notes,
      },
    });

    return new Response(JSON.stringify({ success: true, booking }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to book tour' }), { status: 500 });
  }
}