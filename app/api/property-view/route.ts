import { NextRequest, NextResponse } from 'next/server';
import { mockDb } from '@/lib/mockData';

export async function POST(req: NextRequest) {
  try {
    // Showcase mode - use demo user
    const user = { id: 'demo-user' };

    const { propertyId } = await req.json();

    if (!propertyId) {
      return NextResponse.json({ error: 'Property ID required' }, { status: 400 });
    }

    const recentView = await mockDb.propertyView.findFirst({
      where: {
        userId: user.id,
        propertyId: propertyId,
        viewedAt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
        }
      }
    });

    if (!recentView) {
      await mockDb.propertyView.create({
        data: {
          userId: user.id,
          propertyId: propertyId,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Property view tracking error:', error);
    return NextResponse.json({ error: 'Failed to track view' }, { status: 500 });
  }
}
