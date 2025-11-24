import Link from "next/link";

export function BlockchainCTA() {
  return (
    <section className="py-20 bg-[#f0f0f0]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
      
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tulevaisuus on jo täällä
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Kiinteistökauppa kehittyy joka päivä. Haluamme olla mukana tuomassa sinulle 
            uusimmat teknologiat ja ratkaisut, jotka tekevät asuntokaupasta turvallisempaa 
            ja läpinäkyvämpää.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/user-login"
            className="px-8 py-4 bg-accent text-white rounded-full font-semibold hover:opacity-80 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Aloita tänään
          </Link>
          <Link 
            href="/profile"
            className="px-8 py-4 bg-accent text-white rounded-full font-semibold hover:opacity-80 transition-all border border-white/20"
          >
            Katso profiilisi
          </Link>
        </div>

        {/* Supported Networks */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-gray-800 text-sm mb-4">Tuettu johtavissa Blockchain-verkoissa</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-800">
            {/* Ethereum */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 256 417" fill="currentColor">
                  <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" fillOpacity=".6"/>
                  <path d="M127.962 0L0 212.32l127.962 75.639V0z" fillOpacity=".45"/>
                  <path d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" fillOpacity=".6"/>
                  <path d="M127.962 416.905v-104.72L0 236.585z" fillOpacity=".45"/>
                  <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fillOpacity=".2"/>
                  <path d="M0 212.32l127.96 75.638v-133.8z" fillOpacity=".1"/>
                </svg>
              </div>
              <span className="font-medium">Ethereum</span>
            </div>

            {/* Solana */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-purple-400 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 397 311" fill="currentColor">
                  <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"/>
                  <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"/>
                  <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"/>
                </svg>
              </div>
              <span className="font-medium">Solana</span>
            </div>

            {/* Bitcoin */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.330.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/>
                </svg>
              </div>
              <span className="font-medium">Bitcoin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
