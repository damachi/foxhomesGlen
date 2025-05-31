import "../App.css";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandGroup,
} from "@/components/ui/command";

export default function PropertySearchForm() {
  return (
    <form className="flex flex-col lg:flex-row items-center justify-between  gap-0 px-4">
      <div className="flex flex-row items-center">
        <Command className="border shadow-md md:min-w-[450px] rounded-none h-10 border-none shadow-none">
          <CommandInput placeholder="Search by location..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="address">
              <CommandItem>
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
      <Button type="submit" className="rounded-none h-10" variant="outline">
        <Search size="24" className="stroke-red-500" />
      </Button>
    </form>
  );
}
