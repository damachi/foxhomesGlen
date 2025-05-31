import "../App.css";
import { useParams } from "react-router-dom";
import Header from "@/components/Header.jsx";
import ListingsWithFilter from "@/components/ListingsWithFilter.jsx";
import Footer from "@/components/Footer.jsx";
import { useEffect, useState } from "react";
import { fetchPropertyByUsage } from "@/api/PropertyService.js";

export default function Property() {
  const [properties, setProperties] = useState(null);
  const param = useParams();
  const usageFor = param.type;

  useEffect(() => {
    const fetchByUsageProperty = async (usage) => {
      try {
        return await fetchPropertyByUsage(usage);
      } catch (error) {
        console.log(error.statusText);
        console.log(error.data);
      }
    };
    fetchByUsageProperty(usageFor).then((data) => setProperties(data));
  }, [param]);

  return (
    <>
      <Header IsTransparent={false} />
      <ListingsWithFilter
        searchTitle={`Latest properties ${param.type === "renting" ? "for" : "on"} ${param.type}`}
        properties={properties}
        setProperties={setProperties}
        usageFor={usageFor}
      />
      <Footer />
    </>
  );
}
