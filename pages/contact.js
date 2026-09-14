import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

    return (
        <>
            <Layout headerStyle={6}>

                {/* breadcrumb-area */}
                <section className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <h2 className="title">Contact Us</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb-area-end */}
                {/* contact-info */}
                <section className="contact-info pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="contact-info-item">
                                    <span className="sub-title">Main office</span>
                                    <h2 className="title">1940 El Cajon Blvd, San Diego, CA 92104, United States</h2>
                                    <ul className="list-wrap">
                                        <li><Link href="mailto:relandgroup@mail.com">relandgroup@mail.com</Link></li>
                                        <li><Link href="tel:0123456789">+7 495 127 5451</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="contact-info-item">
                                    <span className="sub-title">Second office</span>
                                    <h2 className="title">1401 S Grand Ave, Los Angeles, CA 90015, United States</h2>
                                    <ul className="list-wrap">
                                        <li><Link href="mailto:relandgroup@mail.com">relandgroup@mail.com</Link></li>
                                        <li><Link href="tel:0123456789">+7 495 127 5451</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="contact-info-item">
                                    <span className="sub-title">Third office</span>
                                    <h2 className="title">2601 Holme Ave, Philadelphia, PA 19152, United States</h2>
                                    <ul className="list-wrap">
                                        <li><Link href="mailto:relandgroup@mail.com">relandgroup@mail.com</Link></li>
                                        <li><Link href="tel:0123456789">+7 495 127 5451</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* contact-info-end */}
                {/* contact-map */}
                <div className="map-area">
                    <div className="container">
                        <div id="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96811.54759587669!2d-74.01263924803828!3d40.6880494567041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1636195194646!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
                        </div>
                    </div>
                </div>
                {/* contact-map-end */}
                {/* contact-form-area */}
                <section className="contact-form-area pt-140 pb-140">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-55">
                                    <span className="sub-title">leave a message</span>
                                    <h2 className="title">Let’s make something new together</h2>
                                </div>
                                <div className="contact-form-wrap">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" placeholder="Your name" required="required" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" placeholder="Phone number" required="required" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <textarea name="message" placeholder="Write message" required="required" defaultValue={""} />
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="checkbox" />
                                            <label htmlFor="checkbox">I accept <span>Terms &amp Conditions</span> for processing personal data</label>
                                        </div>
                                        <div className="form-submit">
                                            <input type="submit" defaultValue="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* contact-form-area-end */}



            </Layout>
        </>
    )
}