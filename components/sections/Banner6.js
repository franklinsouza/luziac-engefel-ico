import Link from "next/link"

export default function Banner6() {
    return (
        <>
            <section className="banner-area-seven">
                <div className="banner-shape" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-content text-center">
                                <h2 className="title wow fadeInUp" data-wow-delay=".2s">The home of excellence in real estate industry</h2>
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
            </section>

        </>
    )
}
