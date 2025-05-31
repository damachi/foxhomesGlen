import "../App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

export default function Pricing() {
  return (
    <section className="bg-[#EDE2D8]">
      <div className="container mx-auto py-20 space-y-12">
        <h2 className="font-black text-2xl md:text-3xl lg:text-4xl uppercase text-center ">
          Transparent Pricing Plans
        </h2>
        <div className="flex flex-col w-full md:w-auto   md:flex-row items-start md:items-center justify-evenly gap-4">
          <Card className="min-w-max h-auto rounded-none shadow-sm shadow-black">
            <CardHeader>
              <CardTitle className="text-xl">Residential Moving</CardTitle>
              <p className="text-justify">Studio/1BR</p>
              <span className="text-xl md:text-2xl font-black">CHF 299</span>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base px-0">
                <ul>
                  <li className="flex flex-row items-center  gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>2 Professional Movers</span>
                  </li>
                  <li className="flex flex-row items-center  gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Moving Truck</span>
                  </li>
                  <li className="flex flex-row items-center  gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Basic Insurance</span>
                  </li>
                  <li className="flex flex-row items-center gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Loading & Unloading</span>
                  </li>
                  <li className="flex flex-row items-center gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>3 Hours Service</span>
                  </li>
                </ul>
              </CardDescription>
            </CardContent>
            <CardFooter className="w-full">
              <Button
                className="bg-red-500 text-white rounded-none w-1/2"
                variant="outline"
              >
                Book Now
              </Button>
            </CardFooter>
          </Card>
          <Card className="min-w-max h-auto  rounded-none shadow-sm shadow-black border-2 border-red-500">
            <div className="w-full h-8">
              <span className="px-2 py-2 bg-red-500 text-white capitalize  mx-auto w-32 -translate-y-1/2  flex  items-center justify-center">
                most popular
              </span>
            </div>

            <CardHeader>
              <CardTitle className="text-xl">Standard Package</CardTitle>
              <p className="text-justify">Studio/1BR</p>
              <span className="text-xl md:text-2xl font-black">CHF 299</span>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base px-0">
                <ul>
                  <li className="flex flex-row items-center  gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>3 Professional Movers</span>
                  </li>
                  <li className="flex flex-row items-center  gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Moving Truck</span>
                  </li>
                  <li className="flex flex-row items-center  gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Extended Insurance</span>
                  </li>
                  <li className="flex flex-row items-center gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Loading & Unloading</span>
                  </li>
                  <li className="flex flex-row items-center gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>5 Hours Service</span>
                  </li>
                  <li className="flex flex-row items-center gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Basic Packing Materials</span>
                  </li>
                </ul>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="rounded-none bg-gradient-to-br border-transparent from-[#6B389E] to-[#A96E3F] text-white  w-1/2">
                Book Now
              </Button>
            </CardFooter>
          </Card>
          <Card className="min-w-max h-auto  rounded-none shadow-sm shadow-black">
            <CardHeader>
              <CardTitle className="text-xl">Residential Moving</CardTitle>
              <p className="text-justify">Studio/1BR</p>
              <span className="text-xl md:text-2xl font-black">CHF 299</span>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base px-0">
                <ul>
                  <li className="flex flex-row items-center  gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>5 Professional Movers</span>
                  </li>
                  <li className="flex flex-row items-center  gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Large Moving Truck</span>
                  </li>
                  <li className="flex flex-row items-center  gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Full Insurance</span>
                  </li>
                  <li className="flex flex-row items-center gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Loading & Unloading</span>
                  </li>
                  <li className="flex flex-row items-center gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>8 Hours Service</span>
                  </li>
                  <li className="flex flex-row items-center gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Complete Packing Service</span>
                  </li>
                  <li className="flex flex-row items-center gap-4">
                    <CheckCheck color="#ef4444" />
                    <span>Furniture Assembly</span>
                  </li>
                </ul>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                className="bg-red-500 text-white rounded-none w-1/2"
                variant="outline"
              >
                Book Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
