import Link from "next/link"

export default function Blog() {
    return (
        <>
            <section className="blog-area section-pt-140 blog-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-title mb-50">
                                <span className="sub-title">From our blog</span>
                                <h2 className="title">Latest news &amp events</h2>
                                <Link href="blog" className="btn transparent-btn">
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
                            <div className="blog-item-wrap">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="blog-item">
                                            <div className="blog-thumb">
                                                <Link href="blog-details"><img src="/assets/img/blog/blog_img01.jpg" alt="" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <h2 className="title"><Link href="blog-details">Apartments designed by the leading interior experts</Link></h2>
                                                <div className="blog-meta">
                                                    <ul className="list-wrap">
                                                        <li>May 19, {new Date().getFullYear()}</li>
                                                        <li><Link href="blog">Nicole Willis</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="blog-item">
                                            <div className="blog-thumb">
                                                <Link href="blog-details"><img src="/assets/img/blog/blog_img02.jpg" alt="" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <h2 className="title"><Link href="blog-details">Learn The Truth About Real Estate Industry</Link></h2>
                                                <div className="blog-meta">
                                                    <ul className="list-wrap">
                                                        <li>January 10, {new Date().getFullYear()}</li>
                                                        <li><Link href="blog">Nicole Willis</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="blog-item">
                                            <div className="blog-thumb">
                                                <Link href="blog-details"><img src="/assets/img/blog/blog_img03.jpg" alt="" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <h2 className="title"><Link href="blog-details">Nature inspired design in the heart of a metropolis</Link></h2>
                                                <div className="blog-meta">
                                                    <ul className="list-wrap">
                                                        <li>January 30, {new Date().getFullYear()}</li>
                                                        <li><Link href="blog">Nicole Willis</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="blog-item">
                                            <div className="blog-thumb">
                                                <Link href="blog-details"><img src="/assets/img/blog/blog_img04.jpg" alt="" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <h2 className="title"><Link href="blog-details">Architecture is not based on concrete and steel</Link></h2>
                                                <div className="blog-meta">
                                                    <ul className="list-wrap">
                                                        <li>November 29, {new Date().getFullYear()}</li>
                                                        <li><Link href="blog">Nicole Willis</Link></li>
                                                    </ul>
                                                </div>
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
