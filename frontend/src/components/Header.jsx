import "../App.css";
import Logo from "../assets/logo.png";
import { Button } from "@/components/ui/button.jsx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card.jsx";
import { Earth, Menu } from "lucide-react";
import { Heart } from "lucide-react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RoseIcon from "../assets/rose.svg";

// eslint-disable-next-line react/prop-types
export default function Header({ IsTransparent }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).catch((err) => {
      console.log(err);
    });
  };

  const textColor = IsTransparent ? "text-white" : "text-black";

  return (
    <header
      className={`border-b   ${IsTransparent ? "bg-transparent border-gray-200" : "bg-white border-black"}`}
    >
      <div className="container mx-auto py-4 px-2">
        <div className="w-full flex flex-row items-center justify-between py-2">
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Button
                  className={`bg-inherit  rounded-none ${IsTransparent ? "text-white" : "text-black border-black"}`}
                  variant="outline"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="border-b p-4">
                    <div className="flex flex-row items-start">
                      <img className="w-12" src={RoseIcon} alt="rose icon" />
                      <div className="flex flex-col">
                        <span className="capitalize font-black text-xl lg:text-2xl">
                          Regieflorissante
                        </span>
                        <span className="uppercase text-sm font-light">
                          {t("logo.slogan")}
                        </span>
                      </div>
                    </div>
                  </SheetTitle>
                  <SheetDescription className="space-y-2  md:space-y-4 lg:space-y-8">
                    <div className="flex flex-col items-start justify-between px-0">
                      <div className="flex flex-col items-start justify-between w-full gap-4">
                        <Button
                          className="w-full flex flex-row items-center justify-start hover:bg-gray-100"
                          variant="link"
                          asChild
                        >
                          <Link className="text-base py-4" to="/">
                            <Heart size="64" />
                            Favouris
                          </Link>
                        </Button>
                        <Button
                          className="w-full flex flex-row items-center justify-start hover:bg-gray-100"
                          variant="link"
                          asChild
                        >
                          <Link className="text-base" to="/">
                            <User className="w-32 h-auto" />
                            Login
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <nav className="flex flex-col items-start gap-4 justify-between text-base">
                      <Button
                        className="hover:bg-gray-100 border-b capitalize w-full flex flex-row items-start justify-between rounded-none"
                        variant="link"
                        asChild
                      >
                        <Link className="text-base" to="/listings/renting">
                          {t("header.menu.sale")}
                        </Link>
                      </Button>
                      <Button
                        className="hover:bg-gray-100 capitalize border-b w-full flex flex-row items-center justify-start rounded-none"
                        variant="link"
                        asChild
                      >
                        <Link className="text-base" to="/listings/sale">
                          {t("header.menu.renting")}
                        </Link>
                      </Button>
                      <Button
                        className="hover:bg-gray-100 capitalize border-b w-full flex flex-row items-center justify-start rounded-none"
                        variant="link"
                        asChild
                      >
                        <Link className="text-base" to="/guide">
                          {t("header.menu.guide")}
                        </Link>
                      </Button>
                      <Button
                        className="hover:bg-gray-100 capitalize border-b w-full flex flex-row items-center justify-start rounded-none"
                        variant="link"
                        disabled={true}
                      >
                        <Link className="text-base" to="/contact">
                          {t("header.menu.moving")}
                        </Link>
                      </Button>
                      <Button
                        className="hover:bg-gray-100 capitalize border-b w-full flex flex-row items-center justify-start rounded-none"
                        variant="link"
                        asChild
                      >
                        <Link className="text-base" to="/contact">
                          {t("header.menu.contact")}
                        </Link>
                      </Button>
                    </nav>
                    <div className="py-2 gap-2 flex flex-col items-start justify-between">
                      <div className="text-left">
                        <span className="font-semibold text-black uppercase text-xs">
                          {t("header.mobile-menu.office")}
                        </span>
                        <p className="capitalize text-xs font-light">
                          rue jean-simonet 14
                        </p>
                        <p className="capitalize text-xs font-light">
                          1219 châtelaine, suisse
                        </p>
                      </div>
                      <div className="text-left">
                        <span className="font-semibold text-black uppercase text-xs">
                          {t("header.mobile-menu.email")}
                        </span>
                        <p className="text-xs font-light">
                          info@laregieflorissante.ch
                        </p>
                      </div>
                      <div className="text-left">
                        <span className="font-semibold text-black uppercase text-xs">
                          {t("header.mobile-menu.phone")}
                        </span>
                        <p className="text-xs font-light">0764833317</p>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <Link to="/">
            <div className="hidden lg:flex flex-row items-center">
              <img className="w-12" src={RoseIcon} alt="rose icon" />
              <div className="flex flex-col">
                <span className="font-black  uppercase text-base lg:text-xl text-[#c21d03]">
                  Regieflorissante
                </span>
                <span className={`uppercase text-sm font-light ${textColor}`}>
                  {t("logo.slogan")}
                </span>
              </div>
            </div>
          </Link>
          <nav className="hidden  lg:flex flex-row items-center gap-4 justify-between text-base">
            <Button className="capitalize" variant="link" asChild>
              <Link
                className={`text-base  ${IsTransparent ? "text-white" : "text-black"}`}
                to="/listings/sale"
              >
                {t("header.menu.sale")}
              </Link>
            </Button>
            <Button className="capitalize" variant="link" asChild>
              <Link
                className={`text-base  ${IsTransparent ? "text-white" : "text-black"}`}
                to="/listings/renting"
              >
                {t("header.menu.renting")}
              </Link>
            </Button>
            <Button className="capitalize" variant="link" asChild>
              <Link
                className={`text-base  ${IsTransparent ? "text-white" : "text-black"}`}
                to="/guide"
              >
                {t("header.menu.guide")}
              </Link>
            </Button>
            <Button disabled={true} className="capitalize" variant="link">
              <Link
                className={`text-base  ${IsTransparent ? "text-white" : "text-black"}`}
                to="/moving"
              >
                {t("header.menu.moving")}
              </Link>
            </Button>
            <Button className="capitalize" variant="link" asChild>
              <Link
                className={`text-base  ${IsTransparent ? "text-white" : "text-black"}`}
                to="/contact"
              >
                {t("header.menu.contact")}
              </Link>
            </Button>
          </nav>
          <div className="space-x-4  flex-row hidden xl:flex ">
            <Button
              className={`bg-inherit  ${IsTransparent ? "text-white" : "text-black border border-black"} rounded-sm capitalize`}
              variant="outline"
              disabled={true}
            >
              <Link to="/">{t("header.menu.join")}</Link>
            </Button>
            <Button
              className="rounded-sm bg-gradient-to-br border-transparent from-[#c21d03] to-[#fd5732] text-white capitalize"
              variant="outline"
              disabled={true}
            >
              <Link to="/">{t("header.menu.subscribe")}</Link>
            </Button>
          </div>
          <div className="flex flex-row items-center justify-start">
            <Button
              disabled={i18n.language === "en"}
              className={`capitalize text-black underline text-xs ${IsTransparent ? "text-white" : "text-black"}`}
              variant="link"
              onClick={() => changeLanguage("en")}
            >
              {t("header.menu.en")}
            </Button>
            <Earth size={20} className="stroke-red-500"></Earth>
            <Button
              disabled={i18n.language === "fr"}
              className={`capitalize text-black underline text-xs ${IsTransparent ? "text-white" : "text-black"}`}
              variant="link"
              onClick={() => changeLanguage("fr")}
            >
              {t("header.menu.fr")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
