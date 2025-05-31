import "../App.css";
import { Bed, Coins, House, MapPin, ListFilter, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx";
import { Button } from "@/components/ui/button.jsx";

import PropertySearchForm from "@/components/PropertySearchForm.jsx";
import FilterForm from "@/components/FilterForm.jsx";

// eslint-disable-next-line react/prop-types
export default function Filters({ setProperties, usageFor }) {
  return (
    <div className="bg-[#f1f1f1]">
      <div className="container mx-auto py-5">
        <div className="flex flex-row items-center justify-between">
          <FilterForm setProperties={setProperties} usageFor={usageFor} />
        </div>
      </div>
    </div>
  );
}
