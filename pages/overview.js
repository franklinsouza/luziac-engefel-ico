import Layout from "@/components/layout/Layout";
import Parallax from "@/components/sections/Parallax";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
    ssr: false,
});

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: ".h1n",
        prevEl: ".h1p",
    },

    // Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
};

export default function Overview() {
    return (
        <>
            <Layout headerStyle={6}>
                <section className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <h2 className="title">Overview</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link href="/" />
                                                Home
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Overview
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* about-area */}
                <section className="about-area-two">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-img text-center">
                                    <img src="/assets/img/images/about_img.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <div className="section-title mb-40">
                                        <span className="sub-title">Who we are</span>
                                        <h2 className="title">30 years of leadership in real estate sector</h2>
                                    </div>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia non numquam</p>
                                    <Link href="overview" className="btn transparent-btn">
                                        <div className="btn_m">
                                            <div className="btn_c">
                                                <div className="btn_t1">learn more</div>
                                                <div className="btn_t2">learn more</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-area-end */}
                {/* counter-area */}
                <div className="counter-area section-pt-140 section-pb-110">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="counter-item-wrap">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6 col-6">
                                            <div className="counter-item">
                                                <CounterUp count={51} time={1} />
                                                <p>
                                                    Completed <span>projects</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6">
                                            <div className="counter-item">
                                                <CounterUp count={30} time={1} />
                                                <p>
                                                    under <span>construction</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6">
                                            <div className="counter-item">
                                                <CounterUp count={17} time={1} />
                                                <p>
                                                    Projects <span>underway</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6">
                                            <div className="counter-item">
                                                <CounterUp count={45} time={1} />
                                                <p>
                                                    Joint ventures <span>completed</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* counter-area-end */}
                {/* parallax-img-area */}
                <Parallax />
                {/* parallax-img-area-end */}
                {/* roadMap-area */}
                <section className="roadmap-area section-py-140">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="section-title text-center mb-50">
                                    <span className="sub-title">Awards &amp recognition</span>
                                    <h2 className="title">The Merits we have earned</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-12">
                            <div className="roadmap-wrap">
                                <div className="swiper-container roadmap-active">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="roadmap-item">
                                                <h4 className="title">2007</h4>
                                                <div className="roadmap-content">
                                                    <span className="dot" />
                                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                                                    <span>
                                                        ET Now Real Estate Awards <br /> Most Promising Delivery
                                                    </span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-item">
                                                <h4 className="title">2010</h4>
                                                <div className="roadmap-content">
                                                    <span className="dot" />
                                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                                                    <span>
                                                        Design &amp Development Awards <br /> Ideal Project Design
                                                    </span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-item">
                                                <h4 className="title">2011</h4>
                                                <div className="roadmap-content">
                                                    <span className="dot" />
                                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                                                    <span>
                                                        National Real Estate Awards <br /> Best Luxury Company
                                                    </span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-item">
                                                <h4 className="title">2014</h4>
                                                <div className="roadmap-content">
                                                    <span className="dot" />
                                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                                                    <span>
                                                        Golden Globe Tiger Awards <br /> Property of the Year
                                                    </span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-item">
                                                <h4 className="title">2019</h4>
                                                <div className="roadmap-content">
                                                    <span className="dot" />
                                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                                                    <span>
                                                        BAM Awards Real Best <br />
                                                        Creative builder
                                                    </span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-item">
                                                <h4 className="title">2026</h4>
                                                <div className="roadmap-content">
                                                    <span className="dot" />
                                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                                                    <span>
                                                        Design &amp Development Awards <br /> Ideal Project Design
                                                    </span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* roadMap-area-end */}
                {/* team-area */}
                <section className="team-area-two">
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
                                            <Link href="team-details">
                                                <img src="/assets/img/team/team_img01.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title">
                                                <Link href="team-details">Johan Johnson</Link>
                                            </h3>
                                            <span>Architect</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Link href="team-details">
                                                <img src="/assets/img/team/team_img02.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title">
                                                <Link href="team-details">Jacob Jones</Link>
                                            </h3>
                                            <span>Founder</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Link href="team-details">
                                                <img src="/assets/img/team/team_img03.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title">
                                                <Link href="team-details">Eleanor Pena</Link>
                                            </h3>
                                            <span>Head of Design</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Link href="team-details">
                                                <img src="/assets/img/team/team_img04.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title">
                                                <Link href="team-details">Bessie Cooper</Link>
                                            </h3>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Link href="team-details">
                                                <img src="/assets/img/team/team_img05.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title">
                                                <Link href="team-details">Kim Smith</Link>
                                            </h3>
                                            <span>Marketer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Link href="team-details">
                                                <img src="/assets/img/team/team_img06.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title">
                                                <Link href="team-details">Courtney Henry</Link>
                                            </h3>
                                            <span>Account Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Link href="team-details">
                                                <img src="/assets/img/team/team_img07.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title">
                                                <Link href="team-details">Theresa Webb</Link>
                                            </h3>
                                            <span>Architect</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Link href="team-details">
                                                <img src="/assets/img/team/team_img08.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title">
                                                <Link href="team-details">Belva Boyd</Link>
                                            </h3>
                                            <span>Architect</span>
                                        </div>
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
                </section>
                {/* team-area-end */}
                {/* newsletter-area */}
                <section className="newsletter-area newsletter-area-two section-py-140">
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
                                                        <li>
                                                            <input type="text" placeholder="Your name" required="required" />
                                                        </li>
                                                        <li>
                                                            <input type="text" placeholder="Phone number" required="required" />
                                                        </li>
                                                        <li className="submit-btn">
                                                            <input type="submit" defaultValue="submit" />
                                                        </li>
                                                    </ul>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="checkbox" />
                                                        <label htmlFor="checkbox">
                                                            I accept <span>Terms &amp Conditions</span> for processing personal data
                                                        </label>
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
            </Layout>
        </>
    );
}
