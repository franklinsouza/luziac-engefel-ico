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
    { src: "/assets/img/plantas/planta-combinada.webp", alt: "Planta combinada das unidades<br /><strong>* A configuração apresentada representa uma possibilidade de junção  de plantas <br />e não necessariamente corresponde ao padrão de todas as unidades.</strong≥" },
    { src: "/assets/img/plantas/planta-2-unidades.webp", alt: "Planta com 2 unidades por andar <br /><strong>* A configuração apresentada representa uma possibilidade de junção  de plantas <br />e não necessariamente corresponde ao padrão de todas as unidades.</strong≥" },
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
                            <p>Plantas inteligentes para diferentes momentos da sua vida.</p>
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
                                                    <span>Imagem meramente ilustrativa</span>
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
                            <span className="plan-rooms">Opção com 2 dormitórios</span>
                            <h3 className="plan-size">39 até 41,32 m² </h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="plans-ornament" aria-hidden="true">
                            <svg width="160" height="16" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="8" x2="65" y2="8" stroke="currentColor" strokeWidth="1" />
                                <rect x="76" y="4" width="8" height="8" transform="rotate(45 80 8)" fill="currentColor" />
                                <line x1="95" y1="8" x2="160" y2="8" stroke="currentColor" strokeWidth="1" />
                            </svg>
                        </div>
                        <p className="plans-note text-center">Escolha a configuração que mais combina com a sua rotina e aproveite cada metro quadrado do seu novo lar.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
