import { useEffect, useState } from 'react'
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Header1 from './Header1'
import Header2 from './Header2'
import Header3 from './Header3'
import Header4 from './Header4'
import Header5 from './Header5'
import Header6 from './Header6'
import Header7 from './Header7'
import Header8 from './Header8'
import PageHead from './PageHead'

export default function Layout({ headerStyle, headTitle, breadcrumbTitle, children, noFooter }) {

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()
    }, [])

    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    // Scroll Header
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <PageHead headTitle={headTitle} />
            {!headerStyle && <Header1 handleMobileMenu={handleMobileMenu} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} /> : null}
            {headerStyle == 3 ? <Header3 scroll={scroll} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 4 ? <Header4 /> : null}
            {headerStyle == 5 ? <Header5 scroll={scroll} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 6 ? <Header6 scroll={scroll} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 7 ? <Header7 scroll={scroll} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 8 ? <Header8 /> : null}

            <main>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
            </main>
            {noFooter ? null : < Footer />}

            <BackToTop />
        </>
    )
}
