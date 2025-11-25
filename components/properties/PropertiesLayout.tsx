"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "../ui/FavoriteButton";

interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string | null;
  zipCode: string | null;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  mainImage: string | null;
  listingType: string | null;
  propertyType: string;
  description: string | null;
  featured: boolean;
  garage: boolean;
  pool: boolean;
  garden: boolean;
  balcony: boolean;
  latitude: number | null;
  longitude: number | null;
  realtor: {
    name: string;
    email: string;
  } | null;
}

interface PropertiesLayoutProps {
  properties: Property[];
  isLoggedIn: boolean;
  searchParams: {
    search?: string;
    city?: string;
    minPrice?: string;
    maxPrice?: string;
    bedrooms?: string;
    bathrooms?: string;
    listingType?: string;
    page?: string;
  };
  cities: { city: string | null }[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export function PropertiesLayout({ properties, isLoggedIn, searchParams, cities, currentPage, totalPages, totalCount }: PropertiesLayoutProps) {
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();
  const currentSearchParams = useSearchParams();

  const clearFilter = (filterName: string) => {
    const params = new URLSearchParams(currentSearchParams.toString());
    params.delete(filterName);
    if (filterName === 'minPrice' || filterName === 'maxPrice') {
      params.delete('minPrice');
      params.delete('maxPrice');
    }
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="flex h-[calc(100vh-80px)] relative bg-gray-50">
      <div className="w-full overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar - Filters */}
            <div className={`${showFilters ? 'fixed inset-0 z-50' : 'hidden'} lg:block lg:relative lg:w-72 lg:shrink-0`}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:sticky lg:top-6">
                {/* Mobile Close Button */}
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900">Mukauta hakua</h2>
                  <Link href="/properties" className="text-sm text-gray-900 hover:underline">
                    Tyhjennä
                  </Link>
                </div>

                <form 
                  key={currentSearchParams.toString()} 
                  method="GET" 
                  action="/properties" 
                  className="space-y-6"
                >
            {/* Location */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Sijainti
                </label>
                <button type="button" onClick={() => clearFilter('city')} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <select
                name="city"
                defaultValue={searchParams.city}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">Kaikki kaupungit</option>
                {cities.map((c) => (
                  <option key={c.city} value={c.city || ""}>
                    {c.city}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hintaluokka
                </label>
                <button type="button" onClick={() => clearFilter('minPrice')} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2">
                <input
                  type="number"
                  name="minPrice"
                  defaultValue={searchParams.minPrice}
                  placeholder="Min"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <input
                  type="number"
                  name="maxPrice"
                  defaultValue={searchParams.maxPrice}
                  placeholder="Max"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Type of Place */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Kohteen tyyppi
                </label>
                <button type="button" onClick={() => clearFilter('listingType')} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <select
                name="listingType"
                defaultValue={searchParams.listingType}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">Kaikki tyypit</option>
                <option value="Myynnissä">Myytävänä</option>
                <option value="Vuokrattavana">Vuokrattavana</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Min. makuuhuoneet</label>
              <select
                name="bedrooms"
                defaultValue={searchParams.bedrooms}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">Kaikki</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Min. kylpyhuoneet</label>
              <select
                name="bathrooms"
                defaultValue={searchParams.bathrooms}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">Kaikki</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={() => setShowFilters(false)}
              className="w-full bg-accent text-white py-3 rounded-lg hover:bg-accent/80 transition-colors font-medium"
            >
                      Käytä suodattimia
                  </button>
                </form>
              </div>
            </div>

            {/* Main Content - Property List */}
            <div className="flex-1 pb-24 sm:pb-32 min-h-screen">
              {/* Mobile Filter Button */}
              <div className="lg:hidden mb-4 flex gap-2">
                <button
                  onClick={() => setShowFilters(true)}
                  className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Suodattimet
                </button>
              </div>

              <div className="mb-4">
                <p className="text-gray-600">
                  Löytyi <span className="font-bold text-gray-900">{totalCount}</span> {totalCount === 1 ? "kohde" : "kohdetta"}
                  {totalPages > 1 && (
                    <span className="text-sm ml-2">
                      (Sivu {currentPage} / {totalPages})
                    </span>
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {properties.map((property) => (
                  <Link
                    key={property.id}
                    href={`/properties/${property.id}`}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer border border-gray-100 block"
                  >
                    {/* Property Image */}
                    <div className="relative h-56 sm:h-64">
                      {property.mainImage ? (
                        <Image
                          src={property.mainImage}
                          alt={property.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full bg-gray-200 text-gray-400">
                          Ei kuvaa
                        </div>
                      )}
                      
                      {/* KotiKetju Logo - Top Right */}
                      <div className="absolute top-3 right-3 z-10 bg-white rounded-lg p-1.5 shadow-md">
                        <Image
                          src="/kotiketju-logo.png"
                          alt="KotiKetju"
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>

                      {/* Favorite Button - Top Left */}
                      <div className="absolute top-3 left-3 z-10">
                        <div onClick={(e) => e.stopPropagation()}>
                          <FavoriteButton 
                            propertyId={property.id} 
                            initialIsFavorite={false}
                            isLoggedIn={isLoggedIn}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="p-4 sm:p-6">
                      {/* Price */}
                      <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                        {Number(property.price).toLocaleString('fi-FI')} €
                        {property.listingType?.toLowerCase().includes('vuokra') && (
                          <span className="text-lg font-semibold text-gray-600">/kk</span>
                        )}
                      </div>

                      {/* Square Meters and Rooms */}
                      <div className="flex items-center gap-4 text-gray-600 mb-4 text-base">
                        <span>{property.squareFeet} m²</span>
                        <span>•</span>
                        <span>{property.bedrooms} Makuuh.</span>
                        <span>•</span>
                        <span>{property.bathrooms.toString()} Kylpyh.</span>
                      </div>

                      {/* Location */}
                      <div className="text-gray-900 font-medium mb-1 text-base">
                        {property.address}
                      </div>
                      <div className="text-gray-600 mb-2">
                        {property.city}, {property.state}
                      </div>

                      {/* Property Type */}
                      <div className="text-gray-600">
                        {property.propertyType || 'Kerrostalo'}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {properties.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg">
                  <p className="text-gray-500">Hakuehdoillasi ei löytynyt kohteita.</p>
                </div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center items-center gap-2">
                  {/* Previous Button */}
                  <Link
                    href={`/properties?${new URLSearchParams({
                      ...searchParams,
                      page: Math.max(1, currentPage - 1).toString(),
                    }).toString()}`}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Edellinen
                  </Link>

                  {/* Page Numbers */}
                  <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(pageNum => {
                  // Show first page, last page, current page, and pages around current
                  return (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    Math.abs(pageNum - currentPage) <= 1
                  );
                })
                .map((pageNum, idx, arr) => {
                  // Add ellipsis if there's a gap
                  const prevPageNum = arr[idx - 1];
                  const showEllipsis = prevPageNum && pageNum - prevPageNum > 1;

                  return (
                    <div key={pageNum} className="flex items-center gap-1">
                      {showEllipsis && (
                        <span className="px-2 text-gray-400">...</span>
                      )}
                      <Link
                        href={`/properties?${new URLSearchParams({
                          ...searchParams,
                          page: pageNum.toString(),
                        }).toString()}`}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${
                          pageNum === currentPage
                            ? 'bg-accent text-white'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </Link>
                    </div>
                  );
                })}
            </div>

            {/* Next Button */}
            <Link
              href={`/properties?${new URLSearchParams({
                ...searchParams,
                page: Math.min(totalPages, currentPage + 1).toString(),
              }).toString()}`}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Seuraava
            </Link>
          </div>
        )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}