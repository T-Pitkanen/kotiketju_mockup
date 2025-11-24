import { createContactMessage } from '@/backend/services/contactRealtorService';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const created = await createContactMessage(body);
    return new Response(JSON.stringify({ success: true, id: created.id }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message || 'failed' }), { status: 400 });
  }
}