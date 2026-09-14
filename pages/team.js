import TeamItem from "@/components/elements/TeamItem"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import teamData from "../util/team.json"
export default function Team() {

    return (
        <>
            <Layout headerStyle={6}>

                {/* breadcrumb-area */}
                <section className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <h2 className="title">Our team</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Our team</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb-area-end */}
                {/* team-area */}
                <section className="team-area-two section-pb-115">
                    <div className="container">
                        <div className="team-item-wrap">
                            <div className="row justify-content-center">
                                {teamData.map((item, i) => (
                                    <TeamItem item={item} key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* team-area-end */}
                {/* newsletter-area */}
                <section className="newsletter-area newsletter-area-two section-pb-140">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="newsletter-inner">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-8">
                                            <div className="newsletter-content">
                                                <div className="section-title mb-50">
                                                    <span className="sub-title">Quick Inquiry</span>
                                                    <h2 className="title">If you have any question? we are glad to consult you as soon as possible</h2>
                                                </div>
                                                <form action="#" className="newsletter-form">
                                                    <ul className="list-wrap">
                                                        <li><input type="text" placeholder="Your name" required="required" /></li>
                                                        <li><input type="text" placeholder="Phone number" required="required" /></li>
                                                        <li className="submit-btn"><input type="submit" defaultValue="submit" /></li>
                                                    </ul>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="checkbox" />
                                                        <label htmlFor="checkbox">I accept <span>Terms &amp Conditions</span> for processing personal data</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* newsletter-area-end */}


            </Layout >
        </>
    )
}