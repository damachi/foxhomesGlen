import "../App.css";
import { useState } from "react";
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";
import { addProperty } from "@/api/PropertyService.js";

export default function PropertyAddForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    reset,
    formState: { errors, isSubmitting, isValidating },
  } = useForm({ shouldFocusError: true });

  const [descriptionLength, setDescriptionLength] = useState(0);
  const isLoading = isSubmitting || isValidating;

  const handlePropertyRegistration = async (data) => {
    try {
      const property = await addProperty(data);
      //setSelectedTab("features")

      toast.success("Property has been submitted successfully", {
        // eslint-disable-next-line react/prop-types
        description: `Property ${property.name} has been added`,
      });

      reset();
    } catch (error) {
      if (error.status === 400) {
        console.log(error.data);
        Object.entries(error.data).forEach(([fieldName, message]) => {
          setError(fieldName, {
            type: "server",
            message: Array.isArray(message) ? message[0] : message,
          });
        });
        console.log(errors);
      } else {
        toast.error(`${error.status}-${error.statusText}`, {
          description: error.message,
          duration: Infinity,
          closeButton: true,
        });
      }
    }
  };

  return (
    <>
      <form
        className="grid gap-6"
        onSubmit={handleSubmit(handlePropertyRegistration)}
      >
        <div className="grid gap-3">
          <Label htmlFor="name">Property Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter property name"
            {...register("name", {
              required: { value: true, message: "*Name field is required" },
              minLength: {
                value: 5,
                message: "*Minimum 5 characters required",
              },
              maxLength: {
                value: 30,
                message: "*Maximum 30 characters required",
              },
            })}
          />
          {errors?.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="grid gap-3">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Describe the property in detail"
            className="min-h-[120px]"
            name="description"
            {...register("description", {
              required: {
                value: true,
                message: "*Description field is required",
              },
              minLength: {
                value: 100,
                message: "*Minimum 100 characters required",
              },
              maxLength: {
                value: 10000,
                message: "*Maximum 10000 characters required",
              },
              onChange: (e) => setDescriptionLength(e.target.value.length),
            })}
          />
          <span className="text-muted-foreground text-xs">
            {descriptionLength}/100-1000
          </span>
          {errors?.description && (
            <span className="text-xs text-red-500">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="property_type">Property Type</Label>
            <Controller
              name="property_type"
              control={control}
              rules={{ required: "Property type field is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="garage">Garage</SelectItem>
                    <SelectItem value="parking">Parking</SelectItem>
                    <SelectItem value="room">Room</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.property_type && (
              <span className="text-xs text-red-500">
                {errors.property_type.message}
              </span>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="used_for">Use For</Label>
            <Controller
              name="used_for"
              control={control}
              rules={{ required: "Property use field is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="use_for">
                    <SelectValue placeholder="Select property use" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sale">Sale</SelectItem>
                    <SelectItem value="renting">Renting</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.use_for && (
              <span className="text-xs text-red-500">
                {errors.use_for.message}
              </span>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="status">Status</Label>
            <Controller
              name="status"
              control={control}
              rules={{ required: "Property status field is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select property status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="sold">Sold</SelectItem>
                    <SelectItem value="rented">Rented</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.status && (
              <span className="text-xs text-red-500">
                {errors.status.message}
              </span>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="floor">Floor</Label>
            <Input
              id="floor"
              name="floor"
              type="number"
              placeholder="Enter the floor"
              {...register("floor", {
                required: { value: true, message: "*floor field is required" },
                min: {
                  value: 1,
                  message: "*Minimum floor greater or equal to 1 required",
                },
                max: {
                  value: 20,
                  message: "*Maximum floor is 20",
                },
              })}
            />
            {errors?.floor && (
              <span className="text-xs text-red-500">
                {errors.floor.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              placeholder="Enter price"
              name="price"
              {...register("price", {
                required: { value: true, message: "*Price field is required" },
                min: {
                  value: 0.01,
                  message: "*Minimum price greater than 0 CHF required",
                },
                max: {
                  value: 1000000.0,
                  message: "*Maximum price 1 000 000 CHF required",
                },
              })}
            />
            {errors?.price && (
              <span className="text-xs text-red-500">
                {errors.price.message}
              </span>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="lot_size">Lot Size</Label>
            <Input
              id="lot_size"
              name="lot_size"
              type="text"
              placeholder="Enter lot size as reference"
              {...register("lot_size", {
                required: {
                  value: true,
                  message: "*Lot size field is required",
                },
                pattern: {
                  value: /^[0-9a-zA-z]+$/,
                  message: "*Lot size must contain a number and letters only",
                },
              })}
            />
            {errors?.lot_size && (
              <span className="text-xs text-red-500">
                {errors.lot_size.message}
              </span>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="square_footage">Square Footage</Label>
            <Input
              id="square_footage"
              name="square_footage"
              type="number"
              placeholder="Enter square footage"
              {...register("square_footage", {
                required: { value: true, message: "*Size field is required" },
                min: {
                  value: 20,
                  message: "*Minimum size greater than 20 required",
                },
                max: {
                  value: 300,
                  message: "*Maximum size 300 required",
                },
              })}
            />
            {errors?.square_footage && (
              <span className="text-xs text-red-500">
                {errors.square_footage.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="nb_bedrooms">Bedrooms</Label>
            <Input
              id="nb_bedroom"
              type="number"
              name="nb_bedroom"
              step="0.5"
              placeholder="Enter number of bedrooms"
              {...register("nb_bedroom", {
                required: {
                  value: true,
                  message: "*Bedrooms field is required",
                },
                min: {
                  value: 1,
                  message: "*Minimum bedrooms greater than 1 required",
                },
                max: {
                  value: 10,
                  message: "*Maximum bedrooms 10 required",
                },
              })}
            />
            {errors?.nb_bedroom && (
              <span className="text-xs text-red-500">
                {errors.nb_bedroom.message}
              </span>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="nb_bathroom">Bathrooms</Label>
            <Input
              id="nb_bathroom"
              name="nb_bathroom"
              type="number"
              placeholder="Enter number of bathrooms"
              {...register("nb_bathroom", {
                required: {
                  value: true,
                  message: "*Bathrooms field is required",
                },
                min: {
                  value: 1,
                  message: "*Minimum bathrooms greater than 1 required",
                },
                max: {
                  value: 3,
                  message: "*Maximum bathrooms 3 required",
                },
              })}
            />
            {errors?.nb_bathroom && (
              <span className="text-xs text-red-500">
                {errors.nb_bathroom.message}
              </span>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="year_built">Year Built</Label>
            <Input
              id="year_built"
              name="year_built"
              type="number"
              placeholder="Enter year built"
              {...register("year_built", {
                required: {
                  value: true,
                  message: "*Year built field is required",
                },
                min: {
                  value: 1900,
                  message: "*Minimum year built greater than 1900 required",
                },
                pattern: {
                  value: /^\d{4}$/,
                  message: "*Year built must be a 4 digit number",
                },
                validate: (value) => {
                  const currentYear = new Date().getFullYear();
                  return (
                    value <= currentYear ||
                    "Year built must be less than current year"
                  );
                },
              })}
            />
            {errors?.year_built && (
              <span className="text-xs text-red-500">
                {errors.year_built.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid gap-3">
          <Label>Property Availability</Label>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid gap-3">
              <Label htmlFor="available_date">Available Date</Label>
              <Input
                id="available_date"
                name="available_date"
                type="date"
                placeholder="Enter available from date"
                {...register("available_date", {
                  required: {
                    value: true,
                    message: "*Available from field is required",
                  },
                })}
              />
              {errors?.available_date && (
                <span className="text-xs text-red-500">
                  {errors.available_date.message}
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="reference-">Reference</Label>
              <Input
                id="reference"
                name="reference"
                type="text"
                placeholder="Enter property reference"
                {...register("reference", {
                  required: {
                    value: true,
                    message: "*Reference field is required",
                  },
                  pattern: {
                    value: /^[0-9a-zA-Z]{5,10}$/,
                    message:
                      "*Reference must contain a number and letters only. Between 5-10 characters",
                  },
                  onChange: (e) => {
                    setValue("reference", e.target.value.toUpperCase());
                  },
                })}
              />
              {errors?.reference && (
                <span className="text-xs text-red-500">
                  {errors.reference.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Link to="/dashboard/properties">
            <Button type="button" variant="outline" className="rounded-none">
              Cancel
            </Button>
          </Link>
          <Button type="submit" className="rounded-none" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isValidating ? "Validating..." : "Creating..."}
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Create Property
              </>
            )}
          </Button>
        </div>
      </form>
    </>
  );
}
