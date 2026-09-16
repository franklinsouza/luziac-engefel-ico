import { BuildingsIcon } from "@phosphor-icons/react/dist/csr/Buildings"
import { PuzzlePieceIcon } from "@phosphor-icons/react/dist/csr/PuzzlePiece"
import { SealPercentIcon } from "@phosphor-icons/react/dist/csr/SealPercent"
import { CaretLeft } from "@phosphor-icons/react/dist/csr/CaretLeft"
import { CaretRight } from "@phosphor-icons/react/dist/csr/CaretRight"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const galleryImages = [
    { src: "/assets/img/empreendimento/empreendimento-4.webp", alt: "Fachada do Edifício Icó Real Parque" },
    { src: "/assets/img/empreendimento/empreendimento-5.webp", alt: "Fachada do Edifício Icó Real Parque, vista lateral" },
    { src: "/assets/img/empreendimento/empreendimento-6.webp", alt: "Detalhe das varandas do Edifício Icó Real Parque" },
    { src: "/assets/img/empreendimento/empreendimento-7.webp", alt: "Elevação da fachada do Edifício Icó Real Parque" },
    { src: "/assets/img/empreendimento/empreendimento-1.webp", alt: "Entrada do Edifício Icó Real Parque, período noturno" },
    { src: "/assets/img/empreendimento/empreendimento-3.webp", alt: "Entrada do Edifício Icó Real Parque" },
    { src: "/assets/img/empreendimento/empreendimento-9.webp", alt: "Dormitório decorado" },
    { src: "/assets/img/empreendimento/empreendimento-10.webp", alt: "Sala de estar e jantar decorada" },
    { src: "/assets/img/empreendimento/empreendimento-11.webp", alt: "Sala integrada com cozinha decorada" },
    { src: "/assets/img/empreendimento/empreendimento-12.webp", alt: "Lavanderia e cozinha decoradas" },
    { src: "/assets/img/empreendimento/empreendimento-13.webp", alt: "Cozinha decorada" },
]

const swiperOptions = {
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
        nextEl: '.apresentacao-gallery-next',
        prevEl: '.apresentacao-gallery-prev',
    },
    pagination: {
        el: '.apresentacao-gallery-pagination',
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

export default function Apresentacao() {
    return (
        <section id="about" className="about-area section-pt-135 section-pb-140">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="section-title text-center mb-35">
                            <span className="sub-title">O Empreendimento</span>
                            <h2 className="title">O Edifício Icó Real Parque é ideal para quem busca conforto, praticidade e mobilidade</h2>
                        </div>
                    </div>
                </div>
                                <div className="row">
                    <div className="col-lg-12">
                        <div className="apresentacao-gallery-wrap">
                            <div className="apresentacao-gallery-inner">
                                <Swiper {...swiperOptions} className="apresentacao-gallery">
                                    {galleryImages.map((image) => (
                                        <SwiperSlide className="gallery-item" key={image.src}>
                                            <a href={image.src} data-fancybox="gallery-empreendimento" data-caption={image.alt}>
                                                <img src={image.src} alt={image.alt} />
                                            </a>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="apresentacao-gallery-prev swiper-button-prev"><CaretLeft size={20} weight="light" /></div>
                                <div className="apresentacao-gallery-next swiper-button-next"><CaretRight size={20} weight="light" /></div>
                            </div>
                            <div className="apresentacao-gallery-pagination swiper-pagination" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center apresentacao-icons-row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="features-item">
                            <div className="feature-icon">
                                <BuildingsIcon size={44} weight="light" />
                            </div>
                            <div className="feature-content">
                                <h2 className="title">Torre única</h2>
                                <p>Mais privacidade e exclusividade, sem a movimentação de grandes condomínios.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="features-item">
                            <div className="feature-icon">
                                <PuzzlePieceIcon size={44} weight="light" />
                            </div>
                            <div className="feature-content">
                                <h2 className="title">Plantas inteligentes</h2>
                                <p>Ambientes bem distribuídos que aproveitam cada metro quadrado do apartamento.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="features-item">
                            <div className="feature-icon">
                                <SealPercentIcon size={44} weight="light" />
                            </div>
                            <div className="feature-content">
                                <h2 className="title">Excelente custo-benefício</h2>
                                <p>Condições facilitadas para você sair do aluguel e conquistar seu imóvel.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
