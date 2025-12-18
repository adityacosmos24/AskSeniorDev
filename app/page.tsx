import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
<<<<<<< HEAD
import ContactUs from "./components/ContactUs";
export default function Page() {
  return (
    <>
      <HeroSection/>
      <WhyAskSenior/>
      <Testimonials/>
      <ContactUs/>
=======
import AskSenior from "./components/AskSenior";
import AskSeniorMobile from "./components/AskSeniorMobile";
export default function Page() {
  return (
    <>
      <HeroSection />
      <AskSeniorMobile />
      <AskSenior />
      <Testimonials />
>>>>>>> b9e5d5e4e2ca2bcb656e58c13a2132007eae3d97
    </>
  );
}
