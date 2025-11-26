"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
      
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch {
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#f0f0f0] text-gray-900 pt-10">
      {/* CTA Section */}
      <div className="bg-[#f0f0f0] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Valmis työskentelemään kanssamme?
              </h2>
              <p className="text-gray-600 text-md sm:text-md">
                Koe huippuluokan asiakaspalvelu ja anna meidän ohjata sinua kiinteistömatkallasi
              </p>
            </div>
            
            {/* Contact Button */}
            <Link
              href="/contact"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-accent hover:opacity-80 flex items-center justify-center transition-colors group shrink-0"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white transform -rotate-45 group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="bg-[#f0f0f0]">
        <div className="max-w-7xl mx-auto px-6">
          <hr className="border-gray-700" />
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#f0f0f0] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/kotiketju-logo.png"
                  alt="KotiKetju Logo"
                  width={70}
                  height={70}
                  className="rounded-lg"
                />
                
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
                Huippumoderni kiinteistönvälitys, joka tarjoaa saumattoman ja mukaansatempaavan kokemuksen unelmiesi kodin löytämiseen
              </p>

              {/* Newsletter */}
              <form onSubmit={handleSubmit} className="max-w-sm">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Kirjoita sähköpostisi tähän"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none   disabled:opacity-10 text-sm"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:opacity-80 text-white px-6 py-2 rounded-lg font-semibold transition-all disabled:opacity-50 text-sm"
                  >
                    {status === "loading" ? "..." : status === "success" ? "✓" : "Lähetä"}
                  </button>
                </div>
                {status === "success" && (
                  <p className="text-green-600 text-xs mt-2">Kiitos tilauksesta!</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-xs mt-2">Jotain meni pieleen. Yritä uudelleen.</p>
                )}
              </form>
            </div>

            {/* Home Links */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Etusivu</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>
                  <Link href="/" className="hover:text-accent transition-colors">
                    Ota yhteyttä
                  </Link>
                </li>
                <li>
                  <Link href="/properties" className="hover:text-accent transition-colors">
                    Kohteet
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-accent transition-colors">
                    Blogi 
                  </Link>
                </li>
              </ul>
            </div>

            {/* Security Links */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Turvallisuus</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Tietosuojakäytäntö
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Käyttöehdot
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Tekijänoikeudet
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Sosiaalinen media</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
