import "../App.css";
import { useEffect, useState } from "react";
import DashboardHeader from "@/components/DashboardHeader.jsx";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
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
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import { Button } from "@/components/ui/button.jsx";
import { MapPin } from "lucide-react";
import PropertyAddForm from "@/components/PropertyAddForm.jsx";
import DashboardAminitiesList from "@/components/DashboardAminitiesList.jsx";
import { fetchAllProperties } from "@/api/PropertyService.js";
import { Controller, useForm } from "react-hook-form";
import DashboardLocationAddForm from "@/components/DashboardLocationAddForm.jsx";

export default function DashboardAddProperty() {
  const [selectedTab, setSelectedTab] = useState(
    localStorage.getItem("selectedTab") || "details",
  );
  const [properties, setProperties] = useState([]);
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      selectedProperty: null, // Initialize with no selection
    },
  });

  const selectedProperty = watch("selectedProperty");

  const onSubmit = (data) => {
    console.log("Selected property:", data.selectedProperty);
  };

  const handleCheckboxChange = (propertyId) => {
    if (selectedProperty === propertyId) {
      // Clicking the currently selected checkbox unselects it
      setValue("selectedProperty", null);
    } else {
      // Clicking a new checkbox selects it
      setValue("selectedProperty", propertyId);
    }
  };

  useEffect(() => {
    const getAllProperties = async () => {
      try {
        return await fetchAllProperties();
      } catch (error) {
        console.error("Error fetching all properties.", error);
      }
    };
    getAllProperties().then((data) => setProperties(data));
  });

  return (
    <main className="container mx-auto py-10 px-4 space-y-8">
      <DashboardHeader
        isSubHeader={true}
        title="Add Property"
        label="back to property"
      />
      <Tabs
        defaultValue={selectedTab}
        value={selectedTab}
        onValueChange={(tab) => {
          localStorage.setItem("selectedTab", tab);
          setSelectedTab(tab);
        }}
        className="w-full"
      >
        <TabsList className="grid h-11 grid-cols-4 w-full rounded-none bg-gradient-to-br border-transparent from-[#6B389E] to-[#A96E3F] text-white">
          <TabsTrigger className="rounded-none" value="details">
            Details
          </TabsTrigger>
          <TabsTrigger className="rounded-none" value="features">
            Features
          </TabsTrigger>
          <TabsTrigger className="rounded-none" value="location">
            Location
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="mt-6 space-y-6">
          <Card className="rounded-none">
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
              <CardDescription>
                Enter the basic information about the property
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PropertyAddForm
                property={undefined}
                setSelectedTab={setSelectedTab}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
              <CardDescription>
                Select amenities available for the property
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="mb-4 text-lg font-medium">
                    Select the property
                  </h3>
                  {properties.length > 0 ? (
                    properties.map((property, key) => (
                      <div className="flex items-center space-x-2" key={key}>
                        <Controller
                          name="selectedProperty"
                          control={control}
                          render={({ field }) => (
                            <Checkbox
                              id={property.id}
                              checked={field.value === property.id}
                              onCheckedChange={() =>
                                handleCheckboxChange(property.id)
                              }
                            />
                          )}
                        />
                        <Label htmlFor={property.id}>{property.name}</Label>
                      </div>
                    ))
                  ) : (
                    <p>no properties list in the database</p>
                  )}
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-medium">
                    Included Aminities
                  </h3>
                  <DashboardAminitiesList />
                </div>

                <Separator />

                <div>
                  <h3 className="mb-4 text-lg font-medium">
                    Additional Amenities
                  </h3>
                  <div className="grid gap-3">
                    <Label htmlFor="additional-amenities">
                      Other Amenities
                    </Label>
                    <Textarea
                      id="additional-amenities"
                      placeholder="Enter any additional amenities not listed above (comma separated)"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="location" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Property Location</CardTitle>
              <CardDescription>
                Enter the address and location details
              </CardDescription>
            </CardHeader>
            <CardContent className="h-full w-full">
              <DashboardLocationAddForm property={undefined} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
