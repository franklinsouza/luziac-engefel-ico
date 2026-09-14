import Layout from "@/components/layout/Layout"
import About from "@/components/sections/About"
import Blog from "@/components/sections/Blog"
import Brand from "@/components/sections/Brand"
import Features from "@/components/sections/Features"
import Newsletter from "@/components/sections/Newsletter"
import Project from "@/components/sections/Project"
import Slider from "@/components/sections/Slider"
import Testimonial from "@/components/sections/Testimonial"
import Video from "@/components/sections/Video"
export default function Home1() {

    return (
        <>
            <Layout headerStyle={1}>
                <Slider />
                <About />
                <Brand />
                <Video />
                <Features />
                <Project />
                <Testimonial />
                <Blog />
                <Newsletter />
            </Layout>
        </>
    )
}