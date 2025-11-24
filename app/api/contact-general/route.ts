import { mockDb } from '@/lib/mockData';

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { firstName, lastName, email, message } = body;
		if (!firstName || !lastName || !email || !message) {
			return new Response(
				JSON.stringify({ error: 'Missing required fields' }),
				{ status: 400 }
			);
		}

		const created = await mockDb.contactMessage.create({
			data: {
				id: `contact-${Date.now()}`,
				propertyId: 'general',
				propertyTitle: 'General Contact',
				realtorEmail: null,
				senderName: `${firstName} ${lastName}`,
				senderEmail: email,
				senderPhone: body.phone || null,
				message: `${message}${body.services ? ` | Services: ${body.services.join(', ')}` : ''}`,
			},
		});

		return new Response(JSON.stringify({ success: true, id: created.id }), {
			status: 201,
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: 'Failed to submit form' }), {
			status: 500,
		});
	}
}
