import Link from "next/link"

export default function Banner3() {
    return (
        <>
            <section className="banner-area-four banner-bg-three">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="banner-content text-center">
                                <h2 className="title wow fadeInUp" data-wow-delay=".2s">Great space</h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">Dictum varius duis at consectetur lorem donec massa sapien faucibus. Tincidunt arcu non sodales neque sodales ut etiam sit amet</p>
                                <Link href="overview" className="btn wow fadeInUp" data-wow-delay=".4s">
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
                    <Link href="#" data-target="#mission" className="section-link-two">
                        <span />
                        <span />
                        <span />
                    </Link>
                </div>
            </section>

        </>
    )
}
