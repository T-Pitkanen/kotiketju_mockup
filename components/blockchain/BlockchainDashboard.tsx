"use client";

import { useState } from "react";
import Link from "next/link";

interface SmartContract {
  id: string;
  propertyTitle: string;
  contractAddress: string;
  status: "aktiivinen" | "odottaa" | "valmis";
  type: "osto" | "vuokraus" | "escrow";
  value: number;
  createdAt: string;
  blockchain: "Ethereum" | "Polygon" | "Binance Smart Chain";
}

// Mock data for demonstration
const mockContracts: SmartContract[] = [
  {
    id: "1",
    propertyTitle: "Moderni asunto Helsingissä",
    contractAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    status: "aktiivinen",
    type: "osto",
    value: 250000,
    createdAt: "2024-10-15",
    blockchain: "Ethereum",
  },
  {
    id: "2",
    propertyTitle: "Omakotitalo Espoossa",
    contractAddress: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    status: "valmis",
    type: "osto",
    value: 450000,
    createdAt: "2024-09-20",
    blockchain: "Polygon",
  },
];

export function BlockchainDashboard() {
  const [activeTab, setActiveTab] = useState<"contracts" | "wallet" | "nft">("contracts");

  const totalValue = mockContracts.reduce((sum, c) => sum + c.value, 0);
  const activeContracts = mockContracts.filter(c => c.status === "aktiivinen").length;
  const completedContracts = mockContracts.filter(c => c.status === "valmis").length;

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-[#f5f5f5] rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 border border-gray-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg md:rounded-xl flex items-center justify-center shadow-md shrink-0 border border-gray-300">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                Blockchain-portfolio
              </h1>
              <p className="text-gray-600 text-xs md:text-sm mt-1">
                Älysopimusten hallinta & digitaalisten varojen yleiskatsaus
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-lg border border-gray-300">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Verkko</p>
              <p className="text-sm font-semibold text-gray-900">Moniketju</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-300">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-xs md:text-sm font-medium">Portfolion kokonaisarvo</p>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              {totalValue.toLocaleString('fi-FI')} €
            </p>
            <p className="text-xs text-emerald-600 flex items-center gap-1 flex-wrap">
              <span>↗</span> +12.4% viime kuusta
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-300">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-xs md:text-sm font-medium">Aktiiviset sopimukset</p>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{activeContracts}</p>
            <p className="text-xs text-gray-600">{mockContracts.length} sopimusta yhteensä</p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-300">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-400 text-xs md:text-sm font-medium">Valmiit</p>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-500/10 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{completedContracts}</p>
            <p className="text-xs text-gray-600">Onnistuneesti toteutetut</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-300">
        <div className="flex gap-1 p-2 bg-gray-50 rounded-t-xl border-b border-gray-300">
          <button
            onClick={() => setActiveTab("contracts")}
            className={`flex-1 px-3 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "contracts"
                ? "bg-white text-gray-900 shadow-md border border-gray-300"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            <span className="flex items-center justify-center gap-1.5 md:gap-2">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden sm:inline">Älysopimukset</span>
            </span>
          </button>
          <button
            onClick={() => setActiveTab("wallet")}
            className={`flex-1 px-3 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "wallet"
                ? "bg-white text-gray-900 shadow-md border border-gray-300"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            <span className="flex items-center justify-center gap-1.5 md:gap-2">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="hidden sm:inline">Digitaalinen lompakko</span>
            </span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 md:p-6">
          {/* Smart Contracts Tab */}
          {activeTab === "contracts" && (
            <div className="space-y-4">
              {mockContracts.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-300">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Ei vielä älysopimuksia
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Aloita blockchain-matkasi tutustumalla saatavilla oleviin kohteisiin
                  </p>
                  <Link
                    href="/properties"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 hover:shadow-lg transition-all duration-200"
                  >
                    Selaa kohteita
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ) : (
                mockContracts.map((contract) => (
                  <div
                    key={contract.id}
                    className="bg-white border border-gray-300 rounded-lg md:rounded-xl p-4 md:p-6 hover:shadow-lg hover:border-gray-400 transition-all duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 md:mb-5">
                      <div className="flex items-start gap-3 md:gap-4 flex-1">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 border border-gray-300">
                          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                            {contract.propertyTitle}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                              </svg>
                              <span className="capitalize">{contract.type}</span>
                            </span>
                            <span className="text-gray-400">•</span>
                            <span>{new Date(contract.createdAt).toLocaleDateString('fi-FI')}</span>
                          </div>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs font-bold uppercase tracking-wide shrink-0 ${
                          contract.status === "aktiivinen"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                            : contract.status === "odottaa"
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                            : "bg-gray-500/10 text-gray-600 dark:text-gray-400 border border-gray-500/20"
                        }`}
                      >
                        {contract.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-5">
                      <div className="bg-gray-50 rounded-lg p-3 md:p-4 border border-gray-300">
                        <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                          Sopimuksen arvo
                        </p>
                        <p className="text-lg md:text-xl font-bold text-gray-900">
                          {contract.value.toLocaleString('fi-FI')} €
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-300">
                        <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                          Lohkoketju
                        </p>
                        <p className="text-base md:text-lg font-semibold text-gray-900">
                          {contract.blockchain}
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-300">
                        <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                          Sopimustunnus
                        </p>
                        <p className="font-mono text-xs text-gray-700 truncate">
                          {contract.contractAddress.slice(0, 10)}...{contract.contractAddress.slice(-8)}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 md:p-4 border border-gray-300 mb-3 md:mb-4">
                      <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                        Sopimuksen osoite
                      </p>
                      <p className="font-mono text-sm text-gray-700 break-all">
                        {contract.contractAddress}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                      <a
                        href={`https://etherscan.io/address/${contract.contractAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 bg-gray-800 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        Näytä selaimessa
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <button className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 bg-gray-200 text-gray-700 text-sm md:text-base font-semibold rounded-lg hover:bg-gray-300 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Näytä tiedot
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Wallet Tab */}
          {activeTab === "wallet" && (
            <div className="space-y-6">
              {/* Portfolio Overview Card */}
              <div className="bg-[#f5f5f5] rounded-lg md:rounded-xl p-5 md:p-8 border border-gray-300 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:gap-6 mb-5 md:mb-6">
                  <div>
                    <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-2">
                      Portfolion kokonaisarvo
                    </p>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
                      {totalValue.toLocaleString('fi-FI')} €
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-emerald-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        +12.4% tässä kuussa
                      </span>
                    </p>
                  </div>
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-gray-300">
                    <svg className="w-10 h-10 md:w-14 md:h-14 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm">
                  <div className="bg-white border border-gray-300 px-3 md:px-4 py-1.5 md:py-2 rounded-lg">
                    <span className="text-gray-600">Varat:</span>{" "}
                    <span className="font-bold text-gray-900">{mockContracts.length}</span>
                  </div>
                  <div className="bg-white border border-gray-300 px-4 py-2 rounded-lg">
                    <span className="text-gray-600">Aktiiviset:</span>{" "}
                    <span className="font-bold text-gray-900">{activeContracts}</span>
                  </div>
                </div>
              </div>

              {/* Digital Assets Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-50 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 border border-amber-200">
                        <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          Token-saldo
                        </h3>
                        <p className="text-sm text-gray-600">
                          Alustan tokenit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-4xl font-bold text-gray-900 mb-2">
                      1,250 KKT
                    </p>
                    <p className="text-sm text-gray-600">
                      KotiKetju-tokeneita • 2 450 €
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <button className="w-full py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors">
                      Siirrä tokeneita
                    </button>
                  </div>
                </div>

                <div className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-50 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 border border-purple-200">
                        <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg">
                          Palkkiopisteet
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600">
                          Kanta-asiakasohjelma
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      3,840
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      Käytettävissä lunastukseen • 384 €
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <button className="w-full py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors">
                      Lunasta pisteet
                    </button>
                  </div>
                </div>
              </div>

              {/* Connected Wallet */}
              <div className="bg-white border border-gray-300 rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">
                      Yhdistetty lompakko
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      Sinun Web3-digitaalinen lompakkosi
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 md:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0 border border-orange-200">
                        <svg className="w-6 h-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-600 mb-1">
                          Lompakon osoite
                        </p>
                        <p className="font-mono text-sm md:text-base font-semibold text-gray-900">
                          0x742d...5f0bEb
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-semibold border border-emerald-200">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Yhdistetty
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    MetaMask • Ethereum-pääverkko
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <button className="flex-1 py-2.5 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors text-xs md:text-sm">
                      Kopioi osoite
                    </button>
                    <button className="sm:px-4 py-2.5 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors text-xs md:text-sm">
                      Katkaise yhteys
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-xs md:text-sm">Lisää varoja</p>
                    <p className="text-xs text-gray-600 hidden sm:block">Talleta kryptoa</p>
                  </div>
                </button>

                <button className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-xs md:text-sm">Vaihda tokeneita</p>
                    <p className="text-xs text-gray-600 hidden sm:block">Vaihda varoja</p>
                  </div>
                </button>

                <button className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-xs md:text-sm">Tapahtumahistoria</p>
                    <p className="text-xs text-gray-600 hidden sm:block">Näytä toiminta</p>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
