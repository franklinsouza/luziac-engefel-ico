import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Blog2 from "@/components/sections/Blog2"
import Counter from "@/components/sections/Counter"
import Mission from "@/components/sections/Mission"
import Newsletter2 from "@/components/sections/Newsletter2"
import Parallax from "@/components/sections/Parallax"
import Project2 from "@/components/sections/Project2"
import Roadmap from "@/components/sections/Roadmap"
import Vision from "@/components/sections/Vision"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={2}>
                <Banner1 />
                <Counter />
                <Mission />
                <Project2 />
                <Vision />
                <Roadmap />
                <Parallax />
                <Newsletter2 />
                <Blog2 />
            </Layout>
        </>
    )
}