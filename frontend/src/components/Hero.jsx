import "../App.css";
import { Button } from "@/components/ui/button.jsx";
import BgApparementShowcase from "../assets/appartment showcase.png";

export default function Hero() {
  return (
    <section className="w-full bg-[#EDE2D8]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-1/2 space-y-8 py-20">
            <h2 className="font-black text-2xl md:text-3xl lg:text-6xl uppercase">
              find your dream <br /> home today!
            </h2>
            <p className="text-justify  text-base lg:text-xl">
              Explore our extensive listings of stunning properties tailored to
              your needs.
              <br /> Discover the perfect place to call home with just a few
              clicks.
            </p>
            <div className="space-x-4">
              <Button
                className="rounded-none bg-gradient-to-br border-transparent from-[#6B389E] to-[#A96E3F]"
                variant="outline"
              >
                Browse
              </Button>
              <Button className="bg-inherit rounded-none" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full mt-0 py-0">
            <img
              className="h-[60vh]  lg:h-[80vh] max-w-full object-cover"
              src={BgApparementShowcase}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
