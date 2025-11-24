import { mockDb } from '@/lib/mockData';
import { addDays, startOfDay } from 'date-fns';

export async function POST(req: Request) {
	try {
		// Showcase mode - no auth required
		const user = { id: 'demo-user', user_metadata: { is_admin: true } };

		const body = await req.json();
		const { propertyId, startDate, endDate, timeSlots, skipSundays } = body;

		if (!propertyId || !startDate || !endDate || !timeSlots) {
			return new Response(
				JSON.stringify({ error: 'Missing required fields' }),
				{ status: 400 }
			);
		}

		const start = startOfDay(new Date(startDate));
		const end = startOfDay(new Date(endDate));
		const dates = [];

		let currentDate = start;
		while (currentDate <= end) {
			const dayOfWeek = currentDate.getDay();

			if (skipSundays && dayOfWeek === 0) {
				currentDate = addDays(currentDate, 1);
				continue;
			}

			dates.push({
				propertyId,
				date: currentDate,
				timeSlots: JSON.stringify(timeSlots),
				isAvailable: true,
			});

			currentDate = addDays(currentDate, 1);
		}

		await mockDb.tourAvailability.createMany({
			data: dates,
			skipDuplicates: true,
		});

		return new Response(
			JSON.stringify({ success: true, count: dates.length }),
			{ status: 201 }
		);
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Failed to add tour dates' }),
			{ status: 500 }
		);
	}
}
