import Layout from "@/components/layout/Layout"
import About from "@/components/sections/About"
import Banner4 from "@/components/sections/Banner4"
import Blog from "@/components/sections/Blog"
import Blog2 from "@/components/sections/Blog2"
import Brand from "@/components/sections/Brand"
import Newsletter from "@/components/sections/Newsletter"
import Project from "@/components/sections/Project"
import Project2 from "@/components/sections/Project2"
import Project4 from "@/components/sections/Project4"
import Roadmap from "@/components/sections/Roadmap"
import Services from "@/components/sections/Services"
import Team from "@/components/sections/Team"
import Video2 from "@/components/sections/Video2"
export default function Home5() {

    return (
        <>
            <Layout headerStyle={5}>
                <Banner4 />
                <Video2 />
                <About />
                <Brand />
                <div className="section-pb-140"></div>
                <Project4 />
                <Roadmap />
                <Services />
                <Team />
                <Newsletter />
                <Blog2 />
            </Layout>
        </>
    )
}