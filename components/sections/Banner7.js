
import { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

export default function Banner7() {
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const slider1Ref = useRef(null)
    const slider2Ref = useRef(null)

    useEffect(() => {
        setNav1(slider1Ref.current)
        setNav2(slider2Ref.current)
    }, [])
    return (
        <>
            <section className="banner-area-eight">
                <div className="container custom-container-three">
                    <div className="row">
                        <div className="col-lg-6">
                            <Slider asNavFor={nav2} ref={slider1Ref} className="bannerContent-active">
                                <div className="banner-content">
                                    <span className="sub-title" data-animation-in="fadeInDown" data-delay-in=".2" data-duration-in=".6">Bala Cynwyd, PA</span>
                                    <h2 className="title" data-animation-in="fadeInDown" data-delay-in=".2" data-duration-in=".6">Bala Cynwyd Shopping Center</h2>
                                    <p data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui</p>
                                    <ul className="list-wrap" data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                        <li>
                                            <div className="icon"><i className="flaticon-018-rescale" /></div>
                                            <div className="content">
                                                <p>Property size <br />174,000 sqft</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-009-crane-truck" /></div>
                                            <div className="content">
                                                <p>Status <br /> Completed</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-008-money-bag" /></div>
                                            <div className="content">
                                                <p>Price Range <br />$10K - $50K</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-017-apartment" /></div>
                                            <div className="content">
                                                <p>Type <br /> Community</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="project-details" className="btn" data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                        <div className="btn_m">
                                            <div className="btn_c">
                                                <div className="btn_t1">View details</div>
                                                <div className="btn_t2">View details</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="banner-content">
                                    <span className="sub-title" data-animation-in="fadeInDown" data-delay-in=".2" data-duration-in=".6">Bala Cynwyd, PA</span>
                                    <h2 className="title" data-animation-in="fadeInDown" data-delay-in=".2" data-duration-in=".6">Yako Nimand Shopping Center</h2>
                                    <p data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui</p>
                                    <ul className="list-wrap" data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                        <li>
                                            <div className="icon"><i className="flaticon-018-rescale" /></div>
                                            <div className="content">
                                                <p>Property size <br />174,000 sqft</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-009-crane-truck" /></div>
                                            <div className="content">
                                                <p>Status <br /> Completed</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-008-money-bag" /></div>
                                            <div className="content">
                                                <p>Price Range <br />$10K - $50K</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-017-apartment" /></div>
                                            <div className="content">
                                                <p>Type <br /> Community</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="project-details" className="btn" data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                        <div className="btn_m">
                                            <div className="btn_c">
                                                <div className="btn_t1">View details</div>
                                                <div className="btn_t2">View details</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="banner-content">
                                    <span className="sub-title" data-animation-in="fadeInDown" data-delay-in=".2" data-duration-in=".6">Helna Nnwyd, PA</span>
                                    <h2 className="title" data-animation-in="fadeInDown" data-delay-in=".2" data-duration-in=".6">Helna Dimand Super Complex</h2>
                                    <p data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui</p>
                                    <ul className="list-wrap" data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                        <li>
                                            <div className="icon"><i className="flaticon-018-rescale" /></div>
                                            <div className="content">
                                                <p>Property size <br />174,000 sqft</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-009-crane-truck" /></div>
                                            <div className="content">
                                                <p>Status <br /> Completed</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-008-money-bag" /></div>
                                            <div className="content">
                                                <p>Price Range <br />$10K - $50K</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-017-apartment" /></div>
                                            <div className="content">
                                                <p>Type <br /> Community</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="project-details" className="btn" data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                        <div className="btn_m">
                                            <div className="btn_c">
                                                <div className="btn_t1">View details</div>
                                                <div className="btn_t2">View details</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="banner-content">
                                    <span className="sub-title" data-animation-in="fadeInDown" data-delay-in=".2" data-duration-in=".6">Helna Nnwyd, PA</span>
                                    <h2 className="title" data-animation-in="fadeInDown" data-delay-in=".2" data-duration-in=".6">Helna Dimand Super Complex</h2>
                                    <p data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui</p>
                                    <ul className="list-wrap" data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                        <li>
                                            <div className="icon"><i className="flaticon-018-rescale" /></div>
                                            <div className="content">
                                                <p>Property size <br />174,000 sqft</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-009-crane-truck" /></div>
                                            <div className="content">
                                                <p>Status <br /> Completed</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-008-money-bag" /></div>
                                            <div className="content">
                                                <p>Price Range <br />$10K - $50K</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="flaticon-017-apartment" /></div>
                                            <div className="content">
                                                <p>Type <br /> Community</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="project-details" className="btn" data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                        <div className="btn_m">
                                            <div className="btn_c">
                                                <div className="btn_t1">View details</div>
                                                <div className="btn_t2">View details</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Slider>
                        </div>
                        <div className="col-lg-6 custom-col">
                            <Slider
                                asNavFor={nav1}
                                ref={slider2Ref}
                                slidesToShow={1}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                className="bannerNav-active">
                                <div className="item">
                                    <div className="banner-img-item">
                                        <img src="/assets/img/banner/h8_banner_img01.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="banner-img-item">
                                        <img src="/assets/img/banner/h8_banner_img02.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="banner-img-item">
                                        <img src="/assets/img/banner/h8_banner_img03.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="banner-img-item">
                                        <img src="/assets/img/banner/h8_banner_img04.jpg" alt="" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
