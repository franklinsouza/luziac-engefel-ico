import Link from "next/link"

export default function Services() {
    return (
        <>
            <section className="services-area section-pt-140 section-pb-100">
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
                                    <p>Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia</p>
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
                                    <p>Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia</p>
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
                                    <p>Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia</p>
                                    <Link href="#" className="text-btn">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
