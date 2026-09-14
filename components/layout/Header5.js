import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header5({ handleMobileMenu, scroll }) {
    return (
        <>
            <header className="header-style-four">
                <div className="header-top">
                    <div className="container custom-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="header-top-left">
                                    <p>1940 El Cajon Blvd, San Diego, CA 92104, United States</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="header-top-right">
                                    <ul className="list-wrap">
                                        <li><Link href="mailto:relandgroup@mail.com">relandgroup@mail.com</Link></li>
                                        <li><Link href="tel:0123456789">+7 495 127 5451</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className={`menu-area transparent-header ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/logo02.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <Menu />
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo02.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
