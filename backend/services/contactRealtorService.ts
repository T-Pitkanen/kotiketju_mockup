import { mockDb } from '@/lib/mockData';

export async function createContactMessage(payload: {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  propertyTitle: string;
  propertyId?: string | null;
  realtorEmail?: string | null;
}) {
  const { name, email, message, propertyTitle } = payload;
  if (!name || !email || !message || !propertyTitle) {
    throw new Error('Missing required fields');
  }

  const created = await mockDb.contactMessage.create({
    data: {
      id: `msg-${Date.now()}`,
      propertyId: payload.propertyId ?? 'unknown',
      propertyTitle,
      realtorEmail: payload.realtorEmail ?? null,
      senderName: name,
      senderEmail: email,
      senderPhone: payload.phone ?? null,
      message,
    },
  });

  return created;
}