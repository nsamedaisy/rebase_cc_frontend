import Navbar from "../_components/navbar";
import Footer from "../_components/footer"
import Potentialsection from "../_components/potential";
import HeroSection from "../_components/hero";
import OriginSec from "../_components/origin";
import Testimonials from "../_components/testimonial";
import FeaturedStudent from "../_components/features-student";
import MeetTeam from "../_components/meet-team";

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <OriginSec />
            <Testimonials />
            <FeaturedStudent />
            <Potentialsection />
            <Footer />
            <MeetTeam />
        </div>
    )
};