import Layout from "@/components/layout/Layout"
import Sidebar from "@/components/layout/Sidebar"
import Banner3 from "@/components/sections/Banner3"
import Blog from "@/components/sections/Blog"
import Blog2 from "@/components/sections/Blog2"
import Blog3 from "@/components/sections/Blog3"
import Features from "@/components/sections/Features"
import Mission from "@/components/sections/Mission"
import Newsletter from "@/components/sections/Newsletter"
import Project from "@/components/sections/Project"
import Testimonial from "@/components/sections/Testimonial"
import Video from "@/components/sections/Video"
import Vision from "@/components/sections/Vision"
export default function Home4() {

    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Layout headerStyle={4}>
                    <Banner3 />
                    <div className="section-pt-140" />
                    <Mission />
                    <Vision />
                    <Project />
                    <Features />
                    <Video />
                    <Testimonial />
                    <Blog3 />
                    <Newsletter />
                </Layout>
            </div>
        </>
    )
}