import Link from "next/link"
import { useState } from "react"
import Sidebar2 from "./Sidebar2"

export default function Header8() {
    const [isBurgerMenu, setBurgerMenu] = useState(false)
    const handleBurgerMenu = () => {
        setBurgerMenu(!isBurgerMenu)
        !isBurgerMenu ? document.body.classList.add("burger-menu-visible", "menu-open") : document.body.classList.remove("burger-menu-visible", "menu-open")

    }
    return (
        <>
            <header>
                <div id="header-fixed-height" />
                <div id="sticky-header" className="menu-area-two menu-area-seven d-none">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo-two">
                                            <Link href="/"><img src="/assets/img/logo/logo02.png" alt="" /></Link>
                                        </div>
                                        <div className="header-action">
                                            <ul className="list-wrap">
                                                <li className="header-contact">
                                                    <ul className="list-wrap">
                                                        <li><Link href="mailto:relandgroup@mail.com">relandgroup@mail.com</Link></li>
                                                        <li><Link href="tel:0123456789">+7 495 127 5451</Link></li>
                                                    </ul>
                                                </li>
                                                <li className={`icon burger-menu ${isBurgerMenu ? "active" : ""}`} onClick={handleBurgerMenu}>
                                                    <Link href="#">
                                                        <span />
                                                        <span />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Sidebar2 isBurgerMenu={isBurgerMenu} handleBurgerMenu={handleBurgerMenu} />
        </>
    )
}
