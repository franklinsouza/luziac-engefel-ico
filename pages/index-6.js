import Layout from "@/components/layout/Layout"
import Banner5 from "@/components/sections/Banner5"
import Blog3 from "@/components/sections/Blog3"
import Newsletter from "@/components/sections/Newsletter"
import Project5 from "@/components/sections/Project5"
import Services from "@/components/sections/Services"
export default function Home6() {

    return (
        <>
            <Layout headerStyle={6}>
                <Banner5 />
                <Services />
                <Project5 />
                <Blog3 />
                <Newsletter />
            </Layout>
        </>
    )
}