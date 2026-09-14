import Link from "next/link"


export default function About() {
    return (
        <>
            <section id="about" className="about-area section-pt-135 section-pb-140">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center mb-35">
                                <span className="sub-title">Who we are</span>
                                <h2 className="title">30 years of leadership in real estate sector</h2>
                            </div>
                            <div className="about-content text-center">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia non numquam eius modi tempora incidunt</p>
                                <Link href="overview" className="btn transparent-btn">
                                    <div className="btn_m">
                                        <div className="btn_c">
                                            <div className="btn_t1">more about</div>
                                            <div className="btn_t2">more about</div>
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
