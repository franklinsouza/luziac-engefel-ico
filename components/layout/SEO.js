import Head from 'next/head'

const SITE_URL = 'https://www.engefel.com.br'
const TITLE = 'Edifício ICÓ Real Parque – Apartamentos na Zona Sul de SP'
const DESCRIPTION = 'Apartamentos de 1 e 2 dormitórios com lazer no terraço e financiamento facilitado pela Caixa, no Real Parque, Zona Sul de São Paulo. Condições especiais para o primeiro imóvel.'
const KEYWORDS = ['apartamento 1 dormitório São Paulo', 'apartamento 2 dormitórios São Paulo', 'Edifício Icó Real Parque', 'apartamento Zona Sul São Paulo', 'financiamento Caixa Econômica Federal', 'FGTS primeiro imóvel', 'apartamento em obras Real Parque', 'imóveis Engefel', 'sair do aluguel São Paulo']
const IMAGE = `${SITE_URL}/assets/img/og-image.png`
const PHONE = '(11) 93714-6936'
const ADDRESS = 'Av. Barão de Monte Mor, 121 – Real Parque, São Paulo/SP'

const JSON_LD = `{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "RealEstateListing",
            "name": "Edifício ICÓ Real Parque",
            "description": "Apartamentos de 1 e 2 dormitórios no Real Parque, Zona Sul de São Paulo. Unidades com ou sem vaga de garagem, lazer completo no terraço e financiamento facilitado pela Caixa Econômica Federal.",
            "url": "${SITE_URL}",
            "image": "${IMAGE}",
            "inLanguage": "pt-BR",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Barão de Monte Mor, 121",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.5945,
                "longitude": -46.697
            },
            "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Apartment",
            "name": "1 dormitório",
            "floorSize": {
                "@type": "QuantitativeValue",
                "value": 39.27,
                "unitCode": "MTK"
            },
            "numberOfRooms": 1
        },
        {
            "@type": "Apartment",
            "name": "2 dormitórios",
            "floorSize": {
                "@type": "QuantitativeValue",
                "value": 41.32,
                "unitCode": "MTK"
            },
            "numberOfRooms": 2
        },
        {
            "@type": "Organization",
            "name": "Engefel",
            "url": "https://www.engefel.com.br",
            "telephone": "${PHONE}"
        }
    ]
}`

const SEO = () => {
    return (
        <>
            <Head>
                <meta name="description" content={DESCRIPTION} />
                <meta name="keywords" content={KEYWORDS.join(', ')} />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Engefel" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={SITE_URL} />
                <meta name="theme-color" content="#0b1d33" />
                <meta name="geo.region" content="BR-SP" />
                <meta name="geo.placename" content="São Paulo" />
                <meta name="geo.position" content="-23.5945;-46.697" />
                <meta name="ICBM" content="-23.5945, -46.697" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:site_name" content="Engefel" />
                <meta property="og:title" content={TITLE} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:image" content={IMAGE} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Edifício ICÓ Real Parque" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={TITLE} />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta name="twitter:image" content={IMAGE} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON_LD }}
                />
            </Head>
        </>
    )
}

export default SEO