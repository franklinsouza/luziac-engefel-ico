export default function Testimonial() {
    return (
        <>
            <section className="testimonial-area section-py-140">
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
                                <div className="testimonial-content wow fadeInRight" data-wow-delay=".2s">
                                    <p>“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt”</p>
                                    <span>Jeffrey Kreshek <br /> New York</span>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-thumb">
                                    <img src="/assets/img/images/testimonial_avatar02.png" alt="" />
                                    <div className="icon"><i className="fas fa-quote-right" /></div>
                                </div>
                                <div className="testimonial-content wow fadeInLeft" data-wow-delay=".4s">
                                    <p>“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt”</p>
                                    <span>Mike Stevenson <br /> Florida</span>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-thumb">
                                    <img src="/assets/img/images/testimonial_avatar03.png" alt="" />
                                    <div className="icon"><i className="fas fa-quote-right" /></div>
                                </div>
                                <div className="testimonial-content wow fadeInRight" data-wow-delay=".2s">
                                    <p>“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt”</p>
                                    <span>Merrin Dardenne <br /> Charlotte</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
