import Link from "next/link"

import { CheckCircleIcon } from "@phosphor-icons/react/dist/csr/CheckCircle"

const items = [
    "Financiamento facilitado pelo Programa Minha Casa, Minha Vida",
    "Oportunidade para sair do aluguel e conquistar sua casa própria",
]

export default function Condicoes() {
    return (
        <section id="condicoes" className="conditions-area section-pt-135 section-pb-140">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="conditions-img">
                            <img src="/assets/img/empreendimento/empreendimento-11.webp" alt="Sala de estar e cozinha integradas do Edifício Icó Real Parque" />
                            <span>Imagem meramente ilustrativa</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="conditions-content">
                            <div className="section-title mb-35">
                                <span className="sub-title sub-title-accent">Como Adquirir</span>
                                <h2 className="title">Condições de aquisição</h2>
                            </div>
                            <ul className="conditions-list">
                                {items.map((item) => (
                                    <li key={item}>
                                        <span className="icon"><CheckCircleIcon size={26} weight="fill" /></span>
                                        <span className="text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="#interesse" className="btn" data-track="cta_click" data-track-cta="condicoes">
                                <div className="btn_m">
                                    <div className="btn_c">
                                        <div className="btn_t1">Quero saber mais sobre as condições</div>
                                        <div className="btn_t2">Quero saber mais sobre as condições</div>
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
