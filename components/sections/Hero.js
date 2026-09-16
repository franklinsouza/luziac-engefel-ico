import Link from "next/link"

export default function Hero() {
    return (
        <>
            <section className="slider-area">
                <div className="single-slider slider-bg hero-bg" style={{ backgroundImage: `url("/assets/img/banner/bg-hero.webp")` }}>
                    <div className="container custom-container">
                        <div className="row g-0">
                            <div className="col-lg-7">
                                <div className="hero-content text-start">
                                    <span className="hero-kicker wow fadeInDown" data-wow-delay=".1s"><span className="hero-kicker-accent">Real Parque</span> · São Paulo, SP</span>
                                    <h2 className="hero-title wow fadeInUp" data-wow-delay=".2s">Realize o sonho da casa própria com condições que cabem no seu bolso!</h2>
                                    <p className="hero-text wow fadeInUp" data-wow-delay=".4s">Chegou a hora de sair do aluguel e conquistar seu primeiro imóvel em uma das melhores localizações de São Paulo.</p>
                                    <Link href="#interesse" className="btn wow fadeInUp" data-wow-delay=".6s">
                                        <div className="btn_m">
                                            <div className="btn_c">
                                                <div className="btn_t1">Tenho interesse</div>
                                                <div className="btn_t2">Tenho interesse</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="banner-scroll-down">
                <Link href="#about" className="section-link">
                    <span />
                    <span />
                    <span />
                </Link>
            </div>

        </>
    )
}
