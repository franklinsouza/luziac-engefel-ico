import BlogItem from "@/components/elements/BlogItem"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import blogData from "../util/blog.json"
export default function BlogSidebar() {

    return (
        <>
            <Layout headerStyle={6}>
                {/* breadcrumb-area */}
                <section className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <h2 className="title">our blog</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb-area-end */}
                {/* blog-area */}
                <section className="inner-blog-area section-pb-140">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="blog-item-wrap">
                                    <div className="row justify-content-center">
                                        {blogData.map((item, i) => (
                                            <BlogItem item={item} col="col-lg-6 col-md-6" key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <aside className="blog-sidebar">
                                    <div className="blog-widget">
                                        <div className="sidebar-search">
                                            <form action="#">
                                                <input type="text" placeholder="Search your article here..." />
                                                <button type="submit"><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h2 className="bw-title">Categories</h2>
                                        <div className="bw-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="#">Architecture</Link></li>
                                                <li><Link href="#">House</Link></li>
                                                <li><Link href="#">Property</Link></li>
                                                <li><Link href="#">Real Estate</Link></li>
                                                <li><Link href="#">Residence</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h2 className="bw-title">Popular posts</h2>
                                        <div className="post-list-wrap">
                                            <div className="post-item">
                                                <h4 className="title"><Link href="blog-details">7 Home Trends That Will Shape Your House In</Link></h4>
                                                <span>June 9, {new Date().getFullYear()}</span>
                                            </div>
                                            <div className="post-item">
                                                <h4 className="title"><Link href="blog-details">space solutions and small apartment ideas</Link></h4>
                                                <span>August 14, {new Date().getFullYear()}</span>
                                            </div>
                                            <div className="post-item">
                                                <h4 className="title"><Link href="blog-details">Skills That You Can Learn In The Real Estate Market</Link></h4>
                                                <span>june 26, {new Date().getFullYear()}</span>
                                            </div>
                                            <div className="post-item">
                                                <h4 className="title"><Link href="blog-details">Learn The Truth About Real Estate Industry</Link></h4>
                                                <span>January 10, {new Date().getFullYear()}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h2 className="bw-title">Follow Us</h2>
                                        <div className="bw-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                {/* blog-area-end */}


            </Layout>
        </>
    )
}