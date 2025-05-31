import "../App.css";
import Header from "@/components/Header.jsx";
import Listings from "@/components/Listings..jsx";
import Footer from "@/components/Footer.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { MoveRight } from "lucide-react";
import ImgRenting from "@/assets/renting.jpg";
import ImgBuying from "@/assets/buying.jpg";
import ImgSelling from "@/assets/selling.jpg";
import ImgMoving from "@/assets/moving.jpg";
import ImgFinanceInsurance from "@/assets/finance_insurance.jpg";
import { Button } from "@/components/ui/button.jsx";

export default function Guide() {
  return (
    <>
      <Header IsTransparent={false} />
      <Listings SearchTitle="Guide" bagTitle="Guide" View={false}>
        <Card className="max-w-sm rounded-none shadow-sm shadow-black bg-[#c21d03] text-white">
          <div className="relative">
            <img
              className="max-w-full h-auto mt-0"
              src={ImgRenting}
              alt="renting a apartment"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-white">Renting</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base px-0 text-white">
              Here you’ll find everything you need to know about renting.
            </CardDescription>
          </CardContent>
          <CardFooter className="px-0">
            <Button className="text-white" variant="link">
              Learn More <MoveRight />
            </Button>
          </CardFooter>
        </Card>
        <Card className="max-w-sm rounded-none shadow-sm shadow-black bg-[#c21d03]">
          <div className="relative">
            <img
              className="max-w-full h-auto mt-0"
              src={ImgBuying}
              alt="renting a apartment"
            />
            <div className="absolute inset-0 bg-black  opacity-20"></div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-white">Buying</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base px-0 text-white">
              All the relevant information about buying a property can be found
              here.
            </CardDescription>
          </CardContent>
          <CardFooter className="px-0">
            <Button className="text-white" variant="link">
              Learn More <MoveRight />
            </Button>
          </CardFooter>
        </Card>
        <Card className="max-w-sm rounded-none shadow-sm shadow-black bg-[#c21d03]">
          <div className="relative">
            <img
              className="max-w-full h-auto mt-0"
              src={ImgSelling}
              alt="renting a apartment"
            />
            <div className="absolute inset-0 bg-black  opacity-20"></div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-white">Selling</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base px-0 text-white">
              We&#39;ll show you how to successfully sell your property.
            </CardDescription>
          </CardContent>
          <CardFooter className="px-0">
            <Button className="text-white" variant="link">
              Learn More <MoveRight />
            </Button>
          </CardFooter>
        </Card>
        <Card className="max-w-sm rounded-none shadow-sm shadow-black bg-[#c21d03]">
          <div className="relative">
            <img
              className="max-w-full h-auto mt-0"
              src={ImgMoving}
              alt="renting a apartment"
            />
            <div className="absolute inset-0 bg-black  opacity-20"></div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-white">Moving</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-white px-0">
              Moving made easy: With our tips, your relocation and handover will
              go smoothly.
            </CardDescription>
          </CardContent>
          <CardFooter className="px-0">
            <Button className="text-white" variant="link">
              Learn More <MoveRight />
            </Button>
          </CardFooter>
        </Card>
        <Card className="max-w-sm rounded-none shadow-sm shadow-black bg-[#c21d03]">
          <div className="relative">
            <img
              className="max-w-full h-auto mt-0"
              src={ImgFinanceInsurance}
              alt="renting a apartment"
            />
            <div className="absolute inset-0 bg-black  opacity-20"></div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-white">
              Financing & Insurance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-white px-0">
              Everything you need to know about the right mortgage and
              insurances for your property.
            </CardDescription>
          </CardContent>
          <CardFooter className="px-0">
            <Button className="text-white" variant="link">
              Learn More <MoveRight />
            </Button>
          </CardFooter>
        </Card>
      </Listings>
      <Footer />
    </>
  );
}
