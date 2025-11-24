import Image from 'next/image';

export function Features() {
	const features = [
		{
			icon: '→',
			title: 'Digitaaliset työkalut',
			description:
				'Käytämme moderneja työkaluja ja teknologiaa tehdäksemme kiinteistökaupasta helppoa - virtuaalikierroksia, älykästä hakua ja sujuvaa viestintää.',
		},
		{
			icon: '→',
			title: 'Yksilöllinen palvelu',
			description:
				'Kuuntelemme tarpeitasi ja räätälöimme ratkaisut juuri sinulle - oli kyse sitten ostosta, myynnistä tai vuokrauksesta.',
		},
		{
			icon: '→',
			title: 'Luotettava kumppani',
			description:
				'Läpinäkyvyys ja rehellisyys ohjaavat työtämme. Olemme tukenasi jokaisessa vaiheessa alusta loppuun.',
		},
		{
			icon: '→',
			title: 'Paikallinen asiantuntemus',
			description:
				'Tunnemme markkinat läpikotaisin ja autamme löytämään parhaat kohteet oikeaan hintaan juuri sinun alueeltasi.',
		},
	];

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-end">
					{/* Left Side - Image */}
					<div className="relative h-[600px] rounded-3xl overflow-hidden">
						<Image
							src="https://plus.unsplash.com/premium_photo-1679856789387-b2b6212de338?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
							alt="Modern A-frame house"
							fill
							className="object-cover"
						/>
					</div>

					{/* Right Side - Content */}
					<div>
						<div className="mb-12">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-px bg-primary"></div>
								<span className="text-primary text-sm font-semibold uppercase tracking-wider">
									Miksi valita KotiKetju
								</span>
							</div>
							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
								Asiantuntijasi asuntokaupassa
							</h2>
							<p className="text-gray-600 text-lg leading-relaxed">
								Olemme kumppanisi jokaisessa asuntokaupan vaiheessa. Yhdistämme modernit 
								digitaaliset työkalut, henkilökohtaisen palvelun ja syvän paikallisen 
								markkinatuntemuksen. Tavoitteemme on tehdä sinun kotimatkastasi 
								mahdollisimman sujuva ja stressitön.
							</p>
						</div>

						{/* Features Grid */}
						<div className="grid grid-cols-1 gap-8">
							{features.map((feature, index) => (
								<div key={index} className="group flex gap-4">
									<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
										<svg
											className="w-6 h-6 text-primary"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											{feature.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">
											{feature.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
