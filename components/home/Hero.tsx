"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CityAutocomplete } from "@/components/ui/CityAutocomplete";

interface HeroProps {
  popularCities?: string[];
}

export function Hero({ popularCities = [] }: HeroProps) {
  const [activeTab, setActiveTab] = useState("Osta");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    
    const search = formData.get("search") as string;
    const city = formData.get("city") as string;
    const minPrice = formData.get("minPrice") as string;
    const maxPrice = formData.get("maxPrice") as string;
    const bedrooms = formData.get("bedrooms") as string;
    const bathrooms = formData.get("bathrooms") as string;
    const listingType = formData.get("listingType") as string;
    
    console.log('Form submitted:', { search, city, minPrice, maxPrice, bedrooms, bathrooms, listingType });
    
    if (search && search.trim()) params.append("search", search);
    if (city && city.trim()) params.append("city", city);
    if (minPrice && minPrice.trim()) params.append("minPrice", minPrice);
    if (maxPrice && maxPrice.trim()) params.append("maxPrice", maxPrice);
    if (bedrooms && bedrooms.trim()) params.append("bedrooms", bedrooms);
    if (bathrooms && bathrooms.trim()) params.append("bathrooms", bathrooms);
    if (listingType && listingType.trim()) params.append("listingType", listingType);
    
    console.log('Navigating to:', `/properties?${params.toString()}`);
    router.push(`/properties?${params.toString()}`);
  };

  const handlePopularSearch = (city: string) => {
    const params = new URLSearchParams();
    params.append("city", city);
    if (activeTab === "Osta") params.append("listingType", "Myynnissä");
    if (activeTab === "Vuokraa") params.append("listingType", "Vuokrattavana");
    router.push(`/properties?${params.toString()}`);
  };

  // Default popular searches if no cities provided
  const defaultPopular = ["Helsinki", "Espoo", "Tampere", "Vantaa"];
  const displayCities = popularCities.length > 0 ? popularCities.slice(0, 4) : defaultPopular;

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="relative h-[750px] sm:h-[700px] md:h-[650px]">
        <Image
          src="https://images.unsplash.com/photo-1693382464188-1ed395d8d3e1?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern house"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-8 md:pt-0">
          {/* Heading */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight drop-shadow-lg">
              Matka täydelliseen kotiin
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-md px-4">
              Anna asiantuntijatiimimme opastaa sinua kiinteistömaailman ihmeissä ja auttaa löytämään täydellisen kodin, jossa unelmasi toteutuvat
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-1.5 sm:p-2">
              {/* Tabs */}
              <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-4 bg-gray-100 rounded-lg p-1">
                {[
                  { label: "Osta", value: "For Sale" },
                  { label: "Vuokraa", value: "For Rent" },
                  { label: "Kaikki", value: "Both" },
                ].map((tab) => (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActiveTab(tab.label)}
                    className={`flex-1 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
                      activeTab === tab.label
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <input 
                type="hidden" 
                name="listingType" 
                value={activeTab === "Osta" ? "Myynnissä" : activeTab === "Vuokraa" ? "Vuokrattavana" : ""}
              />

              {/* Search Input */}
              <div className="p-1.5 sm:p-2 mb-3 sm:mb-4">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Hae kiinteistöjä
                </label>
                <input
                  type="text"
                  name="search"
                  placeholder="Hae otsikolla, kuvauksella tai osoitteella..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
                />
              </div>

              {/* Filter Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 p-1.5 sm:p-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 sm:mb-2">
                    Sijainti
                  </label>
                  <CityAutocomplete
                    cities={displayCities}
                    name="city"
                    placeholder="Kaupunki"
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 sm:mb-2">
                    Min. hinta (€)
                  </label>
                  <input
                    type="number"
                    name="minPrice"
                    placeholder="Min"
                    step="10000"
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 sm:mb-2">
                    Max. hinta (€)
                  </label>
                  <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max"
                    step="10000"
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 sm:mb-2">
                   Huoneet
                  </label>
                  <select
                    name="bedrooms"
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-xs sm:text-sm"
                  >
                    <option value="">Kaikki</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="px-1.5 sm:px-2 pb-1.5 sm:pb-2 mt-3 sm:mt-4">
                <button
                  type="submit"
                  className="w-full bg-black text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all text-xs sm:text-sm"
                >
                  Hae
                </button>
              </div>

              {/* Popular Searches */}
              <div className="px-2 sm:px-4 pb-2 sm:pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-gray-600 font-medium">Suosittua:</span>
                  {displayCities.map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => handlePopularSearch(city)}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-700 transition-colors"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
