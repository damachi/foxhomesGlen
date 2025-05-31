import "../App.css";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card.jsx";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { API_BASE_URL } from "@/api/Constants.js";
import { fetchPropertiesShort } from "@/api/PropertyService.js";

export default function PropertyDashboardCard() {
  const [properties, setProperties] = React.useState({});

  useEffect(() => {
    const getPropetiesShort = async () => {
      try {
        const data = await fetchPropertiesShort();
        return data;
      } catch (error) {
        console.error("Error fetching properties short", error);
      }
    };
    getPropetiesShort().then((data) => setProperties(data));
  }, []);
  return (
    <Card>
      <CardHeader className="w-full">
        <CardDescription className="flex flex-row items-center justify-between">
          <span className="capitalize font-medium text-base">
            Recent properties
          </span>
          <Button className="text-gray-500" variant="link" asChild={true}>
            <Link className="capitalize" to="/dashboard/properties">
              view all
            </Link>
          </Button>
        </CardDescription>
        <hr className="border-b border-gray-200 w-full" />
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-between gap-4">
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between w-full px-2 bor"
            >
              <div className="flex flex-col items center justify-between gap-2 ">
                <p className="text-base font-normal uppercase">
                  {property.name}
                </p>
                <p className="text-sm font-light capitalize text-[#c21d03]">
                  {property.address_line_1}, {property.city}
                </p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 capitalize">
                {property.status}
              </span>
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-500 font-light uppercase">
          6 derniers biens jusqu'à aujourd'hui
        </p>
      </CardFooter>
    </Card>
  );
}
