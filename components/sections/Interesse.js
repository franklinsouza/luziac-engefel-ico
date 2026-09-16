export default function Interesse() {
    return (
        <section id="interesse" className="newsletter-area section-pt-135 section-pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="newsletter-inner">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="newsletter-content">
                                        <div className="section-title mb-35">
                                            <span className="sub-title">Formulário de Interesse</span>
                                            <h2 className="title">Dê o primeiro passo <br /> para conquistar seu imóvel</h2>
                                        </div>
                                        <form action="#" className="newsletter-form">
                                            <ul className="list-wrap">
                                                <li><input type="text" placeholder="Nome" required /></li>
                                                <li><input type="tel" placeholder="Telefone/WhatsApp" required /></li>
                                                <li><input type="email" placeholder="E-mail" required /></li>
                                                <li>
                                                    <select defaultValue="" required>
                                                        <option value="" disabled>Tenho interesse em...</option>
                                                        <option value="1-dormitorio">1 dormitório</option>
                                                        <option value="2-dormitorios">2 dormitórios</option>
                                                    </select>
                                                </li>
                                                <li className="submit-btn"><input type="submit" value="Enviar e falar com um especialista" /></li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
