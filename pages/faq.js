import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Faq() {

    return (
        <>
            <Layout headerStyle={6}>

                {/* breadcrumb-area */}
                <section className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <h2 className="title">FAQ</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Faq</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb-area-end */}
                {/* faq-area */}
                <section className="faq-area">
                    <div className="container">
                        <div className="faq-wrap">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="faq-title mb-50">
                                        <div className="section-title">
                                            <span className="sub-title">Get answer</span>
                                            <h2 className="title">General questions</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="faq-item-wrap">
                                        <div className="faq-item">
                                            <h2 className="title">High Quality Rooms</h2>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                                        </div>
                                        <div className="faq-item">
                                            <h2 className="title">Best Amenities at The Best Price</h2>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                                        </div>
                                        <div className="faq-item">
                                            <h2 className="title">Campfire &amp Nature Walks</h2>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                                        </div>
                                        <div className="faq-item">
                                            <h2 className="title">Pickup And Drop Facility</h2>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="faq-wrap">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="faq-title mb-50">
                                        <div className="section-title">
                                            <span className="sub-title">Get answer</span>
                                            <h2 className="title">Other <br /> questions</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="faq-item-wrap">
                                        <div className="faq-item">
                                            <h2 className="title">Turiest Guide Support</h2>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                                        </div>
                                        <div className="faq-item">
                                            <h2 className="title">Hight Class Security</h2>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                                        </div>
                                        <div className="faq-item">
                                            <h2 className="title">Quick Access to Tourist Attractions</h2>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                                        </div>
                                        <div className="faq-item">
                                            <h2 className="title">Independent Cottages</h2>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* faq-area-end */}
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
                                                    <h2 className="title">If you have any question? we are glad to consult you as soon as
                                                        possible</h2>
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