import { BedIcon } from "@phosphor-icons/react/dist/csr/Bed"
import { BuildingApartmentIcon } from "@phosphor-icons/react/dist/csr/BuildingApartment"
import { HandCoinsIcon } from "@phosphor-icons/react/dist/csr/HandCoins"

export default function HeroDestaques() {
    return (
        <section className="hero-destaques-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6">
                        <div className="hero-destaque-item">
                            <div className="icon"><BuildingApartmentIcon size={28} weight="light" /></div>
                            <p>Edifício <strong>Icó Real Parque</strong></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="hero-destaque-item">
                            <div className="icon"><BedIcon size={28} weight="light" /></div>
                            <p>Plantas de <strong>1 e 2 dormitórios</strong></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="hero-destaque-item">
                            <div className="icon"><HandCoinsIcon size={28} weight="light" /></div>
                            <p><strong>Condições especiais</strong> para o 1º imóvel</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
