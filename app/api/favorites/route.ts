import { NextRequest, NextResponse } from "next/server";
import { mockDb } from "@/lib/mockData";

export async function POST(request: NextRequest) {
  try {
    // Showcase mode - no real auth, use demo user
    const user = { id: 'demo-user' };

    const { propertyId } = await request.json();

    if (!propertyId) {
      return NextResponse.json({ error: "Property ID required" }, { status: 400 });
    }

    // Create favorite
    await mockDb.favorite.create({
      data: {
        userId: user.id,
        propertyId,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add favorite" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Showcase mode - no real auth, use demo user
    const user = { id: 'demo-user' };

    const { propertyId } = await request.json();

    if (!propertyId) {
      return NextResponse.json({ error: "Property ID required" }, { status: 400 });
    }

    // Delete favorite
    await mockDb.favorite.delete({
      where: {
        userId_propertyId: {
          userId: user.id,
          propertyId,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to remove favorite" }, { status: 500 });
  }
}
