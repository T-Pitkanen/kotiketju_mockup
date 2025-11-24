"use client";

import Link from "next/link";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="text-8xl mb-4">🔧</div>
          <h1 className="text-5xl font-bold text-primary mb-2">
            Huollossa
          </h1>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Teemme sivustoa paremmaksi
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
          Sivustomme on parhaillaan suunnitellun huollon alla. 
          Työskentelemme ahkerasti parantaaksemme käyttökokemustasi ja palaamme pian takaisin.
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Arvioitu kestoaika
          </h3>
          <p className="text-blue-700 dark:text-blue-300">
            Odotamme olevamme takaisin verkossa muutaman tunnin kuluessa.
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Sillä välin:
          </p>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2">
            <li>✓ Seuraa meitä sosiaalisessa mediassa päivityksiä varten</li>
            <li>✓ Tarkista pian uudet ominaisuudet</li>
            <li>✓ Ota yhteyttä sähköpostitse kiireellisissä asioissa</li>
          </ul>
        </div>
        
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link
            href="mailto:support@kotiketju.com"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors font-medium"
          >
            Lähetä sähköpostia
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            Yritä uudelleen
          </button>
        </div>
        
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-500">
          <p>Kiitos kärsivällisyydestäsi!</p>
        </div>
      </div>
    </div>
  );
}
