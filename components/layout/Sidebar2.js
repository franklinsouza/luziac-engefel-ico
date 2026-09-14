import Link from "next/link"
import VerticalMenu from "./VerticalMenu"

export default function Sidebar2({ isBurgerMenu, handleBurgerMenu }) {
    return (
        <>
            <div className={`side-menu-wrapper tgCanvas-menu ${isBurgerMenu ? "side-menu-show" : ""}`}>
                <div className="side-menu-inner">
                    <VerticalMenu isShow />
                </div>
            </div>

            <div className="sidebar-menu-backdrop tgCanvas-backdrop" onClick={handleBurgerMenu} />
            <div className="sidebar-menu-two">
                <div className="sidebar-contact">
                    <div className="menu-icon burger-menu" onClick={handleBurgerMenu}>
                        <Link href="#">
                            <span />
                            <span />
                        </Link>
                    </div>
                    <ul className="list-wrap">
                        <li><Link href="mailto:relandgroup@mail.com">relandgroup@mail.com</Link></li>
                        <li><Link href="tel:0123456789">+7 495 127 5451</Link></li>
                    </ul>
                </div>
                <div className="sidebar-logo">
                    <Link href="/"><img src="/assets/img/logo/logo02.png" alt="" /></Link>
                </div>
            </div>
        </>
    )
}
