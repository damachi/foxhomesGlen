import "../App.css";
import React, { useEffect } from "react";
import { fetchAllAmenities } from "@/api/AminitiesService.js";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { Label } from "@/components/ui/label.jsx";

export default function DashboardAminitiesList() {
  const [amenities, setAmenities] = React.useState([]);

  useEffect(() => {
    const getAllAminities = async () => {
      try {
        return await fetchAllAmenities();
      } catch (error) {
        console.error("Error fetching all available amenities", error);
      }
    };
    getAllAminities().then((data) => setAmenities(data));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {amenities.length > 0 ? (
        amenities.map((item, key) => {
          return (
            <div className="flex items-center space-x-2" key={key}>
              <Checkbox id={item.title} />
              <Label htmlFor={item.title}>{item.title}</Label>
            </div>
          );
        })
      ) : (
        <p>no aminities available</p>
      )}
    </div>
  );
}
