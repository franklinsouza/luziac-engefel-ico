import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Mission() {

    return (
        <>
            <Layout headerStyle={6}>

                {/* breadcrumb-area */}
                <section className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <h2 className="title">Our Mission</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Mission</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb-area-end */}
                {/* mission-area */}
                <section className="mission-area">
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
                {/* mission-area-end */}
                {/* vision-area */}
                <section className="vision-area section-pt-140 section-pb-140">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-0 order-lg-2">
                                <div className="vision-img text-center">
                                    <img src="/assets/img/images/vision_img.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="vision-content">
                                    <div className="section-title mb-35">
                                        <span className="sub-title">Our vision</span>
                                        <h2 className="title">We believe that we are enablers of people's dreams</h2>
                                    </div>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia non numquam</p>
                                    <img src="/assets/img/images/sine.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* vision-area-end */}
                {/* services-area */}
                <section className="services-area services-style-three section-pt-140 section-pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8">
                                <div className="section-title text-center mb-55">
                                    <span className="sub-title">What we do</span>
                                    <h2 className="title">Creating a great tomorrow for everyone</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-thumb">
                                        <Link href="#"><img src="/assets/img/images/services_01.png" alt="" /></Link>
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title"><Link href="#">Residential Development</Link></h2>
                                        <p>Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                            dolorem ipsum quia dolor sit amet sed quia</p>
                                        <Link href="#" className="text-btn">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-thumb">
                                        <Link href="#"><img src="/assets/img/images/services_02.png" alt="" /></Link>
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title"><Link href="#">Commercial Development</Link></h2>
                                        <p>Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                            dolorem ipsum quia dolor sit amet sed quia</p>
                                        <Link href="#" className="text-btn">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-thumb">
                                        <Link href="#"><img src="/assets/img/images/services_03.png" alt="" /></Link>
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title"><Link href="#">Industrial Development</Link></h2>
                                        <p>Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                            dolorem ipsum quia dolor sit amet sed quia</p>
                                        <Link href="#" className="text-btn">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* services-area-end */}
                {/* testimonial-area */}
                <section className="testimonial-area section-pt-140 section-pb-110">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-9">
                                <div className="section-title text-center mb-60">
                                    <span className="sub-title">Testimonials</span>
                                    <h2 className="title">Trusted by thousands of our happy customers</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="testimonial-item">
                                    <div className="testimonial-thumb">
                                        <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                        <div className="icon"><i className="fas fa-quote-right" /></div>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt”</p>
                                        <span>Jeffrey Kreshek <br /> New York</span>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-thumb">
                                        <img src="/assets/img/images/testimonial_avatar02.png" alt="" />
                                        <div className="icon"><i className="fas fa-quote-right" /></div>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt”</p>
                                        <span>Mike Stevenson <br /> Florida</span>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-thumb">
                                        <img src="/assets/img/images/testimonial_avatar03.png" alt="" />
                                        <div className="icon"><i className="fas fa-quote-right" /></div>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt”</p>
                                        <span>Merrin Dardenne <br /> Charlotte</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-area-end */}
                {/* newsletter-area */}
                <section className="newsletter-area newsletter-area-two section-pb-140">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="newsletter-inner">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-8">
                                            <div className="newsletter-content">
                                                <div className="section-title mb-50">
                                                    <span className="sub-title">Quick Inquiry</span>
                                                    <h2 className="title">If you have any question? we are glad to consult you as soon as possible</h2>
                                                </div>
                                                <form action="#" className="newsletter-form">
                                                    <ul className="list-wrap">
                                                        <li><input type="text" placeholder="Your name" required="required" /></li>
                                                        <li><input type="text" placeholder="Phone number" required="required" /></li>
                                                        <li className="submit-btn"><input type="submit" defaultValue="submit" /></li>
                                                    </ul>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="checkbox" />
                                                        <label htmlFor="checkbox">I accept <span>Terms &amp Conditions</span> for processing personal data</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* newsletter-area-end */}


            </Layout >
        </>
    )
}