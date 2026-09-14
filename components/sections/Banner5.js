import Link from "next/link"

export default function Banner5() {
    return (
        <>
            <section className="banner-area-six">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-8 col-xl-7 col-lg-10">
                            <div className="banner-content">
                                <h2 className="title wow fadeInUp" data-wow-delay=".2s">Quick way to find your new property &amp new future</h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
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
                </div>
                <div className="banner-img-wrap">
                    <div className="left-images">
                        <img src="/assets/img/banner/h6_banner_img01.jpg" alt="img" className="parralax-image" />
                    </div>
                    <div className="right-images">
                        <img src="/assets/img/banner/h6_banner_img02.jpg" alt="img" className="parralax-image" />
                    </div>
                </div>
                <div className="banner-scroll-down">
                    <Link href="#services" className="section-link">
                        <span />
                        <span />
                        <span />
                    </Link>
                </div>
            </section>

        </>
    )
}
