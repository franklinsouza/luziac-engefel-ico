import Link from "next/link"

export default function Hero() {
    return (
        <>
            <section className="slider-area">
                <div className="single-slider slider-bg hero-bg" style={{ backgroundImage: `url("/assets/img/banner/bg-hero.webp")` }}>
                    <video
                        className="hero-bg-video"
                        src="/assets/video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <div className="container custom-container">
                        <div className="row g-0">
                            <div className="col-lg-7">
                                <div className="hero-content text-start">
                                    <div className="hero-brand wow fadeInDown" data-wow-delay=".1s">
                                        <div className="hero-mcmv-badge">
                                            <img src="/assets/img/logo-mcmv.png" alt="Selo do Programa Minha Casa Minha Vida" />
                                        </div>
                                        <span className="hero-kicker">
                                            <span className="hero-kicker-accent">Real Parque</span>
                                            <span>São Paulo, SP</span>
                                        </span>
                                    </div>
                                    <h2 className="hero-title wow fadeInUp" data-wow-delay=".2s">O Icó Real Parque te entrega tudo: localização, lazer e possibilidades</h2>
                                    <p className="hero-text wow fadeInUp" data-wow-delay=".4s">Seu primeiro imóvel em uma das regiões mais estratégicas da Zona Sul de São Paulo, com plantas inteligentes, acabamento de qualidade e condições personalizadas.</p>
                                    <Link href="#interesse" className="btn wow fadeInUp" data-wow-delay=".6s" data-track="cta_click" data-track-cta="hero">
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

                    <div className="hero-disclaimer">
                        Imagens meramente ilustrativas
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
