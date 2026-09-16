import { ConfettiIcon } from "@phosphor-icons/react/dist/csr/Confetti"
import { FireIcon } from "@phosphor-icons/react/dist/csr/Fire"
import { WavesIcon } from "@phosphor-icons/react/dist/csr/Waves"
import { CaretLeft } from "@phosphor-icons/react/dist/csr/CaretLeft"
import { CaretRight } from "@phosphor-icons/react/dist/csr/CaretRight"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const diferenciaisImages = [
    { src: "/assets/img/empreendimento/empreendimento-2.webp", alt: "Piscina no terraço do Edifício Icó Real Parque" },
    { src: "/assets/img/empreendimento/empreendimento-8.webp", alt: "Área de lazer no terraço do Edifício Icó Real Parque" },
    { src: "/assets/img/empreendimento/empreendimento-14.webp", alt: "Lazer e área comum do Edifício Icó Real Parque" },
]

const diferenciaisSwiperOptions = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 24,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    roundLengths: true,
    navigation: {
        nextEl: '.diferenciais-gallery-next',
        prevEl: '.diferenciais-gallery-prev',
    },
    pagination: {
        el: '.diferenciais-gallery-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
}

export default function Diferenciais() {
    return (
        <section id="diferenciais" className="about-area section-pt-135 section-pb-140">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-title text-center mb-35">
                            <span className="sub-title">Diferenciais</span>
                            <h2 className="title">Área de lazer completa no terraço</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="diferenciais-gallery-wrap">
                            <div className="diferenciais-gallery-inner">
                                <Swiper {...diferenciaisSwiperOptions} className="diferenciais-gallery">
                                    {diferenciaisImages.map((image) => (
                                        <SwiperSlide className="gallery-item" key={image.src}>
                                            <a href={image.src} data-fancybox="gallery-diferenciais" data-caption={image.alt}>
                                                <img src={image.src} alt={image.alt} />
                                            </a>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="diferenciais-gallery-prev swiper-button-prev"><CaretLeft size={20} weight="light" /></div>
                                <div className="diferenciais-gallery-next swiper-button-next"><CaretRight size={20} weight="light" /></div>
                            </div>
                            <div className="diferenciais-gallery-pagination swiper-pagination" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center diferenciais-cards-row">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="features-item">
                            <div className="feature-icon">
                                <WavesIcon size={44} weight="light" />
                            </div>
                            <div className="feature-content">
                                <h2 className="title">Piscina</h2>
                                <p>Momentos de lazer e relaxamento com vista para o terraço.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="features-item">
                            <div className="feature-icon">
                                <FireIcon size={44} weight="light" />
                            </div>
                            <div className="feature-content">
                                <h2 className="title">Churrasqueira</h2>
                                <p>Espaço ideal para reunir família e amigos nos finais de semana.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="features-item">
                            <div className="feature-icon">
                                <ConfettiIcon size={44} weight="light" />
                            </div>
                            <div className="feature-content">
                                <h2 className="title">Salão de festas</h2>
                                <p>Ambiente completo para comemorar as datas especiais em casa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
