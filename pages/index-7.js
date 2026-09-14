import Layout from "@/components/layout/Layout"
import Banner6 from "@/components/sections/Banner6"
import Blog from "@/components/sections/Blog"
import Counter from "@/components/sections/Counter"
import Mission from "@/components/sections/Mission"
import Newsletter from "@/components/sections/Newsletter"
import Project3 from "@/components/sections/Project3"
import Services from "@/components/sections/Services"
import Services2 from "@/components/sections/Services2"
import Team from "@/components/sections/Team"
import Testimonial2 from "@/components/sections/Testimonial2"
import Video from "@/components/sections/Video"
export default function Home7() {

    return (
        <>
            <Layout headerStyle={7}>
                <Banner6 />
                <Video />
                <Counter />
                <Mission />
                <Project3 />
                <Testimonial2 />
                <Services2 />
                <div className="section-pt-130"></div>
                <Team />
                <Blog />
                <Newsletter />
            </Layout>
        </>
    )
}