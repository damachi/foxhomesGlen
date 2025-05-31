import "../App.css";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { MoveRight } from "lucide-react";
import { Truck } from "lucide-react";
import { Package } from "lucide-react";
import { Armchair } from "lucide-react";

export default function MovingFeature() {
  return (
    <section className="bg-[#C29978]">
      <div className="container mx-auto py-20">
        <div className="space-y-8">
          <div className="flex flex-col  items-start justify-center gap-2">
            <Badge
              className="rounded-none bg-gradient-to-br border-transparent from-[#6B389E] to-[#A96E3F] text-white place-self-start"
              variant="outline"
            >
              Discover
            </Badge>
            <h2 className="font-black text-2xl md:text-3xl lg:text-4xl uppercase text-white">
              Our Service
            </h2>
          </div>
          <div className="flex w-full md:w-auto flex-col md:flex-row items-start md:items-center justify-evenly gap-4">
            <Card className="max-w-sm rounded-none shadow-sm shadow-black">
              <CardHeader>
                <Truck color="#ef4444" size="64" />
                <CardTitle className="text-xl">Residential Moving</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base px-0">
                  Professional moving services for homes of all sizes, ensuring
                  safe and efficient relocation.
                </CardDescription>
              </CardContent>
              <CardFooter className="px-0">
                <Button className="text-red-500" variant="link">
                  Learn More <MoveRight />
                </Button>
              </CardFooter>
            </Card>
            <Card className="max-w-sm rounded-none shadow-sm shadow-black">
              <CardHeader>
                <Package color="#ef4444" size="64" />
                <CardTitle className="text-xl">Packing Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base px-0">
                  Expert packing and unpacking services with high-quality
                  materials for maximum protection.
                </CardDescription>
              </CardContent>
              <CardFooter className="px-0">
                <Button className="text-red-500" variant="link">
                  Learn More <MoveRight />
                </Button>
              </CardFooter>
            </Card>
            <Card className="max-w-sm rounded-none shadow-sm shadow-black">
              <CardHeader>
                <Armchair color="#ef4444" size="64" />
                <CardTitle className="text-xl">Furniture Assembly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base px-0">
                  Professional furniture disassembly and assembly services for a
                  hassle-free move.
                </CardDescription>
              </CardContent>
              <CardFooter className="px-0">
                <Button className="text-red-500" variant="link">
                  Learn More <MoveRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
