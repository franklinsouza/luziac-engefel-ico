import Link from "next/link"

import { MapPinIcon } from "@phosphor-icons/react/dist/csr/MapPin"

const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3000!2d-46.7051389!3d-23.6113889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM2JzQxLjAiUyA0NsKwNDInMTguNSJX!5e0!3m2!1spt-BR!2sbr!4v1790096150374!5m2!1spt-BR!2sbr"

const locationHighlights = [
    <>A <strong>400 m de uma das melhores escolas municipais de São Paulo</strong>, a EMEF José de Alcântara Machado Filho</>,
    <>Comércio completo: <strong>Pão de Açúcar, Leroy Merlin, Decathlon, Oxxo, padaria, restaurantes</strong> e opções de gastronomia variada</>,
    <><strong>UPAs, hospitais e farmácias</strong> nas proximidades</>,
    <>Mobilidade para diferentes <strong>regiões de São Paulo e acesso à ciclovia</strong></>,
    <>Próximo à <strong>Marginal Pinheiros</strong></>,
    <>A <strong>1,4 km ... Ponte do Morumbi</strong></>,
    <>Fácil acesso à região da <strong>Berrini</strong></>,
    <>A 10 minutos do <strong>Shopping Morumbi</strong></>,
]

export default function Localizacao() {
    return (
        <section id="localizacao" className="direction-area">
            <div className="direction-img">
                <iframe
                    src={MAPS_EMBED}
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Localização do Edifício Icó Real Parque"
                />
            </div>
            <div className="direction-content-wrap">
                <div className="direction-content">
                    <div className="section-title mb-35">
                        <span className="sub-title">Localização</span>
                        <h2 className="title">Av. Barão de Monte Mor, 121 <br /> Real Parque, São Paulo/SP</h2>
                    </div>
                    <p>Localização estratégica para quem busca praticidade e mobilidade!</p>
                    <ul className="location-list">
                        {locationHighlights.map((item, i) => (
                            <li key={i}>
                                <span className="icon"><MapPinIcon size={20} weight="fill" /></span>
                                <span className="text">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="#interesse"
                        className="btn"
                        data-track="cta_click"
                        data-track-cta="localizacao"
                    >
                        <div className="btn_m">
                            <div className="btn_c">
                                <div className="btn_t1">Tenho interesse</div>
                                <div className="btn_t2">Tenho interesse</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
