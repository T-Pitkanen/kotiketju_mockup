import Image from "next/image";

export function TeamSection() {
  const team = [
    {
      name: "Mikko Virtanen",
      role: "Blockchain-johtaja",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
      bio: "Johtaa blockchain-integraatiotamme yli 10 vuoden kokemuksella hajautetun pääkirjateknologian ja älykkäiden sopimusten kehityksessä.",
    },
    {
      name: "Anna Korhonen",
      role: "Vanhempi kiinteistöneuvonantaja",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
      bio: "Auttaa asiakkaita navigoimaan kiinteistömarkkinoilla asiantuntevalla tuntemuksella Helsingin alueilta ja blockchain-kiinteistöratkaisuista.",
    },
    {
      name: "Jari Nieminen",
      role: "Sijoituskiinteistöstrategi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&fit=crop",
      bio: "Erikoistunut sijoituskiinteistöihin ja portfolion optimointiin käyttäen tietolähtöisiä strategioita ja blockchain-teknologiaa.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mieli joka ohjaa<br />sijoituksiasi
          </h2>
          <p className="text-gray-600 max-w-md">
            Kokeneet kiinteistö- ja sijoitusasiantuntijamme työskentelevät väsymättä käyttäen edistyneintä blockchain-teknologiaa.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="group">
              {/* Profile Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Info */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-accent flex items-center justify-center transition-colors group/icon"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-gray-700 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-accent flex items-center justify-center transition-colors group/icon"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-gray-700 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-accent flex items-center justify-center transition-colors group/icon"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 text-gray-700 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-amber-600 flex items-center justify-center transition-colors group/icon"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4 text-gray-700 group-hover/icon:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
