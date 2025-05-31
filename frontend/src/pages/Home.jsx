import "../App.css";
import Header from "@/components/Header.jsx";
import Features from "@/components/Features.jsx";
import Listings from "@/components/Listings..jsx";
import Newsletter from "@/components/Newsletter.js.jsx";
import Footer from "@/components/Footer.jsx";
import Search from "@/components/Search.jsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchAllProperties } from "@/api/PropertyService.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Bath, Bed, MapPin, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { PropertyNotAvailable } from "@/components/ListingsWithFilter.jsx";
import { NoImage } from "@/components/ListingsWithFilter.jsx";
import VillaImage from "@/assets/luxury_villa_3.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  const [properties, setProperties] = useState(null);
  const { t } = useTranslation(["home", "common"]);
  const propertyLength = properties?.length || 0;

  useEffect(() => {
    try {
      const getAllProperties = async () => {
        const data = await fetchAllProperties();
        return data;
      };
      getAllProperties().then((data) => setProperties(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${VillaImage})` }}
        className={`h-1/2 w-screen flex-row items-center justify-between  bg-cover bg-blend-darken bg-black bg-opacity-60`}
      >
        <Header IsTransparent={true} />
        <Search />
      </div>
      <Listings
        bagTitle={String(propertyLength).concat(" ").concat(t("property"))}
        searchTitle={t("title")}
        announcement={t("announcement")}
      >
        {properties ? (
          properties.map((item, key) => {
            return (
              <Card
                key={key}
                className="w-full md:max-w-sm overflow-hidden rounded-sm drop-shadow-sm "
              >
                <div className="relative">
                  {item?.primary_image_url ? (
                    <img
                      src={`http://localhost:8000${item?.primary_image_url}`}
                      alt={item.name}
                      className="h-60 w-full object-cover"
                    />
                  ) : (
                    <NoImage />
                  )}
                  <div className="text-lg font-medium absolute bottom-0 left-0 px-2 mb-2 text-white bg-[#c21d03]">
                    {new Intl.NumberFormat("fr-CH", {
                      style: "currency",
                      currency: "CHF",
                    }).format(item.price)}
                  </div>
                  <Badge className="absolute right-2 top-2 bg-[#c21d03] uppercase">
                    {item.used_for === "sale"
                      ? t("common:card.badgeSale")
                      : t("common:card.badgeRenting")}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="line-clamp-1 ">{item.name}</CardTitle>
                    <CardDescription className="flex items-center justify-between gap-1 capitalize">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 stroke-[#c21d03]" />
                        {item?.address?.postcode} {item?.address?.city}
                      </div>
                      <Button
                        className="text-muted-foreground text-sm font-light capitalize"
                        variant="link"
                      >
                        {t("card.address")}
                      </Button>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4 stroke-[#c21d03] capitalize" />
                      <span className="capitalize">{item.nb_bedroom}</span>
                    </div>
                    <div className="flex items-center gap-1 capitalize">
                      <Bath className="h-4 w-4 stroke-[#c21d03]" />
                      <span className="capitalize">{item.nb_bathroom} </span>
                    </div>
                    <div className="flex items-center gap-1 capitalize">
                      <Maximize className="h-4 w-4 stroke-[#c21d03]" />
                      <span className="capitalize">
                        {item.square_footage} m2
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <div className="flex w-full gap-2">
                    <Button
                      className="w-full rounded-sm bg-gradient-to-br border-transparent  from-[#c21d03] to-[#fd5732] text-white hover:text-white  hover:bg-[#c21d03] capitalize"
                      variant="outline"
                      asChild={true}
                    >
                      <Link to={`/listings/detail/${item.slug}/`}>
                        {item.used_for === "sale"
                          ? t("common:card.button.sale")
                          : t("common:card.button.renting")}
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })
        ) : (
          <PropertyNotAvailable />
        )}
      </Listings>
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
}
