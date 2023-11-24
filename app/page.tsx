import Navbar from "./navbar/page";
import Hero from "./hero/page";
import Carousel from "@/components/ui/carousel";
import Features from "./hero-2/page";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Carousel />
        <Features />
      </div>
    </>
  );
}
