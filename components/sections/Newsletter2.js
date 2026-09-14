
export default function Newsletter2() {
    return (
        <>
            <section className="newsletter-area newsletter-area-two section-pt-140">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="newsletter-inner">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8">
                                        <div className="newsletter-content">
                                            <div className="section-title mb-50">
                                                <span className="sub-title">Quick Inquiry</span>
                                                <h2 className="title">If you have any question? we are glad to consult you as soon as possible</h2>
                                            </div>
                                            <form action="#" className="newsletter-form">
                                                <ul className="list-wrap">
                                                    <li><input type="text" placeholder="Your name" required="required" /></li>
                                                    <li><input type="text" placeholder="Phone number" required="required" /></li>
                                                    <li className="submit-btn"><input type="submit" defaultValue="submit" /></li>
                                                </ul>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkbox" />
                                                    <label htmlFor="checkbox">I accept <span>Terms &amp Conditions</span> for processing personal data</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
