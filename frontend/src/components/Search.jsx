import "../App.css";
import { Button } from "@/components/ui/button.jsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Search() {
  const { t } = useTranslation("home");
  return (
    <section className="w-full  min-h-screen flex items-center justify-center">
      <div className="container  mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 px-4 lg:px-2">
          <h2 className="font-black text-2xl md:text-3xl lg:text-4xl uppercase text-white">
            {t("hero.title")}
          </h2>
          <p className="text-justify  text-base lg:text-xl text-white">
            {t("hero.description")}
          </p>

          <Button
            asChild={true}
            variant="primary"
            className="text-white bg-gradient-to-l from-[#c21d03] to-[#fd5732] w-full md:max-w-sm capitalize"
          >
            <Link to={"/listings/renting"}>{t("hero.renting")}</Link>
          </Button>

          <Button
            asChild={true}
            variant="primary"
            className="text-white bg-gradient-to-l from-[#c21d03] to-[#fd5732] w-full  md:max-w-sm capitalize"
          >
            <Link to={"/listings/sale"}>{t("hero.sale")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
