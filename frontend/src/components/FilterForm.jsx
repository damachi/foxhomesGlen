import "../App.css";
import {
  fetchPropertyBedroom,
  fetchPropertyPriceByRange,
  fetchPropertyType,
  fetchPropertyByUsage,
} from "@/api/PropertyService.js";
import { Controller, useForm } from "react-hook-form";
import { Bed, Coins, House, X } from "lucide-react";
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
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
export default function FilterForm({ setProperties, usageFor }) {
  const [priceRange, setPriceRange] = useState([]);
  const [propertyTypes, setPropertyType] = useState([]);
  const [propertyBedrooms, setPropertyBedrooms] = useState([]);
  const [isReset, setIsReset] = useState(false);
  const { t } = useTranslation("common");

  const { handleSubmit, control, reset } = useForm();

  const defaultFieldsValue = {
    price_range: 1_000_000,
    type: "apartment",
    room: 20,
  };

  useEffect(() => {
    try {
      Promise.all([
        fetchPropertyPriceByRange(),
        fetchPropertyType(),
        fetchPropertyBedroom(),
      ]).then(([priceRange, types, bedrooms]) => {
        setPriceRange(priceRange);
        setPropertyBedrooms(bedrooms);
        setPropertyType(types);
      });

      if (isReset) {
        fetchPropertyByUsage(usageFor).then((data) => setProperties(data));
      }
    } catch (error) {
      console.log("Error fetching property filtering value", error);
    }
  }, [isReset]);

  const setDefaultFieldValue = (field, fieldValue) => {
    if (fieldValue === undefined || fieldValue === null || fieldValue === "") {
      return defaultFieldsValue[field];
    }
    return fieldValue;
  };

  const handleFilterFormSubmission = async (filterFormData) => {
    const modifiedData = Object.fromEntries(
      Object.entries(filterFormData).map(([key, value]) => [
        key,
        setDefaultFieldValue(key, value),
      ]),
    );

    console.log(modifiedData);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFilterFormSubmission)}
      noValidate={true}
      className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4 px-4 min-h-24 w-full"
    >
      <div className="w-full col-span-full md:col-span-1">
        <Controller
          name="price_range"
          control={control}
          render={({ field }) => (
            <div className="flex flex-row items-center h-10">
              <div className="bg-gray-100 w-auto h-full flex items-center px-2 mx-0 border border-gray-200 rounded-l-sm">
                <Coins className="stroke-red-500" />
              </div>
              <Select
                onValueChange={(value) => {
                  console.log(field.value);
                  field.onChange(value);
                  handleSubmit(handleFilterFormSubmission)();
                }}
                value={field.value}
              >
                <SelectTrigger className="w-full h-full mx-0   rounded-none bg-gray-100">
                  <SelectValue
                    className="placeholder:capitalize"
                    placeholder={`${t("filter.price.placeholder")}`.toLocaleUpperCase()}
                  />
                </SelectTrigger>
                <SelectContent className="rounded-none mt-0 pt-0">
                  <SelectGroup className="w-full">
                    <SelectLabel>
                      {t("filter.price.label").toLocaleUpperCase()}
                    </SelectLabel>
                    {priceRange?.map((item) => (
                      <SelectItem
                        key={item.price_range.max}
                        value={item.price_range.max}
                        className="flex flex-row w-full items-center justify-between gap-4"
                      >
                        <span>{`${Intl.NumberFormat("fr-CH").format(item.price_range.min)} - ${Intl.NumberFormat("fr-CH").format(item.price_range.max)} CHF`}</span>
                        <span> ({item.property_count}) </span>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>
      <div className="w-full col-span-full md:col-span-1">
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <div className="flex flex-row items-center h-10">
              <div className="bg-gray-100 w-auto h-full flex items-center px-2 border border-gray-200">
                <Bed className="stroke-red-500" />
              </div>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  handleSubmit(handleFilterFormSubmission)();
                }}
                value={field.value}
              >
                <SelectTrigger className="w-full h-full rounded-none bg-gray-100">
                  <SelectValue
                    placeholder={`${t("filter.property.placeholder")}`.toLocaleUpperCase()}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      {t("filter.property.label").toLocaleUpperCase()}
                    </SelectLabel>
                    {propertyTypes?.map((item) => (
                      <SelectItem
                        key={item.property_type}
                        value={item.property_type}
                        className="flex flex-row w-full items-center justify-between gap-4"
                      >
                        <span className="capitalize">{item.property_type}</span>
                        <span> ({item.count}) </span>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>
      <div className="w-full col-span-full lg:col-span-1 ">
        <Controller
          name="room"
          control={control}
          render={({ field }) => (
            <div className="flex flex-row items-center h-10">
              <div className="bg-gray-100 w-auto h-full flex items-center px-2 border border-gray-200">
                <House className="stroke-red-500" />
              </div>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  handleSubmit(handleFilterFormSubmission)();
                }}
                value={field.value}
              >
                <SelectTrigger className="w-full h-full rounded-none bg-gray-100">
                  <SelectValue
                    placeholder={`${t("filter.bedroom.placeholder").toLocaleUpperCase()}`}
                  />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  <SelectGroup>
                    <SelectLabel>
                      {t("filter.bedroom.label").toLocaleUpperCase()}
                    </SelectLabel>
                    {propertyBedrooms?.map((item) => (
                      <SelectItem
                        key={item.nb_bedroom}
                        value={item.nb_bedroom.toString()}
                        className="w-full"
                      >
                        <div className="w-full flex flex-row items-center justify-between">
                          <span>{Math.round(item.nb_bedroom)} room(s)</span>
                          <span>({item.count})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>
      <Button
        type="reset"
        onClick={() => {
          reset({
            price_range: "",
            type: "",
            room: "",
          });
          setIsReset(true);
        }}
        className="w-full col-span-full lg:col-span-1  rounded-none bg-gradient-to-br border-transparent from-[#c21d03] to-[#fd5732]"
      >
        <X className="w-6 h-6" />
        Clear All
      </Button>
    </form>
  );
}
