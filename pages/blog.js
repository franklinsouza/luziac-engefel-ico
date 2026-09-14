import BlogItem from "@/components/elements/BlogItem"
import Layout from "@/components/layout/Layout"
import blogData from "../util/blog.json"
import Link from "next/link"
export default function Blog() {

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
                <section className="blog-area-two section-pb-140">
                    <div className="container">
                        <div className="blog-item-wrap">
                            <div className="row justify-content-center">
                                {blogData.map((item, i) => (
                                    <BlogItem item={item} col="col-lg-4 col-md-6" key={i}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* blog-area-end */}


            </Layout>
        </>
    )
}