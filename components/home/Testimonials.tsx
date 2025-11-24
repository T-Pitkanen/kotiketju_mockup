import Image from 'next/image';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Olin aluksi jännittynyt koko ostoprosessista, mutta KotiKetjun tiimi sai minut tuntemaan oloni turvalliseksi ja kuulluksi.",
      role: "Asunnon ostaja"
    },
    {
      id: 2,
      text: "Myyntiprosessi oli paljon helpompi kuin osasin kuvitella! Sain rehellisiä neuvoja ja tukea jokaisessa vaiheessa.",
      role: "Asunnon myyjä"
    },
    {
      id: 3,
      text: "Etsimme perheasuntoa jo kuukausia. He kuuntelivat toiveitamme ja löysivät meille täydellisen kodin.",
      role: "Asunnon ostaja"
    },
    {
      id: 4,
      text: "Paikallinen markkinatuntemus on uskomaton. Näyttivät meille paikkoja, joista emme edes tienneet!",
      role: "Asunnon ostaja"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 backdrop-blur-md bg-white/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tämä on muutakin kuin työtä meille
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Kun autamme jonkun löytämään kodin, näemme iloa heidän silmissään. Se on paras palkkio. 
            Lue, mitä asiakkaamme sanovat kokemuksestaan kanssamme.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="relative bg-white rounded-2xl p-8 shadow-sm  transition-shadow border border-gray-100"
            >
              {/* Quote Mark */}
              <div className="mb-4">
                <svg 
                  className="w-10 h-10 text-primary/20" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {testimonial.text}
              </p>

              {/* Role */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-primary"></div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
