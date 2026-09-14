import Link from "next/link"

export default function Mission() {
    return (
        <>
            <section className="mission-area section-pb-140">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="mission-img">
                                <img src="/assets/img/images/mission_img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mission-content">
                                <div className="section-title mb-40">
                                    <span className="sub-title">Our Mission</span>
                                    <h2 className="title">To be the most trusted name in real estate globally</h2>
                                </div>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia non numquam</p>
                                <Link href="mission" className="btn transparent-btn">
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
