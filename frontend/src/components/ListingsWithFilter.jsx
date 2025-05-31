import "../App.css";
import Listings from "@/components/Listings..jsx";
import Filters from "@/components/Filters.jsx";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  MapPin,
  Bath,
  Bed,
  Maximize,
  Home,
  Search,
  ArrowLeft,
  ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NoPropertyImage from "@/assets/illustration_no_property_2.jpg";

// eslint-disable-next-line react/prop-types
export default function ListingsWithFilter({
  properties,
  setProperties,
  searchTitle,
  usageFor,
}) {
  const { t } = useTranslation(["common", "property"]);
  const propertyLength = properties?.length || 0;
  return (
    <>
      <Filters
        setProperties={setProperties}
        searchTitle={searchTitle}
        usageFor={usageFor}
      />
      <Listings
        bagTitle={`${propertyLength} ${t("property:badge")}`}
        searchTitle={
          properties
            ? // eslint-disable-next-line react/prop-types
              usageFor.toLocaleLowerCase() === "sale"
              ? t("property:sale.title")
              : t("property:renting.title")
            : "Property Not Available"
        }
        announcement={
          usageFor.toLocaleLowerCase() === "sale"
            ? t("property:sale.announcement")
            : t("property:renting.announcement")
        }
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
                      ? t("card.badgeSale")
                      : t("card.badgeRenting")}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="line-clamp-1 ">{item.name}</CardTitle>
                    <CardDescription className="flex items-center justify-between gap-1 capitalize">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 stroke-[#c21d03]" />
                        {item.address?.postcode} {item.address?.city}
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
                      className="w-full capitalize rounded-sm bg-gradient-to-br border-transparent  from-[#c21d03] to-[#fd5732] text-white hover:text-white  hover:bg-[#c21d03]"
                      variant="outline"
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
    </>
  );
}

export function PropertyNotAvailable() {
  return (
    <div className="flex items-start justify-center p-0">
      <Card
        style={{ backgroundImage: `url(${NoPropertyImage}` }}
        className={`mx-auto w-full h-full rounded-none  bg-cover bg-blend-darken bg-black bg-opacity-65 rounded-bl-full text-white py-20`}
      >
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Home className="h-10 w-10 text-red-500" />
          </div>
          <CardTitle className="text-2xl font-bold capitalize">
            Looking for new properties
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center max-w-md mx-auto">
          <p className="mb-4 text-white">
            We couldn't find the property you're looking for. It may have been
            sold, rented, or removed from our listings.
          </p>

          <div className="mt-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 bg-white h-11 rounded-none"
                placeholder="Search for other properties..."
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3 max-w-md mx-auto">
          <Button className="w-full rounded-none text-black" variant="outline">
            Search
          </Button>
          <Button
            variant="outline"
            className="w-full rounded-none bg-gradient-to-br border-transparent from-[#6B389E] to-[#A96E3F] text-white"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Homepage
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function NoImage() {
  return (
    <div className="flex h-60 flex-col items-center justify-center  border bg-muted/30 p-4 aspect-video rounded-none">
      <ImageIcon className="h-full w-10 text-muted-foreground/70 rounded-none" />
      <p className="mt-2 text-sm text-muted-foreground">no image</p>
    </div>
  );
}
