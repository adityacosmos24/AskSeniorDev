import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import AskSenior from "./components/AskSenior";
import AskSeniorMobile from "./components/AskSeniorMobile";
export default function Page() {
  return (
    <>
      <HeroSection />
      <AskSeniorMobile />
      <AskSenior />
      <Testimonials />
    </>
  );
}
