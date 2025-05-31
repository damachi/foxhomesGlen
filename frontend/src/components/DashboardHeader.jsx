import "../App.css";
import { Button } from "@/components/ui/button.jsx";
import { ChevronLeft, CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function DashboardHeader({ isSubHeader, title, label }) {
  return (
    <>
      {isSubHeader ? (
        <div className="flex flex-row items-center justify-start gap-4">
          <Button variant="outline">
            <ChevronLeft color="#ef4444" className="w-6 h-6" />
            <span className="capitalize">{label}</span>
          </Button>
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl capitalize">
            {title}
          </h2>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between gap-4 w-full">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl capitalize">
            properties
          </h2>
          <Button className="rounded-none" asChild>
            <Link
              className="text-white capitalize  flex flex-row items-center justify-between gap-2"
              to="/dashboard/properties/add"
            >
              <CirclePlus></CirclePlus>
              add property
            </Link>
          </Button>
        </div>
      )}
    </>
  );
}
