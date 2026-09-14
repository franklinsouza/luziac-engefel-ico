import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import data from "../../util/blog.json"

const BlogDetails = () => {

    let Router = useRouter()

    const [blogPost, setBlogPost] = useState(null)


    const { id } = Router.query

    useEffect(() => {
        setBlogPost(data.find((data) => data.id == id))
    }, [id])


    return (
        <>
            <Layout headerStyle={6}>

                {blogPost && (
                    <>

                        <section className="blog-details-area">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="blog-details-wrap">
                                            <div className="blog-item blog-item-two">
                                                <div className="blog-content blog-details-content">
                                                    <h2 className="title">{blogPost.title}</h2>
                                                    <div className="blog-meta">
                                                        <ul className="list-wrap">
                                                            <li>{blogPost.date}</li>
                                                            <li><Link href="blog">Nicole Willis</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-thumb">
                                                    <img src={`/assets/img/blog/${blogPost.img}`} alt="" />
                                                </div>
                                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
                                                <p>Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                                                <blockquote>
                                                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                                </blockquote>
                                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum</p>
                                                <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain</p>
                                                <div className="blog-details-social">
                                                    <ul className="list-wrap">
                                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="avatar-post">
                                            <div className="post-avatar-img">
                                                <img src="/assets/img/blog/post-avatar-img.png" alt="" />
                                            </div>
                                            <div className="post-avatar-content">
                                                <p>Eam soluta dicunt cu. Est ad oporteat appellantur, per dicta pertinax cu. Iusto quando conceptam vim ad, an sed
                                                    explicari appellantur. Accumsan pericula usu an, in pri dolorum denique. Cu movet debitis cum</p>
                                                <span>Nicole Willis <br /> Writer</span>
                                            </div>
                                        </div>
                                        <div className="blog-next-prev">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="post prev">
                                                        <h2 className="title"><Link href="blog-details">7 Home Trends That Will Shape Your House In</Link></h2>
                                                        <Link href="#">Prev post</Link>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="post next">
                                                        <h2 className="title"><Link href="blog-details">Skills That You Can Learn In The Real Estate Market</Link></h2>
                                                        <Link href="#">Next post</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-post-comment">
                                            <div className="comment-wrap">
                                                <div className="comment-wrap-title mb-40">
                                                    <h2 className="title">Comments</h2>
                                                </div>
                                                <div className="latest-comments">
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <div className="comments-box">
                                                                <div className="comments-avatar">
                                                                    <img src="/assets/img/blog/comment_img01.png" alt="" />
                                                                </div>
                                                                <div className="comment-text">
                                                                    <div className="avatar-name">
                                                                        <span>April 7, {new Date().getFullYear()}</span>
                                                                        <h4 className="name">Bree Patterson</h4>
                                                                    </div>
                                                                    <p>Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sollicitudin, lorem auci elit consequat ipsutissem niuis</p>
                                                                    <Link href="#" className="comment-reply"><i className="fas fa-reply" />Reply</Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="comments-box">
                                                                <div className="comments-avatar">
                                                                    <img src="/assets/img/blog/comment_img02.png" alt="" />
                                                                </div>
                                                                <div className="comment-text">
                                                                    <div className="avatar-name">
                                                                        <span>March 13, {new Date().getFullYear()}</span>
                                                                        <h4 className="name">Darrell Berges</h4>
                                                                    </div>
                                                                    <p>Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sollicitudin, lorem auci elit consequat ipsutissem niuis</p>
                                                                    <Link href="#" className="comment-reply"><i className="fas fa-reply" />Reply</Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="comment-respond">
                                                <div className="comment-reply-title mb-40">
                                                    <h2 className="title">Leave a Reply</h2>
                                                </div>
                                                <form action="#" className="comment-form">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="comment-field">
                                                                <input type="text" placeholder="Your name" required="required" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="comment-field">
                                                                <input type="email" placeholder="Email address" required="required" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="comment-field">
                                                                <input type="text" placeholder="Website link" required="required" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-field">
                                                        <textarea name="comment" placeholder="Write your comment..." required="required" defaultValue={""} />
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="checkbox" />
                                                        <label htmlFor="checkbox">Save my name, email, and website in this browser for the next time I comment</label>
                                                    </div>
                                                    <div className="submit-btn">
                                                        <input type="submit" defaultValue="Post comment" className="btn" />
                                                    </div>
                                                </form>
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
                                                        <h4 className="title"><Link href="blog-details">Skills That You Can Learn In The Real Estate
                                                            Market</Link></h4>
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
                        {/* blog-details-area-end */}
                        {/* blog-area */}
                        <section className="blog-area-two blog-pb-80">
                            <div className="container">
                                <div className="blog-item-wrap">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="blog-item">
                                                <div className="blog-thumb">
                                                    <Link href="blog-details"><img src="/assets/img/blog/blog_img07.jpg" alt="" /></Link>
                                                </div>
                                                <div className="blog-content">
                                                    <h2 className="title"><Link href="blog-details">Skills That You Can Learn In The Real Estate Market </Link></h2>
                                                    <div className="blog-meta">
                                                        <ul className="list-wrap">
                                                            <li>june 26, {new Date().getFullYear()}</li>
                                                            <li><Link href="blog">Nicole Willis</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="blog-item">
                                                <div className="blog-thumb">
                                                    <Link href="blog-details"><img src="/assets/img/blog/blog_img08.jpg" alt="" /></Link>
                                                </div>
                                                <div className="blog-content">
                                                    <h2 className="title"><Link href="blog-details">7 Home Trends That Will Shape Your House In</Link></h2>
                                                    <div className="blog-meta">
                                                        <ul className="list-wrap">
                                                            <li>June 9, {new Date().getFullYear()}</li>
                                                            <li><Link href="blog">Nicole Willis</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="blog-item">
                                                <div className="blog-thumb">
                                                    <Link href="blog-details"><img src="/assets/img/blog/blog_img09.jpg" alt="" /></Link>
                                                </div>
                                                <div className="blog-content">
                                                    <h2 className="title"><Link href="blog-details">Advertising Relationships Vs Business Decisions</Link></h2>
                                                    <div className="blog-meta">
                                                        <ul className="list-wrap">
                                                            <li>March 15, {new Date().getFullYear()}</li>
                                                            <li><Link href="blog">Nicole Willis</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* blog-area-end */}
                    </>
                )}
            </Layout>
        </>
    )
}

export default BlogDetails