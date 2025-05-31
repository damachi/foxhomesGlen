import "../App.css";
import { Button } from "@/components/ui/button.jsx";
import { Earth, UserIcon } from "lucide-react";
import { EarthIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DashboardHeader() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).catch((err) => {
      console.log(err);
    });
  };

  return (
    <header>
      <div className="container mx-auto">
        <div className="w-full flex flex-row items-center justify-end py-2">
          <Button
            disabled={i18n.language === "en"}
            className={`capitalize text-black underline text-xs text-black"}`}
            variant="link"
            onClick={() => changeLanguage("en")}
          >
            {t("header.menu.en")}
          </Button>
          <Earth size={20} className="stroke-red-500"></Earth>
          <Button
            disabled={i18n.language === "fr"}
            className={`capitalize text-black underline text-xs text-black"}`}
            variant="link"
            onClick={() => changeLanguage("fr")}
          >
            {t("header.menu.fr")}
          </Button>
        </div>
      </div>
    </header>
  );
}
