import "../App.css";
import { useParams } from "react-router";
import Header from "@/components/Header.jsx";
import { Bath, Bed, Mail, MapPin, Maximize } from "lucide-react";
import Footer from "@/components/Footer.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useEffect, useState } from "react";
import {
  fetchPropertyBySimilarity,
  fetchPropertyDetails,
} from "@/api/PropertyService.js";
import { Link, useNavigate } from "react-router-dom";
import { NoImage } from "@/components/ListingsWithFilter.jsx";
import RobotNotFound from "../assets/robot-pana.svg";
import ProfileAgent from "../assets/agent-profile.jpg";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge.jsx";

export default function PropertyDetails() {
  const [property, setProperty] = useState(null);
  const [similars, setSimilars] = useState([]);
  const param = useParams();
  const { t, i18n } = useTranslation("propertyDetails");
  const navigate = useNavigate();

  useEffect(() => {
    const getPropertyDetails = async () => {
      try {
        const slug = param.slug;
        return await fetchPropertyDetails(slug);
      } catch (error) {
        console.error(error);
        navigate("/404/");
      }
    };

    const getPropertiesBySimilarity = async (usedFor, type) => {
      try {
        return await fetchPropertyBySimilarity(usedFor, type);
      } catch (error) {
        console.error(error);
      }
    };

    getPropertyDetails().then((data) => {
      setProperty(data);
      getPropertiesBySimilarity(data.used_for, data.property_type)
        .then((data2) =>
          data2.filter((properties) => properties.id !== data.id),
        )
        .then((data3) => {
          setSimilars(data3);
        });
    });
  }, [navigate, param.slug]);

  return (
    <>
      <Header IsTransparent={false} />
      {property && (
        <div className="container mx-auto py-20 space-y-4 px-4">
          <div className="flex flex-col items-start gap-4 px-6 lg:px-0">
            <h2 className="font-black text-xl md:text-2xl lg:text-4xl uppercase">
              {property.name}
            </h2>
            <div className="flex flex-row items-center justify-start">
              <MapPin className="h-3.5 w-3.5 stroke-[#c21d03]" />
              <p className="text-justify font-normal capitalize">
                {property.address?.postcode}-{property.address.city},{" "}
                {property.address.state}
              </p>
            </div>
          </div>
          <div className="grid w-full h-full grid-cols-1 lg:grid-cols-3 mt-4 gap-20 ">
            <div className="flex flex-col gap-4 col-span-full lg:col-span-2">
              <Carousel className="w-full">
                <CarouselContent>
                  {property.images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      onSelect={(index) => console.log(index)}
                    >
                      {image ? (
                        <img
                          className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-fill rounded-sm"
                          src={image.property_picture_url}
                          alt={property.name}
                        />
                      ) : (
                        <NoImage />
                      )}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="" />
                <CarouselNext className="-ml-8" />
              </Carousel>
              <div className="grid grid-cols-5 lg:grid-cols-8 items-center gap-1 justify-between">
                {property.images.map((image, index) => (
                  <img
                    key={index}
                    className="w-full h-[90px] rounded-sm object-cover"
                    src={image.property_picture_url}
                    alt={property.name}
                  />
                ))}
              </div>
            </div>
            <Card className="rounded-sm border-t-8 col-span-full lg:col-span-1 border-red-700 py-0 px-0 m-0 bg-white">
              <CardHeader className="flex flex-col items-center justify-center gap-4 w-full h-60">
                <span className="font-black">Regieflorissante SA</span>
                <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl uppercase">
                  {Intl.NumberFormat("fr-CH").format(property.price)} CHF
                </h2>
              </CardHeader>
              <div className="py-0 px-0 bg-gray-100 ">
                <CardContent className="py-6 space-y-8">
                  <div className="text-center space-y-2">
                    <img
                      className="w-32 h-auto mx-auto rounded-full shadow-sm shadow-black"
                      src={ProfileAgent}
                      alt="agent glen profile"
                    />
                    <p className="capitalize font-light">{t("agent")}</p>
                    <span className="text-xl font-bold uppercase">
                      Glen Egbide
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between px-2">
                    <div className="inline-flex items-center gap-2">
                      <Mail size={18} className="stroke-[#c21d03]" />
                      <span className="capitalize font-light">Email</span>
                    </div>
                    <span className="font-bold text-[#c21d03]">
                      rdv@regieflorissante.ch
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="py-6 space-y-8 flex flex-row items-center justify-center">
                  <Button
                    variant="destructive"
                    className="w-2/3 h-11 capitalize"
                  >
                    <Mail />
                    {t("button")}
                  </Button>
                </CardFooter>
                <CardFooter className="py-6 space-y-8 flex flex-row items-center justify-center">
                  <p className="text-md text-gray-700 font-light">
                    {t("message")}
                  </p>
                </CardFooter>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 space-y-20  mt-8">
            <div className="col-span-full lg:col-span-2 space-y-8">
              <div className="flex flex-col items-start justify-between gap-4 max-w-4xl">
                <h3 className="font-black text-base md:text-xl lg:text-2xl uppercase">
                  {t("characteristic")}
                </h3>
                <div className="grid grid-cols-2 w-full gap-4">
                  <div className="flex flex-row items-center justify-between gap-6 py-4 px-4 bg-gray-100 rounded-sm">
                    <span className="font-light  text-gray-500 capitalize">
                      {t("features.propertyType")} :
                    </span>
                    <span className="font-medium capitalize">
                      {property.property_type}
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-6 py-4 px-4 bg-gray-100 rounded-sm">
                    <span className="font-light text-gray-500 capitalize">
                      {" "}
                      {t("features.floor")} :
                    </span>
                    <span className="font-medium">{property.floor}</span>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-6 py-4 px-4  rounded-sm">
                    <span className="font-light text-gray-500 capitalize">
                      {" "}
                      {t("features.reference")} :
                    </span>
                    <span className="font-medium capitalize">
                      {property.lot_size}
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-6 py-4 px-4  rounded-sm">
                    <span className="font-light text-gray-500 capitalize">
                      {" "}
                      {t("features.yearBuilt")} :
                    </span>
                    <span className="font-medium">{property.year_built}</span>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-6 py-4 px-4 bg-gray-100 rounded-sm">
                    <span className="font-light text-gray-500 capitalize">
                      {" "}
                      {t("features.bedrooms")} :
                    </span>
                    <span className="font-medium capitalize">
                      {property.nb_bedroom}
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-6 py-4 px-4 bg-gray-100 rounded-sm">
                    <span className="font-light text-gray-500 capitalize">
                      {" "}
                      {t("features.bathrooms")} :
                    </span>
                    <span className="font-medium">{property.nb_bathroom}</span>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-6 py-4 px-4  rounded-sm">
                    <span className="font-light text-gray-500 capitalize">
                      {" "}
                      {t("features.squareMeter")} :
                    </span>
                    <span className="font-medium capitalize">
                      {property.square_footage}
                      <sup>2</sup>
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-6 py-4 px-4  rounded-sm">
                    <span className="font-light text-gray-500 capitalize">
                      {t("features.availableDate")} :
                    </span>
                    <span className="font-medium capitalize">
                      {new Date(property.available_date).toLocaleDateString(
                        i18n.language,
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items start justify-between gap-4 max-w-4xl">
                <h3 className="font-black text-base md:text-xl lg:text-2xl uppercase">
                  {t("description")}
                </h3>
                <p className="text-justify texte-md text-gray-700 leading-loose font-light">
                  {property.description}
                </p>
              </div>
              <div className="flex-fle-col items-start justify-between space-y-4 max-w-4xl">
                <h3 className="font-black text-base md:text-xl lg:text-2xl uppercase">
                  {t("address")}
                </h3>
                <p className="text-justify texte-md text-gray-700 leading-loose font-medium capitalize">
                  {property.address.postcode} {property.address.city}
                </p>
              </div>
              <div className="flex-fle-col items-start justify-between space-y-4 max-w-4xl">
                <h3 className="font-black text-base md:text-xl lg:text-2xl uppercase">
                  {t("cart")}
                </h3>
                <iframe
                  className="rounded-sm"
                  src={`https://maps.google.com/maps?q=${property.address.address_line_1}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                  style={{ width: "100%", height: "400px" }}
                ></iframe>
              </div>
            </div>
            <div className="flex-fle-col items-start justify-between gap-8 space-y-4 max-w-4xl">
              <h3 className="font-black text-base md:text-xl lg:text-2xl uppercase">
                {t("similar")}
              </h3>
              {similars.length !== 0 ? (
                similars.map((item, key) => {
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
                          <CardTitle className="line-clamp-1 ">
                            {item.name}
                          </CardTitle>
                          <CardDescription className="flex items-center justify-between gap-1 capitalize">
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
                            <span className="capitalize">
                              {item.nb_bedroom}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 capitalize">
                            <Bath className="h-4 w-4 stroke-[#c21d03]" />
                            <span className="capitalize">
                              {item.nb_bathroom}{" "}
                            </span>
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
                <div className="flex flex-col items-start justify-start gap-4">
                  <img
                    src={RobotNotFound}
                    alt="robot not found"
                    className="w-64 h-64"
                  />
                  <p className="font-light">{t("notFound")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
