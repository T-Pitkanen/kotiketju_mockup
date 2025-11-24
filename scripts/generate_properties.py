import csv
import json

# Read CSV and generate TypeScript property objects
csv_path = r'C:\Users\tiia1\Downloads\properties_rows (1).csv'

properties = []

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Parse images array
        images_str = row['images'].strip('[]"')
        if images_str:
            # Handle escaped quotes and split
            images = [img.strip('"') for img in images_str.split('","')]
        else:
            images = []
        
        prop = f'''  {{
    id: '{row['id']}',
    title: '{row['title'].replace("'", "\\'")}',
    description: '{row['description'].replace("'", "\\'")}',
    price: {row['price']},
    address: '{row['address']}',
    city: '{row['city']}',
    state: '{row['state']}',
    zipCode: '{row['zip_code']}',
    country: '{row['country']}',
    propertyType: '{row['property_type']}',
    listingType: '{row['listing_type']}',
    bedrooms: {row['bedrooms']},
    bathrooms: {row['bathrooms']},
    squareFeet: {row['square_feet']},
    lotSize: {row['lot_size'] if row['lot_size'] else 'null'},
    yearBuilt: {row['year_built'] if row['year_built'] else 'null'},
    parking: {row['parking'] if row['parking'] else 'null'},
    garage: {row['garage'].lower()},
    pool: {row['pool'].lower()},
    garden: {row['garden'].lower()},
    balcony: {row['balcony'].lower()},
    furnished: {row['furnished'].lower()},
    images: {json.dumps(images)},
    mainImage: {json.dumps(row['main_image']) if row['main_image'] else 'null'},
    published: true,
    featured: {row['featured'].lower()},
    createdAt: new Date('{row['created_at']}'),
    updatedAt: new Date('{row['updated_at']}'),
    publishedAt: new Date('{row['published_at']}'),
    realtorId: '{row['realtor_id']}',
  }}'''
        properties.append(prop)

print("export const mockProperties: Property[] = [")
print(',\n'.join(properties))
print("];")
