interface PropertyDescriptionProps {
  description: string;
}

export function PropertyDescription({ description }: PropertyDescriptionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">Kuvaus</h3>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
    </div>
  );
}
