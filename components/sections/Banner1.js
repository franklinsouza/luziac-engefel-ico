import Link from "next/link"

export default function Banner1() {
    return (
        <>
            <section className="banner-area-two">
                <div className="banner-bg-three jarallax" />
                <div className="container custom-container-two">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content-two">
                                <h2 className="title wow fadeInUp" data-wow-delay=".2s">Responsible leadership from how we build to how we work</h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">Dictum varius duis at consectetur lorem donec massa sapien faucibus. Tincidunt arcu non sodales neque sodales ut etiam sit amet</p>
                                <Link href="overview" className="btn wow fadeInUp" data-wow-delay=".6s">
                                    <div className="btn_m">
                                        <div className="btn_c">
                                            <div className="btn_t1">learn more</div>
                                            <div className="btn_t2">learn more</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="banner-scroll-down">
                        <Link href="#counter" className="section-link">
                            <span />
                            <span />
                            <span />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}
