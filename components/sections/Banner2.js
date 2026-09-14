import Link from "next/link"

export default function Banner2() {
    return (
        <>
            <section className="banner-area-three">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content">
                                <h2 className="title wow fadeInUp" data-wow-delay=".2s">Great spaces for perfection &amp class at best prices</h2>
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
                        <div className="col-lg-5">
                            <div className="banner-img text-end">
                                <img src="/assets/img/banner/h3_banner_img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-social">
                    <ul className="list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                    </ul>
                </div>
            </section>

        </>
    )
}
