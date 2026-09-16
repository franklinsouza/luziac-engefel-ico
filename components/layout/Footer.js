import Link from "next/link"

export default function Footer1({ }) {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg">
                    <div className="container">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-xl-3 col-md-4 col-sm-5">
                                    <div className="footer-widget">
                                        <div className="footer-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo-branco-ico.png" alt="Icó Real Parque" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Contato</h2>
                                        <div className="footer-contact">
                                            <p>Av. Barão de Monte Mor, 121 <br /> Real Parque, São Paulo/SP</p>
                                            <ul className="list-wrap">
                                                <li><Link href="tel:+551193714-6936">(11) 93714-6936</Link></li>
                                                <li><Link href="mailto:comercial@engefel.com.br">comercial@engefel.com.br</Link></li>
                                                <li><Link href="https://www.engefel.com.br" target="_blank" rel="noopener noreferrer">www.engefel.com.br</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-5">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Navegue</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="#about">O Empreendimento</Link></li>
                                                <li><Link href="#plantas">Plantas</Link></li>
                                                <li><Link href="#condicoes">Condições</Link></li>
                                                <li><Link href="#localizacao">Localização</Link></li>
                                                <li><Link href="#interesse">Tenho Interesse</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-5 col-sm-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Consulte as condições</h2>
                                        <div className="footer-newsletter">
                                            <p>Entre em contato e consulte as condições especiais.</p>
                                            <Link href="#interesse" className="btn">
                                                <div className="btn_m">
                                                    <div className="btn_c">
                                                        <div className="btn_t1">Falar com um especialista</div>
                                                        <div className="btn_t2">Falar com um especialista</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text text-center">
                                        <p>Copyright © <span>Engefel</span> {new Date().getFullYear()}. Todos os direitos reservados</p>
                                    </div>
                                    <div className="footer-social">
                                        <ul className="list-wrap">
                                            <li><Link href="https://www.instagram.com/icorealparque/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
