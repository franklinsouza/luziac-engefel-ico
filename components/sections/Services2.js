import Link from "next/link"

export default function Services2() {
    return (
        <>
            <section className="services-area-two section-pt-140">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="services-img-two text-center">
                                <img src="assets/img/images/services_04.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services-content-two">
                                <div className="section-title mb-50">
                                    <span className="sub-title">Our services</span>
                                    <h2 className="title">Making living spaces affordable</h2>
                                </div>
                                <div className="services-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <Link href="#">High Quality Products</Link>
                                        </li>
                                        <li><Link href="#">Green Environment</Link></li>
                                        <li><Link href="#">Comprehensive Amenities</Link></li>
                                        <li><Link href="#">Professional Services</Link></li>
                                        <li><Link href="#">Humanitarian Community</Link></li>
                                        <li><Link href="#">Absolute Security</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
