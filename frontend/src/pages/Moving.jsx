import "../App.css";
import Header from "@/components/Header.jsx";
import { Button } from "@/components/ui/button.jsx";
import MovingFeature from "@/components/MovingFeature.jsx";
import Pricing from "@/components/Pricing.jsx";
import Footer from "@/components/Footer.jsx";
import Quotation from "@/components/Quotation.jsx";
import MovingServiceImage from "@/assets/moving_service.jpg";

export default function Moving() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${MovingServiceImage}` }}
        className="h-screen w-screen flex-row items-center justify-between bg-cover bg-blend-darken bg-black bg-opacity-60"
      >
        <Header IsTransparent={true} />
        <section className="w-full  min-h-screen flex items-center justify-center">
          <div className="container  mx-auto">
            <div className="flex flex-col items-center justify-center gap-4">
              <h2 className="font-black text-2xl md:text-3xl lg:text-4xl uppercase text-white text-center">
                Professional Moving Service For Your <br /> New Home
              </h2>
              <p className="text-justify  text-base lg:text-xl text-white">
                Safe, Reliable, and Affordable Moving Solutions
              </p>
              <div className="flex flex-row items-center justify-between gap-4">
                <Button
                  className="rounded-none bg-gradient-to-br border-transparent from-[#6B389E] to-[#A96E3F] text-white"
                  variant="outline"
                >
                  Get Free Quote
                </Button>
                <Button
                  className="bg-inherit rounded-none text-white"
                  variant="outline"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <MovingFeature />
      <Pricing />
      <Quotation />
      <Footer />
    </>
  );
}
