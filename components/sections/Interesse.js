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
                                        <form className="newsletter-form" data-mail-form="interesse">
                                            <ul className="list-wrap">
                                                <li><input type="text" name="Nome" placeholder="Nome" autoComplete="name" required /></li>
                                                <li><input type="tel" name="Telefone" placeholder="Telefone/WhatsApp" autoComplete="tel" required /></li>
                                                <li><input type="email" name="E-mail" placeholder="E-mail" autoComplete="email" required /></li>
                                                <li className="submit-btn"><input type="submit" value="Enviar e falar com um especialista" /></li>
                                            </ul>
                                            {/* Honeypot do mailer.js já no HTML: se o script o injetasse antes da hidratação, o React 19 recriaria a página */}
                                            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="mail-honeypot" />
                                            <p className="mail-msg" data-mail-msg aria-live="polite" />
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
