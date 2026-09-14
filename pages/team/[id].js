import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import data from "../../util/team.json"

const BlogDetails = () => {

    let Router = useRouter()

    const [team, setTeam] = useState(null)


    const { id } = Router.query

    useEffect(() => {
        setTeam(data.find((data) => data.id == id))
    }, [id])


    return (
        <>
            <Layout headerStyle={6}>

                {team && (
                    <>

                        <section className="team-details-area">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 col-md-9">
                                        <div className="team-details-thumb">
                                            {/* <img src="/assets/img/team/team_details_img.jpg" alt="" /> */}
                                            <img src={`/assets/img/team/${team.img}`} alt="" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="team-details-content">
                                            <span className="sub-title">{team.desig}</span>
                                            <h2 className="title">{team.title}</h2>
                                            <div className="td-contact">
                                                <ul className="list-wrap">
                                                    <li><Link href="mailto:johanjohnson@mail.com">johanjohnson@mail.com</Link></li>
                                                    <li><Link href="tel:0123456789">+7 875 647 6689</Link></li>
                                                </ul>
                                            </div>
                                            <div className="td-social">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                                            <p>Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the
                                                actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally
                                                encounter consequences</p>
                                            <div className="sine-img mt-40">
                                                <img src="/assets/img/images/sine.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* team-details-area-end */}
                        {/* contact-form-area */}
                        <section className="contact-form-area section-pb-140">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8 col-lg-10">
                                        <div className="section-title text-center mb-55">
                                            <span className="sub-title">leave a message</span>
                                            <h2 className="title">Contact with Johnson</h2>
                                        </div>
                                        <div className="contact-form-wrap">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-grp">
                                                            <input type="text" placeholder="Your name" required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-grp">
                                                            <input type="text" placeholder="Phone number" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-grp">
                                                    <textarea name="message" placeholder="Write message" required="required" defaultValue={""} />
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkbox" />
                                                    <label htmlFor="checkbox">I accept <span>Terms &amp Conditions</span> for processing personal
                                                        data</label>
                                                </div>
                                                <div className="form-submit">
                                                    <input type="submit" defaultValue="submit" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* contact-form-area-end */}
                        {/* team-area */}
                        <section className="team-area section-py-140">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-6 col-lg-7">
                                        <div className="section-title text-center mb-55">
                                            <span className="sub-title">Leadership</span>
                                            <h2 className="title">Meet with our amazing team members</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="team-item">
                                                <div className="team-thumb">
                                                    <Link href="team-details"><img src="/assets/img/team/team_img05.jpg" alt="" /></Link>
                                                </div>
                                                <div className="team-content">
                                                    <h3 className="title"><Link href="team-details">Kim Smith</Link></h3>
                                                    <span>Marketer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="team-item">
                                                <div className="team-thumb">
                                                    <Link href="team-details"><img src="/assets/img/team/team_img06.jpg" alt="" /></Link>
                                                </div>
                                                <div className="team-content">
                                                    <h3 className="title"><Link href="team-details">Courtney Henry</Link></h3>
                                                    <span>Account Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="team-item">
                                                <div className="team-thumb">
                                                    <Link href="team-details"><img src="/assets/img/team/team_img07.jpg" alt="" /></Link>
                                                </div>
                                                <div className="team-content">
                                                    <h3 className="title"><Link href="team-details">Theresa Webb</Link></h3>
                                                    <span>Architect</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="team-item">
                                                <div className="team-thumb">
                                                    <Link href="team-details"><img src="/assets/img/team/team_img08.jpg" alt="" /></Link>
                                                </div>
                                                <div className="team-content">
                                                    <h3 className="title"><Link href="team-details">Belva Boyd</Link></h3>
                                                    <span>Architect</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="view-more-btn text-center mt-30">
                                        <Link href="team" className="btn transparent-btn">
                                            <div className="btn_m">
                                                <div className="btn_c">
                                                    <div className="btn_t1">View all members</div>
                                                    <div className="btn_t2">View all members</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* team-area-end */}

                    </>
                )}
            </Layout>
        </>
    )
}



export default BlogDetails