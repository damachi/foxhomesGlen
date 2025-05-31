import "../App.css";
import {
  Card,
  CardHeader,
  CardFooter,
  CardDescription,
  CardContent,
} from "@/components/ui/card.jsx";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
export default function DashboardCard({ title, value, description, icon }) {
  const { t } = useTranslation("dashboard");
  return (
    <Card>
      <CardHeader>
        <CardDescription className="capitalize font-medium text-base">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row items-start justify-between">
        <p className="text-2xl font-semibold text-[#c21d03]">
          {value === 0 ? 0 : `+${value}`}
        </p>
        <p>{icon}</p>
      </CardContent>
      <CardFooter>
        <CardDescription className="">
          {description === 0
            ? `${t("stats.today")} `
            : `${description} ${t("stats.unit")} ${t("stats.range")}`}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
