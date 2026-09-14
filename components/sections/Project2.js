import Link from "next/link"

export default function Project2() {
    return (
        <>
            <section className="project-area project-style-two section-py-140">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center mb-55">
                                <span className="sub-title">Featured projects</span>
                                <h2 className="title">Discover our Underconstrution and comple projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
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
                        <div className="col-lg-4 col-md-6">
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
                        <div className="col-lg-4 col-md-6">
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
                        <div className="col-lg-4 col-md-6">
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
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item">
                                <div className="project-thumb">
                                    <Link href="/project/1"><img src="assets/img/project/h2_project_img05.jpg" alt="" /></Link>
                                </div>
                                <div className="project-content">
                                    <h2 className="title"><Link href="/project/1">Brunswick West Wing</Link></h2>
                                    <span>South Gate, CA</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item">
                                <div className="project-thumb">
                                    <Link href="/project/1"><img src="assets/img/project/h2_project_img06.jpg" alt="" /></Link>
                                </div>
                                <div className="project-content">
                                    <h2 className="title"><Link href="/project/1">Andorra Shopping Center</Link></h2>
                                    <span>Rockville, MD</span>
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
            </section>

        </>
    )
}
