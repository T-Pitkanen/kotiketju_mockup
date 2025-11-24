"use client";

import { useEffect } from "react";

interface PropertyViewTrackerProps {
  propertyId: string;
  isLoggedIn: boolean;
}

export function PropertyViewTracker({ propertyId, isLoggedIn }: PropertyViewTrackerProps) {
  useEffect(() => {
    if (!isLoggedIn) return;

    // Track property view
    fetch('/api/property-view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ propertyId }),
    }).catch((error) => {
      console.error('Failed to track view:', error);
    });
  }, [propertyId, isLoggedIn]);

  return null;
}
