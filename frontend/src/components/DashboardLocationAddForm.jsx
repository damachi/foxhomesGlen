import "../App.css";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx";
import { Button } from "@/components/ui/button.jsx";

export default function ({ properties }) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    reset,
    formState: { errors, isSubmitting, isValidating },
  } = useForm({ shouldFocusError: true });

  return (
    <form className="space-y-6 block">
      <div className="grid gap-3">
        <Label htmlFor="street">Street Address</Label>
        <Input id="street" placeholder="Enter street address" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="grid gap-3">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Enter city" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="state">State/Province</Label>
          <Input id="state" placeholder="Enter state or province" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="grid gap-3">
          <Label htmlFor="zip">Zip/Postal Code</Label>
          <Input id="zip" placeholder="Enter zip or postal code" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="country">Country</Label>
          <Select defaultValue="us">
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="float-right">Add Address</Button>
    </form>
  );
}
