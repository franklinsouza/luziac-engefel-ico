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
                                            <Link href="/"><img src="/assets/img/logo/logo02.png" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Contact</h2>
                                        <div className="footer-contact">
                                            <p>1940 El Cajon Blvd, San Diego, <br /> CA 92104, United States</p>
                                            <ul className="list-wrap">
                                                <li><Link href="mailto:relandgroup@mail.com">relandgroup@mail.com</Link></li>
                                                <li><Link href="tel:0123456789">+7 495 127 5451</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-5">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Useful links</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="overview">About Us</Link></li>
                                                <li><Link href="contact">Terms &amp Conditions</Link></li>
                                                <li><Link href="contact">Users Guide</Link></li>
                                                <li><Link href="contact">Support Center</Link></li>
                                                <li><Link href="contact">Privacy Policy</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-5 col-sm-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">newsletter</h2>
                                        <div className="footer-newsletter">
                                            <form action="#">
                                                <input type="email" placeholder="Email address..." />
                                                <button type="submit"><i className="fas fa-arrow-right" /></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text text-center">
                                        <p>Copyright © <span>Reland</span> {new Date().getFullYear()}. All Rights Reserved</p>
                                    </div>
                                    <div className="footer-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
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
