import { NextRequest, NextResponse } from 'next/server';
import { mockDb } from '@/lib/mockData';

export async function POST(request: NextRequest) {
	try {
		const { messages } = await request.json();

		// Get some property data for context
		const recentProperties = await mockDb.property.findMany({
			where: { published: true },
			take: 5,
			orderBy: { createdAt: 'desc' },
			select: {
				title: true,
				city: true,
				price: true,
				bedrooms: true,
				propertyType: true,
			},
		});

		const propertyContext = recentProperties
			.map(
				(p) =>
					`${p.title} ${p.city}ssa - ${p.bedrooms} makuuhuonetta, €${Number(
						p.price
					).toLocaleString('fi-FI')}, Tyyppi: ${p.propertyType}`
			)
			.join('\n');

		const systemPrompt = `Olet avulias kiinteistöavustaja KotiKetjulle, suomalaiselle kiinteistöyritykselle. 

Roolisi:
- Auta asiakkaita löytämään kiinteistöjä
- Vastaa kysymyksiin kohteista
- Varaa kiinteistökierroksia
- Anna tietoa osto-/vuokrausprosessista
- Ole ystävällinen, ammattimainen ja asiantunteva

Tällä hetkellä saatavilla olevat kohteet:
${propertyContext}

Ohjeet:
- Ole aina kohtelias ja avulias
- Jos kysytään tietyistä kohteista, mainitse yllä luetellut
- Kiinteistöhakuja varten ehdota /properties-sivun käyntiä
- Kierroksia varten ehdota yhteyttä välittäjään tai yhteydenottolomakkeen täyttöä
- Vastaa keskustelunomaisesti ja ystävällisesti
- Pidä vastaukset tiiviinä mutta informatiivisina
- Jos et tiedä jotain, ole rehellinen ja ehdota yhteydenottoa tukeen
- VASTAA AINA SUOMEKSI`;

	
		const lastMessage =
			messages[messages.length - 1]?.content.toLowerCase() || '';

		let assistantMessage = '';

		if (
			lastMessage.includes('hello') ||
			lastMessage.includes('hi') ||
			lastMessage.includes('hei') ||
			lastMessage.includes('moi') ||
			lastMessage.includes('terve')
		) {
			assistantMessage =
				'Hei! Tervetuloa KotiKetjuun. Voin auttaa sinua löytämään täydellisen kiinteistön. Mitä etsit?';
		} else if (
			lastMessage.includes('property') ||
			lastMessage.includes('properties') ||
			lastMessage.includes('kiinteistö') ||
			lastMessage.includes('kohde') ||
			lastMessage.includes('asunto')
		) {
			assistantMessage = `Meillä on useita mahtavia kiinteistöjä saatavilla! Tässä joitakin viimeaikaisia kohteita:\n\n${propertyContext}\n\nHaluatko nähdä lisätietoja? Käy kiinteistösivullamme osoitteessa /properties`;
		} else if (
			lastMessage.includes('price') ||
			lastMessage.includes('cost') ||
			lastMessage.includes('€') ||
			lastMessage.includes('hinta') ||
			lastMessage.includes('budjetti')
		) {
			const matches = lastMessage.match(/\d+/);
			const budget = matches ? matches[0] : '300000';
			assistantMessage = `Etsit kiinteistöjä noin €${Number(
				budget
			).toLocaleString(
				'fi-FI'
			)} hintaan? Voin auttaa siinä! Kiinteistömme vaihtelevat edullisista asunnoista luksuskoteihin. Tutustu kaikkiin kohteisiimme osoitteessa /properties suodattaaksesi hinnan mukaan.`;
		} else if (
			lastMessage.includes('bedroom') ||
			lastMessage.includes('bed') ||
			lastMessage.includes('makuuhuone')
		) {
			assistantMessage =
				'Kuinka monta makuuhuonetta tarvitset? Meillä on kiinteistöjä kodikkaista 1 makuuhuoneen asunnoista tilaviin 5+ makuuhuoneen perhetaloihin. Käy osoitteessa /properties suodattaaksesi makuuhuoneiden määrän mukaan!';
		} else if (
			lastMessage.includes('tour') ||
			lastMessage.includes('visit') ||
			lastMessage.includes('schedule') ||
			lastMessage.includes('kierros') ||
			lastMessage.includes('katselu') ||
			lastMessage.includes('vierailu') ||
			lastMessage.includes('varaa')
		) {
			assistantMessage =
				'Autan mielelläni varaamaan kiinteistökierroksen! Käy "Ota yhteyttä" -osiossamme tai klikkaa mitä tahansa kiinteistökohdetta ottaaksesi yhteyttä kohteen välittäjään suoraan. He järjestävät mielellään katselun sinulle sopivaan aikaan.';
		} else if (
			lastMessage.includes('contact') ||
			lastMessage.includes('email') ||
			lastMessage.includes('phone') ||
			lastMessage.includes('yhteystiedot') ||
			lastMessage.includes('puhelin') ||
			lastMessage.includes('sähköposti')
		) {
			assistantMessage =
				'Voit tavoittaa meidät "Ota yhteyttä" -osiossamme. Täytä lomake ja tiimimme ottaa sinuun yhteyttä 24 tunnin kuluessa. Voit myös ottaa yhteyttä tiettyihin välittäjiin, jotka on lueteltu jokaisella kiinteistösivulla.';
		} else if (
			lastMessage.includes('help') ||
			lastMessage.includes('apua') ||
			lastMessage.includes('auttaa')
		) {
			assistantMessage =
				'Olen täällä auttamassa! Voin auttaa sinua:\n\n• Kiinteistöjen löytämisessä\n• Kiinteistötiedoissa\n• Kierrosten varaamisessa\n• Yleisten kysymysten vastaamisessa\n\nMitä haluaisit tietää?';
		} else if (
			lastMessage.includes('helsinki') ||
			lastMessage.includes('tampere') ||
			lastMessage.includes('turku') ||
			lastMessage.includes('espoo') ||
			lastMessage.includes('vantaa') ||
			lastMessage.includes('city') ||
			lastMessage.includes('kaupunki')
		) {
			const city = lastMessage.includes('helsinki')
				? 'Helsinki'
				: lastMessage.includes('tampere')
				? 'Tampere'
				: lastMessage.includes('turku')
				? 'Turku'
				: lastMessage.includes('espoo')
				? 'Espoo'
				: lastMessage.includes('vantaa')
				? 'Vantaa'
				: 'haluamasi kaupunki';
			assistantMessage = `Etsit kiinteistöjä ${
				city === 'haluamasi kaupunki'
					? 'haluamastasi kaupungista'
					: city + 'sta'
			}? Meillä on useita kohteita siellä! Käy "Kohteet"-osiossa nähdäksesi kaikki saatavilla olevat kiinteistöt ja suodattaaksesi sijainnin mukaan.`;
		} else if (
			lastMessage.includes('thank') ||
			lastMessage.includes('kiitos') ||
			lastMessage.includes('kiitti')
		) {
			assistantMessage =
				'Ole hyvä! Jos sinulla on muita kysymyksiä, kysy vapaasti. Onnea asunnonmetsästykseen! 🏠';
		} else {
			assistantMessage = `Kiitos kysymyksestäsi! ${
				recentProperties.length > 0
					? `Meillä on tällä hetkellä ${recentProperties.length} kohdetta listattu. `
					: ''
			}Voit vapaasti selata kiinteistöjämme "Kohteet"-osiossa tai ottaa yhteyttä "Ota yhteyttä" -osiossa henkilökohtaista apua varten. Missä muussa voin auttaa?`;
		}

		return NextResponse.json({ message: assistantMessage });
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to process chat message' },
			{ status: 500 }
		);
	}
}
