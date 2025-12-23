import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import AskSenior from "./components/AskSenior";
import AskSeniorMobile from "./components/AskSeniorMobile";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AskSeniorMobile />
      <AskSenior />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}
