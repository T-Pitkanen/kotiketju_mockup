import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  className?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, className = "", backgroundImage }: PageHeroProps) {
  return (
    <div className={`relative bg-primary text-white py-16 overflow-hidden ${className}`}>
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
        </>
      )}
      <div className="relative max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-200">{subtitle}</p>
      </div>
    </div>
  );
}
