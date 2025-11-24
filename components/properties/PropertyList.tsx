"use client";

import { PropertySearch } from "@/components/properties/PropertySearch";

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
  [key: string]: any;
}

interface Realtor {
  id: string;
  name: string;
}

interface PropertyListProps {
  properties: Property[];
  realtors: Realtor[];
  updatePropertyAction: (formData: FormData) => Promise<void>;
  deletePropertyAction: (formData: FormData) => Promise<void>;
}

export function PropertyList({
  properties,
  realtors,
  updatePropertyAction,
  deletePropertyAction,
}: PropertyListProps) {
  return (
    <PropertySearch properties={properties}>
      {(filteredProperties) => (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">
            {filteredProperties.length === 0 && properties.length > 0
              ? "No properties match your search"
              : `Properties (${filteredProperties.length})`}
          </h2>
          {filteredProperties.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500">
                {properties.length === 0
                  ? "No properties yet. Create one above!"
                  : "No properties match your search criteria."}
              </p>
            </div>
          ) : (
            filteredProperties.map((property) => (
              <div key={property.id} className="bg-white border rounded-lg shadow-md p-6">
                <form action={updatePropertyAction}>
                  <input type="hidden" name="id" value={property.id} />
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                          type="text"
                          name="title"
                          defaultValue={property.title}
                          required
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Price (€)</label>
                        <input
                          type="number"
                          name="price"
                          defaultValue={property.price}
                          required
                          step="0.01"
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <input
                          type="text"
                          name="address"
                          defaultValue={property.address || ""}
                          required
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">City</label>
                        <input
                          type="text"
                          name="city"
                          defaultValue={property.city || ""}
                          required
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Realtor</label>
                      <select
                        name="realtorId"
                        defaultValue={property.realtorId || ""}
                        required
                        className="w-full border rounded px-3 py-2"
                      >
                        <option value="">Select a realtor</option>
                        {realtors.map((realtor) => (
                          <option key={realtor.id} value={realtor.id}>
                            {realtor.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Description</label>
                      <textarea
                        name="description"
                        defaultValue={property.description || ""}
                        required
                        rows={3}
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="featured"
                          id={`featured-${property.id}`}
                          defaultChecked={property.featured}
                          className="h-4 w-4"
                        />
                        <label htmlFor={`featured-${property.id}`} className="text-sm">
                          Featured Property
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="published"
                          id={`published-${property.id}`}
                          defaultChecked={property.published}
                          className="h-4 w-4"
                        />
                        <label htmlFor={`published-${property.id}`} className="text-sm">
                          Published
                        </label>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
                <form action={deletePropertyAction} className="mt-2">
                  <input type="hidden" name="id" value={property.id} />
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={(e) => {
                      if (!confirm("Are you sure you want to delete this property?")) {
                        e.preventDefault();
                      }
                    }}
                  >
                    Delete Property
                  </button>
                </form>
                <div className="mt-4 text-xs text-gray-500">
                  ID: {property.id.slice(0, 8)} • Realtor:{" "}
                  {property.realtor?.name || "None"} •{" "}
                  {property.featured ? "⭐ Featured" : "Regular"} •{" "}
                  {property.published ? "✅ Published" : "📝 Draft"}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </PropertySearch>
  );
}
