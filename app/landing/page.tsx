import Navbar from "../_components/navbar";
import Footer from "../_components/footer"
import Potentialsection from "../_components/potential";
import HeroSection from "../_components/hero";
import OriginSec from "../_components/origin";

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <OriginSec />
            <Potentialsection />
            <Footer />
        </div>
    )
};