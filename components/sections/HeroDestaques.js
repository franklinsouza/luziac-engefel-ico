import Link from "next/link"
import { BedIcon } from "@phosphor-icons/react/dist/csr/Bed"
import { HandCoinsIcon } from "@phosphor-icons/react/dist/csr/HandCoins"
import { MapPinIcon } from "@phosphor-icons/react/dist/csr/MapPin"

export default function HeroDestaques() {
    return (
        <section className="hero-destaques-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6">
                        <div className="hero-destaque-item">
                            <div className="icon"><BedIcon size={28} weight="light" /></div>
                            <p>Plantas de <strong>2 dormitórios</strong></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="hero-destaque-item">
                            <div className="icon"><MapPinIcon size={28} weight="light" /></div>
                            <p><strong>Tudo perto de você</strong> <br />Escola, saúde e comércio</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="hero-destaque-item">
                            <Link href="#interesse" className="btn" data-track="cta_click" data-track-cta="destaques">
                                <div className="btn_m">
                                    <div className="btn_c">
                                        <div className="btn_t1">Quero saber mais</div>
                                        <div className="btn_t2">Quero saber mais</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
