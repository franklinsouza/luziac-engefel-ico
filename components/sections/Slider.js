import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Slider() {
    return (
        <>
            <section className="slider-area">
                <Swiper {...swiperOptions} className="slider-active">
                    <SwiperSlide className="single-slider slider-bg" style={{ backgroundImage: `url("/assets/img/banner/banner_img01.jpg")` }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="banner-content text-center">
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".2s">New future</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Dictum varius duis at consectetur lorem donec massa sapien faucibus. Tincidunt arcu non sodales neque sodales ut etiam sit amet</p>
                                        <Link href="overview" className="btn" data-animation="fadeInUp" data-delay=".6s">
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
                    </SwiperSlide>
                    <SwiperSlide className="single-slider slider-bg" style={{ backgroundImage: `url("assets/img/banner/banner_right_img02.jpg")` }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="banner-content text-center">
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".2s">Ready Home</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Dictum varius duis at consectetur lorem donec massa sapien faucibus. Tincidunt arcu non sodales neque sodales ut etiam sit amet</p>
                                        <Link href="overview" className="btn" data-animation="fadeInUp" data-delay=".6s">
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
                    </SwiperSlide>
                </Swiper>
            </section>

            <div className="banner-scroll-down">
                <Link href="#about" className="section-link">
                    <span />
                    <span />
                    <span />
                </Link>
            </div>

        </>
    )
}
