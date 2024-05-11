import Navbar from "../_components/navbar";
import Footer from "../_components/footer"
import Potentialsection from "../_components/potential";
import HeroSection from "../_components/hero";
import OriginSec from "../_components/origin";
import Testimonials from "../_components/testimonial";

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <OriginSec />
            <Testimonials />
            <Potentialsection />
            <Footer />
        </div>
    )
};