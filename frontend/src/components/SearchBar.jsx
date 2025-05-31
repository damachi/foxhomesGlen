import "../App.css";
import { Input } from "@/components/ui/input.jsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button.jsx";
import { MapPin } from "lucide-react";
import { House } from "lucide-react";
import { Coins } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="flex flex-col lg:flex-row items-center justify-between py-4 bg-white rounded-none shadow-2xl shadow-black gap-4 px-4">
      <div className="flex flex-row items-center h-10">
        <div className="bg-gray-100 w-auto h-full flex items-center px-2 border border-gray-200">
          <MapPin className="stroke-red-500" />
        </div>
        <Input
          className="bg-gray-100 rounded-none w-[320px] h-full"
          type="text"
          placeholder="Location..."
        ></Input>
      </div>
      <div className="flex flex-row items-center w-full h-10">
        <div className="bg-gray-100 w-auto h-full flex items-center px-2 border border-gray-200">
          <House className="stroke-red-500" />
        </div>
        <Select>
          <SelectTrigger className="w-full lg:w-[180px] h-full rounded-none bg-gray-100">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Property Type</SelectLabel>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="garage">Garage</SelectItem>
              <SelectItem value="room">Individual Room</SelectItem>
              <SelectItem value="parking">Parking</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-row items-center w-full h-10">
        <div className="bg-gray-100 w-auto h-full flex items-center px-2 border border-gray-200">
          <Coins className="stroke-red-500" />
        </div>
        <Select>
          <SelectTrigger className="w-full h-full lg:w-[180px] rounded-none bg-gray-100">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Price Range</SelectLabel>
              <SelectItem value="1000">1000</SelectItem>
              <SelectItem value="10000">10000</SelectItem>
              <SelectItem value="100000">100000</SelectItem>
              <SelectItem value="1000000">1000000</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button className="w-full lg:w-auto rounded-none bg-gradient-to-br border-transparent from-[#6B389E] to-[#A96E3F]">
        Search
      </Button>
    </form>
  );
}
