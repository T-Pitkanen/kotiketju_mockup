import Link from 'next/link';
import Image from 'next/image';

export function Services() {
	const services = [
		{
			title: 'Ostamassa',
			description:
				'Etsitpä ensimmäistä asuntoa tai uutta kotia perheellesi, autamme löytämään täydellisen paikan.',
			image:
				'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
			link: '/properties',
			cta: 'Katso kohteet',
			icon: (
				<svg
					className="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			),
		},
		{
			title: 'Myymässä',
			description:
				'Saat meiltä luotettavan hinta-arvion, tehokkaan markkinoinnin ja ammattilaisen tueksesi koko myyntiprosessiin.',
			image:
				'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop',
			link: '/contact',
			cta: 'Ota yhteyttä',
			icon: (
				<svg
					className="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>
			),
		},
		{
			title: 'Vuokraamassa',
			description:
				'Löydä sopiva vuokra-asunto nopeasti ja helposti. Autamme sinua kaikissa vuokrauksen vaiheissa.',
			image:
				'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
			link: '/properties',
			cta: 'Selaa vuokra-asuntoja',
			icon: (
				<svg
					className="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
					/>
				</svg>
			),
		},
	];

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						Miten voimme auttaa?
					</h2>
					<p className="text-gray-600 text-lg max-w-3xl mx-auto">
						Olipa tavoitteenasi ostaa, myydä tai vuokrata, tarjoamme
						kattavat palvelut jokaiseen tilanteeseen.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<Link
							key={index}
							href={service.link}
							className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
						>
							{/* Image */}
							<div className="relative h-64 overflow-hidden">
								<Image
									src={service.image}
									alt={service.title}
									fill
									className="object-cover group-hover:scale-102 transition-transform duration-700"
								/>
								{/* Icon Overlay */}
								<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
									<div className="text-white transform group-hover:scale-110 transition-transform">
										{service.icon}
									</div>
								</div>
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="text-2xl font-bold text-gray-900 mb-3">
									{service.title}
								</h3>
								<p className="text-gray-600 mb-6 leading-relaxed">
									{service.description}
								</p>
								<div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
									<span>{service.cta}</span>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
