import Link from "next/link"

export default function Banner4() {
    return (
        <>
            <section className="banner-area-five banner-bg-four">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-content">
                                <h2 className="title wow fadeInUp" data-wow-delay=".2s">We’ll build your perfect home with our experience</h2>
                                <Link href="overview" className="btn transparent-btn wow fadeInUp" data-wow-delay=".4s">
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
                </div>
                <div className="banner-scroll-down">
                    <Link href="#about" className="section-link">
                        <span />
                        <span />
                        <span />
                    </Link>
                </div>
            </section>

        </>
    )
}
