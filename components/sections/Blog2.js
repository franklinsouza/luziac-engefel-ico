import Link from "next/link";

export default function Blog2() {
    return (
        <>
            <section className="blog-area-two section-py-140">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title">From our blog</span>
                                <h2 className="title">
                                    Latest news &amp <br /> events
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="blog-item-wrap">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <Link href="/blog/1">
                                            <img src="assets/img/blog/blog_img01.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        <h2 className="title">
                                            <Link href="/blog/1">Apartments designed by the leading interior experts</Link>
                                        </h2>
                                        <div className="blog-meta">
                                            <ul className="list-wrap">
                                                <li>May 19, 2026</li>
                                                <li>
                                                    <Link href="blog">Nicole Willis</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <Link href="/blog/1">
                                            <img src="assets/img/blog/blog_img02.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        <h2 className="title">
                                            <Link href="/blog/1">Learn The Truth About Real Estate Industry</Link>
                                        </h2>
                                        <div className="blog-meta">
                                            <ul className="list-wrap">
                                                <li>January 10, 2026</li>
                                                <li>
                                                    <Link href="blog">Nicole Willis</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <Link href="/blog/1">
                                            <img src="assets/img/blog/blog_img03.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        <h2 className="title">
                                            <Link href="/blog/1">Nature inspired design in the heart of a metropolis</Link>
                                        </h2>
                                        <div className="blog-meta">
                                            <ul className="list-wrap">
                                                <li>January 30, 2026</li>
                                                <li>
                                                    <Link href="blog">Nicole Willis</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view-all-btn text-center">
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
            </section>
        </>
    );
}
