import "../App.css";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";
import { HousePlus } from "lucide-react";
import { UserPen } from "lucide-react";
import { HandCoins } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation("home");
  return (
    <section className="bg-gradient-to-l from-[#c21d03] to-[#fd5732]">
      <div className="container mx-auto py-20">
        <div className="space-y-8 px-2">
          <Badge
            className="rounded-sm bg-white border-transparent  text-black font-semibold uppercase "
            variant="outline"
          >
            {t("feature.badge")}
          </Badge>
          <h2 className="font-black text-xl md:text-2xl lg:text-4xl uppercase text-white">
            {t("feature.title")}
          </h2>
          <p className="text-justify text-white">{t("feature.description")}</p>
          <div className="flex flex-col lg:flex-row items-start  justify-between gap-6 py-10">
            <div className="flex flex-col items-start justify-start gap-4">
              <HousePlus size={38} color="white" className="place-self-start" />
              <h3 className="font-black text-base md:text-base lg:text-xl text-white  max-w-md">
                {t("feature.property.title")}
              </h3>
              <p className="text-justify text-white">
                {t("feature.property.description")}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <UserPen size={38} color="white" />
              <h3 className="font-black text-base md:text-base lg:text-xl text-white  max-w-md">
                {t("feature.agent.title")}
              </h3>
              <p className="text-justify text-white">
                {t("feature.agent.description")}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <HandCoins size={38} color="white" />
              <h3 className="font-black text-base md:text-base lg:text-xl text-white max-w-md">
                {t("feature.service.title")}
              </h3>
              <p className="text-justify text-white">
                {t("feature.service.description")}
              </p>
            </div>
          </div>
          <div className="space-x-4">
            <Button
              className="bg-inherit text-white rounded-none capitalize"
              variant="outline"
            >
              {t("feature.button")}
            </Button>
            <Button className="text-white capitalize" variant="ghost">
              {t("feature.contact")}
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
