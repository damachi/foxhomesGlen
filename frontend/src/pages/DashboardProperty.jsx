import "../App.css";
import DashboardLayout from "@/pages/DashboardLayout.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";
import {
  CirclePlus,
  Search,
  AlignVerticalSpaceAround,
  Bed,
} from "lucide-react";
import { Input } from "@/components/ui/input.jsx";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select.jsx";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.jsx";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import DashboardHeader from "@/components/DashboardHeader.jsx";

export default function DashboardProperty() {
  const properties = [
    {
      status: "AV",
      title: "Downtown Apartment for Rent",
      address: "123 Main St",
      city: "New York",
      property_type: "APARTMENT",
      lot_size: "A1",
      used_for: "RENTING",
      square_footage: 950,
      nb_bedroom: 2,
    },
    {
      status: "SO",
      title: "Suburban Family Home (Sold)",
      address: "456 Oak Ave",
      city: "Austin",
      property_type: "HOUSE",
      lot_size: "B2",
      used_for: "SALE",
      square_footage: 2200,
      nb_bedroom: 4,
    },
    {
      status: "RE",
      title: "Luxury Waterfront Condo (Rented)",
      address: "789 Ocean Dr",
      city: "Miami",
      property_type: "CONDO",
      lot_size: "C3",
      used_for: "RENTING",
      square_footage: 1800,
      nb_bedroom: 3,
    },
    {
      status: "SO",
      title: "Commercial Office Space (Sold)",
      address: "101 Business Blvd",
      city: "Chicago",
      property_type: "COMMERCIAL",
      lot_size: "D4",
      used_for: "SALE",
      square_footage: 2500,
      nb_bedroom: 0,
    },
    {
      status: "RE",
      title: "Historic Townhouse (Rented)",
      address: "202 Heritage Ln",
      city: "Boston",
      property_type: "TOWNHOUSE",
      lot_size: "E5",
      used_for: "RENTING",
      square_footage: 1600,
      nb_bedroom: 3,
    },
    {
      status: "SO",
      title: "Tech Executive Home (Sold)",
      address: "303 Silicon Way",
      city: "San Francisco",
      property_type: "HOUSE",
      lot_size: "F6",
      used_for: "SALE",
      square_footage: 3200,
      nb_bedroom: 5,
    },
    {
      status: "RE",
      title: "Lakeside Cottage (Rented)",
      address: "404 Lakeview Rd",
      city: "Lake Tahoe",
      property_type: "COTTAGE",
      lot_size: "G7",
      used_for: "RENTING",
      square_footage: 1200,
      nb_bedroom: 2,
    },
    {
      status: "SO",
      title: "Urban Loft (Sold)",
      address: "505 Arts Ave",
      city: "Los Angeles",
      property_type: "LOFT",
      lot_size: "H8",
      used_for: "SALE",
      square_footage: 1400,
      nb_bedroom: 1,
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4 space-y-8 ">
      <DashboardHeader label=" add property" title="Properties" />
      <form className="flex flex-col lg:flex-row items-start md:items-center justify-start gap-4">
        <div className="flex flex-row items-center  h-10">
          <div className="bg-gray-100 w-auto h-full flex items-center px-2 border border-gray-200">
            <Search className="stroke-red-500" />
          </div>
          <Input
            className="w-full lg:w-[250px] h-full rounded-none bg-white"
            placeholder="Search properties"
          />
        </div>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center w-full h-10">
            <div className="bg-gray-100 w-auto h-full flex items-center px-2 border border-gray-200">
              <AlignVerticalSpaceAround className="stroke-red-500" />
            </div>
            <Select>
              <SelectTrigger className="w-full lg:w-[180px] h-full rounded-none bg-white">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>All Status</SelectLabel>
                  <SelectItem value="home">Active</SelectItem>
                  <SelectItem value="apartment">Pending</SelectItem>
                  <SelectItem value="garage">Inactive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-row items-center w-full h-10">
            <div className="bg-gray-100 w-auto h-full flex items-center px-2 border border-white">
              <Bed className="stroke-red-500" />
            </div>
            <Select>
              <SelectTrigger className="w-full lg:w-[180px] h-full rounded-none bg-white">
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
          <Button className="w-full lg:w-auto rounded-none bg-gradient-to-br border-transparent from-[#6B389E] to-[#A96E3F]">
            Clear All
          </Button>
        </div>
      </form>
      <Card className="rounded-none bg-white px-0">
        <CardContent>
          <Table className="w-full">
            <TableCaption>A list of your recent properties.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Property Type</TableHead>
                <TableHead>Lot Size</TableHead>
                <TableHead>Used For</TableHead>
                <TableHead>Square Fit</TableHead>
                <TableHead className="text-right">Number Of Bedroom</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property) => (
                <TableRow key={`${property.title}-${property.address}`}>
                  <TableCell
                    className={
                      property.status === "AV"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {property.status}
                  </TableCell>
                  <TableCell>{property.title}</TableCell>
                  <TableCell>{property.address}</TableCell>
                  <TableCell>{property.city}</TableCell>
                  <TableCell>{property.property_type}</TableCell>
                  <TableCell>{property.lot_size}</TableCell>
                  <TableCell>{property.used_for}</TableCell>
                  <TableCell>{property.square_footage}</TableCell>
                  <TableCell className="text-right">
                    {property.nb_bedroom}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row items-end justify-end gap-1">
                      <Button
                        className="text-purple-700"
                        variant="link"
                        asChild
                      >
                        <Link to="/properties/:id">View</Link>
                      </Button>
                      <Button className="text-red-700" variant="link" asChild>
                        <Link to="/properties/edit/">Edit</Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="font-normal" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="font-normal">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="font-normal" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
