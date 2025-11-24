"use client";

import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "Miten blockchain-kiinteistöt toimivat?",
      answer:
        "Blockchain-alustamme käyttää älykkäitä sopimuksia kiinteistötransaktioiden automatisointiin ja suojaamiseen. Jokainen transaktio tallennetaan lohkoketjuun, tarjoten läpinäkyvät, muuttumattomat tiedot. Kun ostat kiinteistön, saat NFT:n (Non-Fungible Token) omistusta edustamaan, joka tallennetaan turvallisesti digitaaliseen lompakkoosi.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800"
    },
    {
      id: 2,
      question: "Mitä ovat KKT-tokenit ja miten ansaitsen niitä?",
      answer:
        "KKT (KotiKetju Tokenit) ovat alustamme omia kryptovaluuttapalkintoja. Ansaitset KKT-tokeneita suorittamalla transaktioita, suosittelemalla ystäviä, lisäämällä kiinteistöjä ja osallistumalla alustamme toimintaan. Näitä tokeneita voidaan käyttää alennettuihin transaktiomaksuihin, premium-listauksiin, eksklusiivisiin kiinteistöesikatseluihin, ja niitä voidaan jopa vaihtaa tuetuissa pörsseissä.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800"
    },
    {
      id: 3,
      question: "Tarvitsenko kryptolompakon käyttääkseni KotiKetjua?",
      answer:
        "Vaikka kryptolompakon omistaminen parantaa kokemustasi (mahdollistaen NFT-kiinteistönimikkeiden ja KKT-tokenien hallinnan), sitä ei vaadita kiinteistöjen selaamiseen tai ensimmäisiin tiedusteluihin. Autamme sinua lompakon käyttöönotossa, kun olet valmis tekemään ostoksen tai vastaanottamaan kiinteistö-NFT:si.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800"
    },
    {
      id: 4,
      question: "Kuinka turvallisia blockchain-kiinteistötransaktiot ovat?",
      answer:
        "Blockchain-transaktiot ovat erittäin turvallisia. Älykkäät sopimukset poistavat välittäjien tarpeen, vähentäen petosriskiä. Kaikki transaktiot on salattu, useiden solmujen vahvistamia, ja pysyvästi tallennettu lohkoketjuun. Kiinteistö-NFT:si toimii muuttumattomana todisteena omistuksestasi, jota ei voida väärentää tai kiistää.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800"
    },
    {
      id: 5,
      question: "Mitä maksuja kiinteistön ostamiseen tai myymiseen liittyy?",
      answer:
        "Blockchain-alustamme vähentää merkittävästi perinteisiä kiinteistömaksuja. Veloitamme kilpailukykyisen 1,5% transaktiomaksun (verrattuna perinteiseen 3-6%), plus minimaaliset blockchain-kaasumaksut. KKT-tokenien haltijat saavat lisäalennuksia. Piilokuluja ei ole - kaikki kustannukset ovat läpinäkyviä ja näytetään etukäteen.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800"
    },
    {
      id: 6,
      question: "Voinko katsoa kiinteistöjä paikan päällä ennen ostamista?",
      answer:
        "Ehdottomasti! Tarjoamme sekä virtuaalisia kierroksia että paikan päällä tapahtuvia katseluja. Asiantuntijamme ovat käytettävissä aikatauluttamaan kiinteistövierailuja sinulle sopivaan aikaan. Virtuaalikierrokset ovat saatavilla 24/7 alustamme kautta, ja voit varata fyysisiä katseluja profiilisi kautta tai ottamalla yhteyttä tiimiimme suoraan.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800"
    },
    {
      id: 7,
      question: "Mitä blockchain-verkkoja tuette?",
      answer:
        "Tuemme tällä hetkellä Ethereumia, Polygonia ja Binance Smart Chainia (BSC). Tämä moniketjuinen lähestymistapa antaa sinulle joustavuutta transaktiokustannusten ja nopeuden hallinnassa. Useimmat kiinteistö-NFT:t lyödään Polygonissa alhaisempien kaasumaksujen vuoksi, kun taas korkean arvon kiinteistöt voivat käyttää Ethereumia maksimaalisen turvallisuuden saavuttamiseksi.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800"
    },
    {
      id: 8,
      question: "Kuinka kauan tyypillinen kiinteistötransaktio kestää?",
      answer:
        "Blockchain-teknologian ansiosta transaktiomme ovat huomattavasti nopeampia kuin perinteiset kiinteistötransaktiot. Kun ehdoista on sovittu, älykkäät sopimukset voivat toteutua minuuteissa tai tunneissa (riippuen blockchain-verkon ruuhkasta). Koko prosessi tarjouksesta omistusoikeuden siirtoon kestää tyypillisesti 2-7 päivää, verrattuna perinteiseen 30-60 päivään.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800"
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Usein kysytyt kysymykset
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Asiantuntijamme ohjaavat sinua tekemään tietoisia sijoituspäätöksiä markkinatiedon perusteella. Tarjoamme asuin-, liike- ja luksuskiinteistöjä räätälöitynä erilaisiin mieltymyksiin ja budjetteihin.
            </p>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-8 text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
