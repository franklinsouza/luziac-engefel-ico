import Layout from "@/components/layout/Layout"
import Banner2 from "@/components/sections/Banner2"
import Blog from "@/components/sections/Blog"
import Newsletter from "@/components/sections/Newsletter"
import Parallax from "@/components/sections/Parallax"
import Project3 from "@/components/sections/Project3"
import Services from "@/components/sections/Services"
import Services2 from "@/components/sections/Services2"
import Team from "@/components/sections/Team"
import Testimonial from "@/components/sections/Testimonial"
export default function Home3() {

    return (
        <>
            <Layout headerStyle={3}>
                <Banner2 />
                <Parallax />
                <Services />
                <Project3 />
                <Team />
                <Services2 />
                <Testimonial />
                <Blog />
                <Newsletter />
            </Layout>
        </>
    )
}