import Navbar from "../_components/navbar";
import Footer from "../_components/footer"
import Potentialsection from "../_components/potential";
import HeroSection from "../_components/hero";

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Potentialsection />
            <Footer />
        </div>
    )
}