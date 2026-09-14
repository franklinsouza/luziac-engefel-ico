import Link from "next/link"

export default function Project4() {
    return (
        <>
            <section className="project-area project-style-four section-pt-140 project-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-title">
                                <span className="sub-title">Featured projects</span>
                                <h2 className="title">Discover our latest projects</h2>
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
                        <div className="col-lg-8">
                            <div className="project-item-wrap">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/project/1"><img src="assets/img/project/h2_project_img01.jpg" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h2 className="title"><Link href="/project/1">New Central Garden</Link></h2>
                                                <span>Baltimore, MD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/project/1"><img src="assets/img/project/h2_project_img02.jpg" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h2 className="title"><Link href="/project/1">City Shopping Complex</Link></h2>
                                                <span>Charlottesville, VA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/project/1"><img src="assets/img/project/h2_project_img03.jpg" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h2 className="title"><Link href="/project/1">Modern Residential Park</Link></h2>
                                                <span>New York, NY</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/project/1"><img src="assets/img/project/h2_project_img04.jpg" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h2 className="title"><Link href="/project/1">Paragon Hotel Concept</Link></h2>
                                                <span>New Orleans, LA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
