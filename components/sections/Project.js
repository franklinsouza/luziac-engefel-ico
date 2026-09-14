import Link from "next/link"

export default function Project() {
    return (
        <>
            <section className="project-area section-py-140">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title">Featured projects</span>
                                <h2 className="title">Discover our Underconstrution and comple projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="project-item-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="project-item">
                                    <div className="project-thumb">
                                        <Link href="project-details"><img src="/assets/img/project/project_img01.jpg" alt="" /></Link>
                                    </div>
                                    <div className="project-content">
                                        <h3 className="title"><Link href="project-details">New Central Garden</Link></h3>
                                        <span>Baltimore, MD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="project-item">
                                    <div className="project-thumb">
                                        <Link href="project-details"><img src="/assets/img/project/project_img02.jpg" alt="" /></Link>
                                    </div>
                                    <div className="project-content">
                                        <h3 className="title"><Link href="project-details">City Shopping Complex</Link></h3>
                                        <span>Charlottesville, VA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="project-item">
                                    <div className="project-thumb">
                                        <Link href="project-details"><img src="/assets/img/project/project_img03.jpg" alt="" /></Link>
                                    </div>
                                    <div className="project-content">
                                        <h3 className="title"><Link href="project-details">Modern Residential Park</Link></h3>
                                        <span>New York, NY</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="project-item">
                                    <div className="project-thumb">
                                        <Link href="project-details"><img src="/assets/img/project/project_img04.jpg" alt="" /></Link>
                                    </div>
                                    <div className="project-content">
                                        <h3 className="title"><Link href="project-details">Paragon Hotel Concept</Link></h3>
                                        <span>New Orleans, LA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view-all-btn text-center">
                            <Link href="project" className="btn transparent-btn">
                                <div className="btn_m">
                                    <div className="btn_c">
                                        <div className="btn_t1">Explore all</div>
                                        <div className="btn_t2">Explore all</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
