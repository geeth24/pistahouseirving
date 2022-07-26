import Head from "next/head"
import Hero from "../../components/Hero/Hero"
import Services from "../../components/Services/Services"
import Testimonials from "../../components/Testimonials/Testimonials"

const Home = () => {
    return (
        <>
            <Head>
                <title>Home | Pista House Texas</title>
            </Head>
            <Hero />
            <Services />
            <Testimonials />
        </>
    )
}

export default Home
