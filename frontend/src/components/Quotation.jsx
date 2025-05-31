import "../App.css";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Phone, Mail, Map, Clock, Star } from "lucide-react";

export default function Quotation() {
  return (
    <div className="bg-[#EDE2D8]">
      <div className="container mx-auto py-20 space-y-12">
        <h2 className="font-black text-2xl md:text-3xl lg:text-4xl uppercase text-center ">
          Get Your Free Quote
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-20">
          <form className="flex flex-col items-start gap-6 bg-white px-4 py-4 w-full md:max-w-2xl">
            <div className="flex flex-row items-center justify-between gap-4 w-full">
              <div className="space-y-4 w-full">
                <Label>First Name</Label>
                <Input
                  className="rounded-none bg-[#EDE2D8]"
                  type="text"
                  placeholder="e.g Abdiwali"
                />
              </div>
              <div className="space-y-4 w-full">
                <Label>Last Name</Label>
                <Input
                  className="rounded-none bg-[#EDE2D8]"
                  type="text"
                  placeholder="e.g Maxamed"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-4 w-full">
              <Label>Email</Label>
              <Input
                className="w-full rounded-none bg-[#EDE2D8]"
                type="email"
                placeholder="e.g name@emaill.com"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-4 w-full">
              <Label>Phone</Label>
              <Input
                type="phone"
                className="w-full rounded-none bg-[#EDE2D8]"
                placeholder="+41 076 483 33 17"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-4 w-full">
              <Label>Moving From</Label>
              <Input
                type="text"
                className="w-full rounded-none bg-[#EDE2D8]"
                placeholder="rue jean-simonet 14. 1219 vernier"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-4 w-full">
              <Label>Moving To</Label>
              <Input
                type="text"
                className="w-full rounded-none bg-[#EDE2D8]"
                placeholder="rue jean-simonet 14. 1219 vernier"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-4 w-full">
              <Label>Preferred Moving Date</Label>
              <Input type="date" className="w-full rounded-none bg-[#EDE2D8]" />
            </div>
            <div className="flex flex-col items-start justify-between gap-4 w-full">
              <Label>Additional Notes</Label>
              <Textarea
                className="w-full rounded-none bg-[#EDE2D8]"
                placeholder="Type your message here."
              />
            </div>
            <Button
              variant="primary"
              className="w-full rounded-none bg-gradient-to-br border-transparent from-[#6B389E] to-[#A96E3F] text-white hover:text-black"
            >
              Submit Request
            </Button>
          </form>
          <div className="flex flex-col items-start justify-between gap-4">
            <Card className="rounded-none w-full">
              <CardHeader>
                <CardTitle className="text-xl font-medium">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <ul className="space-y-6">
                    <li className="flex flex-row items-start  gap-4">
                      <Phone color="#ef4444" size="24" />
                      <div className="flex flex-col gap-1">
                        <span className="font-black">Phone</span>
                        <span>(0041) 76 483 33 17</span>
                      </div>
                    </li>
                    <li className="flex flex-row items-start  gap-4">
                      <Mail color="#ef4444" size="24" />
                      <div className="flex flex-col gap-1">
                        <span className="font-black">Email</span>
                        <span>info@moveease.com</span>
                      </div>
                    </li>
                    <li className="flex flex-row items-start  gap-4">
                      <Map color="#ef4444" size="24" />
                      <div className="flex flex-col gap-1">
                        <span className="font-black">Address</span>
                        <span>Rue Jean-Simonet 14, 1219 Vernier</span>
                      </div>
                    </li>
                    <li className="flex flex-row items-start  gap-4">
                      <Clock color="#ef4444" size="24" />
                      <div className="flex flex-col gap-1">
                        <span className="font-black">Business Hours</span>
                        <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                      </div>
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-none w-full flex-grow">
              <CardHeader>
                <CardTitle className="text-xl font-medium">
                  Customer Reviews
                </CardTitle>
                <div className="flex flex-row items-center gap-4">
                  <div className="flex flex-row">
                    <Star
                      className="fill-orange-500 stroke-orange-500"
                      size="16"
                    />
                    <Star
                      className="fill-orange-500 stroke-orange-500"
                      size="1"
                    />
                    <Star
                      className="fill-orange-500 stroke-orange-500"
                      size="16"
                    />
                    <Star
                      className="fill-orange-500 stroke-orange-500"
                      size="16"
                    />
                    <Star
                      className="fill-orange-500 stroke-orange-500"
                      size="16"
                    />
                  </div>
                  <p className="text-sm">4.9/5 (2,150+ Reviews)</p>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-base font-black">Sarah Johnson</span>
                    <p>
                      Excellent service! The team was professional and careful
                      with our belongings.
                    </p>
                  </div>
                  <hr />
                  <div className="space-y-2">
                    <span className="text-base font-black">Michael Chen</span>
                    <p>
                      Very efficient and friendly movers. Would definitely
                      recommend!.
                    </p>
                  </div>
                  <hr />
                  <div className="space-y-2">
                    <span className="text-base font-black">John Moore</span>
                    <p>Affordable price for the service.</p>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
