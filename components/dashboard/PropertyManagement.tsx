import { mockDb } from "@/lib/mockData";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PropertyList } from "@/components/properties/PropertyList";

export async function PropertyManagement() {
  const propertiesRaw = await mockDb.property.findMany({
    orderBy: { updatedAt: "desc" },
    include: { realtor: true },
  });

  const properties = propertiesRaw.map((property) => ({
    ...property,
    price: Number(property.price),
    bathrooms: property.bathrooms ? Number(property.bathrooms) : null,
    squareFeet: property.squareFeet ? Number(property.squareFeet) : null,
    lotSize: property.lotSize ? Number(property.lotSize) : null,
    realtor: property.realtor || null,
  }));

  const realtors = await mockDb.realtor.findMany({
    orderBy: { name: "asc" },
  });

  async function createProperty(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const realtorId = formData.get("realtorId") as string;

    await mockDb.property.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        address,
        city,
        state: "Finland",
        zipCode: "00000",
        country: "Finland",
        propertyType: "Asunto",
        listingType: "myynti",
        bedrooms: 2,
        bathrooms: 1,
        squareFeet: 50,
        realtorId,
      },
    });

    revalidatePath("/dashboard/properties");
    revalidatePath("/dashboard");
    revalidatePath("/");
    redirect("/dashboard/properties?success=created");
  }

  async function updateProperty(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const realtorId = formData.get("realtorId") as string;
    const featured = formData.get("featured") === "on";
    const published = formData.get("published") === "on";

    await mockDb.property.update({
      where: { id },
      data: {
        title,
        description,
        price: parseFloat(price),
        address,
        city,
        realtorId,
        featured,
        published,
      },
    });

    revalidatePath("/dashboard/properties");
    revalidatePath("/dashboard");
    revalidatePath("/");
    redirect("/dashboard/properties?success=updated");
  }

  async function deleteProperty(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;

    await mockDb.property.delete({
      where: { id },
    });

    revalidatePath("/dashboard/properties");
    revalidatePath("/dashboard");
    revalidatePath("/");
    redirect("/dashboard/properties?success=deleted");
  }

  return (
    <div>
      {/* Create Property Form */}
      <div className="mb-8 border p-6 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Luo uusi kohde</h2>
        <form action={createProperty} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Otsikko</label>
              <input
                type="text"
                name="title"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Kaunis perhekoti"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hinta (€)</label>
              <input
                type="number"
                name="price"
                required
                step="0.01"
                className="w-full border rounded px-3 py-2"
                placeholder="250000"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Osoite</label>
              <input
                type="text"
                name="address"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Mannerheimintie 123"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Kaupunki</label>
              <input
                type="text"
                name="city"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Helsinki"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Välittäjä</label>
            <select name="realtorId" required className="w-full border rounded px-3 py-2">
              <option value="">Valitse välittäjä</option>
              {realtors.map((realtor) => (
                <option key={realtor.id} value={realtor.id}>
                  {realtor.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Kuvaus</label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full border rounded px-3 py-2"
              placeholder="Kohteen kuvaus"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-hover transition-colors"
          >
            Luo kohde
          </button>
        </form>
      </div>

      <PropertyList
        properties={properties}
        realtors={realtors}
        updatePropertyAction={updateProperty}
        deletePropertyAction={deleteProperty}
      />
    </div>
  );
}
