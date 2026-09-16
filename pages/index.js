import Layout from "@/components/layout/Layout"
import SEO from "@/components/layout/SEO"
import Apresentacao from "@/components/sections/Apresentacao"
import Condicoes from "@/components/sections/Condicoes"
import Diferenciais from "@/components/sections/Diferenciais"
import Hero from "@/components/sections/Hero"
import HeroDestaques from "@/components/sections/HeroDestaques"
import Interesse from "@/components/sections/Interesse"
import Localizacao from "@/components/sections/Localizacao"
import Plantas from "@/components/sections/Plantas"
export default function Home1() {

    return (
        <>
            <Layout headerStyle={3} headTitle="Edifício ICÓ Real Parque – Apartamentos na Zona Sul de SP">
                <SEO />
                <Hero />
                <HeroDestaques />
                <Apresentacao />
                <Plantas />
                <Diferenciais />
                <Condicoes />
                <Localizacao />
                <Interesse />
            </Layout>
        </>
    )
}
