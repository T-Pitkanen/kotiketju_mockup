import { mockDb } from '@/lib/mockData';

export async function PATCH(req: Request) {
	try {
		// Showcase mode - no auth required
		const user = { id: 'demo-user', user_metadata: { is_admin: true } };

		const body = await req.json();
		const { id, isAvailable } = body;

		if (!id || typeof isAvailable !== 'boolean') {
			return new Response(JSON.stringify({ error: 'Invalid data' }), {
				status: 400,
			});
		}

		await mockDb.tourAvailability.update({
			where: { id },
			data: { isAvailable },
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Failed to toggle availability' }),
			{ status: 500 }
		);
	}
}
