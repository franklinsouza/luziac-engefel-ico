import Link from "next/link"

const MAPS_QUERY = "Av.+Barão+de+Monte+Mor,+121+-+Real+Parque,+São+Paulo+-+SP"

export default function Localizacao() {
    return (
        <section id="localizacao" className="direction-area">
            <div className="direction-img">
                <iframe
                    src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    title="Localização do Edifício Icó Real Parque"
                />
            </div>
            <div className="direction-content-wrap">
                <div className="direction-content">
                    <div className="section-title mb-35">
                        <span className="sub-title">Localização</span>
                        <h2 className="title">Av. Barão de Monte Mor, 121 – Real Parque, São Paulo/SP</h2>
                    </div>
                    <p>Localização estratégica para quem busca praticidade e mobilidade! Próximo à Marginal Pinheiros, Morumbi, Berrini, Ponte Estaiada, shoppings e outros serviços da região.</p>
                    <Link
                        href="#interesse"
                        className="btn"
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
