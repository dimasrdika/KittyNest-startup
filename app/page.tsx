import Navbar from "./navbar/page";
import Hero from "./hero/page";
import Carousel from "@/components/ui/carousel";
import SecondSection from "./section-2/page";
import Footer from "./footer/page";
export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Carousel />
        <SecondSection />
        <Footer />
      </div>
    </>
  );
}
