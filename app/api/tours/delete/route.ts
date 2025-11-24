import { mockDb } from '@/lib/mockData';

export async function DELETE(req: Request) {
	try {
		// Showcase mode - no auth required
		const user = { id: 'demo-user', user_metadata: { is_admin: true } };

		const body = await req.json();
		const { id } = body;

		if (!id) {
			return new Response(JSON.stringify({ error: 'ID required' }), {
				status: 400,
			});
		}

		await mockDb.tourAvailability.delete({
			where: { id },
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Failed to delete tour date' }),
			{ status: 500 }
		);
	}
}
