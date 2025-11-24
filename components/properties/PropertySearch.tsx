"use client";

import { useState } from "react";

interface Property {
  id: string;
  title: string;
  description: string | null;
  price: number;
  address: string | null;
  city: string | null;
  bathrooms: number | null;
  squareFeet: number | null;
  lotSize: number | null;
  featured: boolean;
  published: boolean;
  realtorId: string | null;
  realtor: {
    id: string;
    name: string;
  } | null;
  [key: string]: any; // Allow other fields from the full property object
}

interface PropertySearchProps {
  properties: Property[];
  children: (filteredProperties: Property[]) => React.ReactNode;
}

export function PropertySearch({ properties, children }: PropertySearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  const filteredProperties = properties.filter((property) => {
    const search = searchTerm.toLowerCase();
    
    if (filterBy === "published" && !property.published) return false;
    if (filterBy === "unpublished" && property.published) return false;
    if (filterBy === "featured" && !property.featured) return false;

    if (!search) return true;

    return (
      property.id.toLowerCase().includes(search) ||
      property.title.toLowerCase().includes(search) ||
      property.city?.toLowerCase().includes(search) ||
      property.address?.toLowerCase().includes(search) ||
      property.realtor?.name.toLowerCase().includes(search)
    );
  });

  return (
    <div>
      {/* Search and Filter Controls */}
      <div className="mb-6 bg-white rounded-lg shadow-md p-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              🔍 Search Properties
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by ID, title, city, address, or realtor..."
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Filter by Status
            </label>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="all">All Properties</option>
              <option value="published">Published Only</option>
              <option value="unpublished">Unpublished Only</option>
              <option value="featured">Featured Only</option>
            </select>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing <strong>{filteredProperties.length}</strong> of{" "}
          <strong>{properties.length}</strong> properties
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="ml-3 text-primary hover:underline"
            >
              Clear search
            </button>
          )}
        </div>
      </div>

      {/* Render filtered properties */}
      {children(filteredProperties)}
    </div>
  );
}
