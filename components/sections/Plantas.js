import { BedIcon } from "@phosphor-icons/react/dist/csr/Bed"
import { CaretLeft } from "@phosphor-icons/react/dist/csr/CaretLeft"
import { CaretRight } from "@phosphor-icons/react/dist/csr/CaretRight"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const plantasImages = [
    { src: "/assets/img/plantas/planta-1-dorm.webp", alt: "Planta do apartamento de 1 dormitório" },
    { src: "/assets/img/plantas/planta-2-dorms.webp", alt: "Planta do apartamento de 2 dormitórios" },
    { src: "/assets/img/plantas/planta-1-2-dorms.webp", alt: "Planta combinada dos apartamentos de 1 e 2 dormitórios" },
    { src: "/assets/img/plantas/planta-baixa-1-2-dorms.webp", alt: "Planta baixa dos apartamentos de 1 e 2 dormitórios" },
    { src: "/assets/img/plantas/planta-baixa-2-dorms.webp", alt: "Planta baixa do apartamento de 2 dormitórios" },
    { src: "/assets/img/plantas/planta-combinada.webp", alt: "Planta combinada das unidades" },
    { src: "/assets/img/plantas/planta-2-unidades.webp", alt: "Planta com 2 unidades por andar" },
]

const plantasSwiperOptions = {
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
        nextEl: '.plantas-gallery-next',
        prevEl: '.plantas-gallery-prev',
    },
    pagination: {
        el: '.plantas-gallery-pagination',
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

export default function Plantas() {
    return (
        <section id="plantas" className="plans-area section-pt-135 section-pb-140">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9">
                        <div className="section-title text-center mb-35">
                            <span className="sub-title">Unidades</span>
                            <h2 className="title">Plantas disponíveis</h2>
                            <p className="plans-note text-center">Unidades com ou sem vaga de garagem, com ambientes planejados para aproveitar melhor cada espaço.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="plantas-gallery-wrap">
                            <div className="plantas-gallery-inner">
                                <Swiper {...plantasSwiperOptions} className="plantas-gallery">
                                    {plantasImages.map((image) => (
                                        <SwiperSlide className="gallery-item" key={image.src}>
                                            <a href={image.src} data-fancybox="gallery-plantas" data-caption={image.alt}>
                                                <img src={image.src} alt={image.alt} />
                                            </a>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="plantas-gallery-prev swiper-button-prev"><CaretLeft size={20} weight="light" /></div>
                                <div className="plantas-gallery-next swiper-button-next"><CaretRight size={20} weight="light" /></div>
                            </div>
                            <div className="plantas-gallery-pagination swiper-pagination" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center plantas-cards-row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="plan-card text-center">
                            <div className="feature-icon">
                                <BedIcon size={40} weight="light" />
                            </div>
                            <span className="plan-rooms">1 dormitório</span>
                            <h3 className="plan-size">39,27 m²</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="plan-card text-center">
                            <div className="feature-icon">
                                <BedIcon size={40} weight="light" />
                            </div>
                            <span className="plan-rooms">2 dormitórios</span>
                            <h3 className="plan-size">41,32 m²</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
