import "../App.css";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import RoseIcon from "@/assets/rose.svg";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="border-t bg-[#f1f1f1] px-2">
      <div className="container mx-auto py-20 space-y-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex flex-col items-start justify-between gap-8">
            <h2 className="font-black text-xl md:text-2xl lg:text-3xl uppercase leading-relaxed w-full text-left md:text-left">
              {t("footer.title")}
            </h2>
            <p className="text-justify">{t("footer.description")}</p>
            <div className="flex flex-row items-center justify-start gap-2">
              <Button
                className="rounded-sm bg-gradient-to-br border-transparent from-[#c21d03] to-[#fd5732] text-white"
                asChild={true}
              >
                <Link to={`/`}> {t("footer.subscription")}</Link>
              </Button>
              <Button className="rounded-none" variant="outline">
                <Link to={"/contact"}> {t("footer.contact")}</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full lg:w-1/2">
            <ul className="flex flex-col items-start justify-between">
              <li>
                <Button className="capitalize" variant="ghost" asChild>
                  <Link to="/"> {t("header.menu.home")}</Link>
                </Button>
              </li>
              <li>
                <Button className="capitalize" variant="ghost" asChild>
                  <Link to="/">{t("header.menu.sale")}</Link>
                </Button>
              </li>
              <li>
                <Button className="capitalize" variant="ghost" asChild>
                  <Link to="/">{t("header.menu.renting")}</Link>
                </Button>
              </li>
              <li>
                <Button className="capitalize" variant="ghost" asChild>
                  <Link to="/">{t("header.menu.service")}</Link>
                </Button>
              </li>
              <li>
                <Button className="capitalize" variant="ghost" asChild>
                  <Link to="/">{t("header.menu.guide")}</Link>
                </Button>
              </li>
            </ul>
            <ul className="flex flex-col items-start justify-between">
              <li>
                <Button className="capitalize" variant="ghost" asChild>
                  <Link to="/">{t("header.menu.testimony")}</Link>
                </Button>
              </li>
              <li>
                <Button className="uppercase" variant="ghost" asChild>
                  <Link to="/">{t("footer.menu.faq")}</Link>
                </Button>
              </li>
              <li>
                <Button className="capitalize" variant="ghost" asChild>
                  <Link to="/">{t("footer.menu.privacy")}</Link>
                </Button>
              </li>
              <li>
                <Button className="capitalize" variant="ghost" asChild>
                  <Link to="/">{t("footer.menu.terms")}</Link>
                </Button>
              </li>
              <li>
                <Button className="capitalize" variant="ghost" asChild>
                  <Link to="/">Contact Us</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
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
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
            <p className="text-justify text-sm">{t("footer.copyright")}.</p>
            <div className="flex flex-row-items-center justify-between gap-4">
              <Linkedin />
              <Snapchat />
              <Twitter />
              <Facebook />
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Linkedin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-8 h-auto"
    >
      <path
        fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
      />
    </svg>
  );
}

function Twitter() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-auto"
    >
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  );
}

function Facebook() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 42"
      className="w-6 h-auto"
    >
      <path
        fill="currentColor"
        d="M28.08 6.51c.29-.01 1.109-.03 1.42-.01c1.12 0 2.84-.1 4 0v5h-4c-1.46 0-2 .35-2 2v4h5v5h-5v14h-5v-14h-4v-5h4l-.061-4.42c0-3.061.621-4.92 3.15-6.02c.651-.28 1.641-.53 2.491-.55zM.5 1.5v39h39v-39H.5z"
      />
    </svg>
  );
}

function Snapchat() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-auto"
    >
      <path
        fill="currentColor"
        d="M21.973 6.68a6.124 6.124 0 0 0-.098-1.073a4.372 4.372 0 0 0-.406-1.246a4.324 4.324 0 0 0-.832-1.11a4.125 4.125 0 0 0-1.816-1.036a7.36 7.36 0 0 0-1.92-.205L16.898 2H7.099v.01a10.488 10.488 0 0 0-1.101.05a5.243 5.243 0 0 0-1.176.264A4.262 4.262 0 0 0 2.219 5.17a7.338 7.338 0 0 0-.205 1.905l-.006 9.838a9.445 9.445 0 0 0 .09 1.333a4.616 4.616 0 0 0 .41 1.345a4.305 4.305 0 0 0 1.201 1.454a3.903 3.903 0 0 0 1.203.651a6.516 6.516 0 0 0 1.976.29c.42.003.839.014 1.258.012c3.047-.013 6.094.022 9.14-.019a7.19 7.19 0 0 0 1.2-.127a4.06 4.06 0 0 0 2.007-.977a4.162 4.162 0 0 0 1.326-2.212a8.062 8.062 0 0 0 .173-1.75v-.117c0-.046-.017-9.984-.019-10.115Zm-2.676 9.25c-.128.3-.774.548-1.868.717c-.102.016-.146.182-.205.454c-.024.112-.05.222-.083.337a.204.204 0 0 1-.216.162h-.018a1.746 1.746 0 0 1-.31-.04a4.097 4.097 0 0 0-.821-.086a3.637 3.637 0 0 0-.592.05a2.836 2.836 0 0 0-1.123.574a3.257 3.257 0 0 1-1.97.776a2.33 2.33 0 0 1-.112-.003a.854.854 0 0 1-.073.003a3.253 3.253 0 0 1-1.97-.776a2.84 2.84 0 0 0-1.123-.574a3.633 3.633 0 0 0-.592-.05a4.047 4.047 0 0 0-.82.093a1.82 1.82 0 0 1-.311.044a.214.214 0 0 1-.234-.167a4.084 4.084 0 0 1-.083-.34c-.06-.273-.103-.44-.205-.456c-1.094-.168-1.74-.417-1.869-.718a.278.278 0 0 1-.023-.095a.176.176 0 0 1 .147-.183a3.818 3.818 0 0 0 2.296-1.365A5.145 5.145 0 0 0 7.9 13.07l.004-.008a.785.785 0 0 0 .075-.658c-.14-.332-.607-.48-.916-.578a3.27 3.27 0 0 1-.207-.07c-.274-.108-.724-.337-.664-.652a.61.61 0 0 1 .593-.39a.42.42 0 0 1 .18.036a1.796 1.796 0 0 0 .742.196a.621.621 0 0 0 .428-.131q-.012-.219-.027-.438a7.388 7.388 0 0 1 .177-2.951a3.837 3.837 0 0 1 3.562-2.298l.295-.002a3.843 3.843 0 0 1 3.568 2.298a7.398 7.398 0 0 1 .176 2.955l-.003.047l-.023.389a.602.602 0 0 0 .388.13a1.86 1.86 0 0 0 .7-.195a.552.552 0 0 1 .228-.046a.694.694 0 0 1 .261.05l.004.002a.485.485 0 0 1 .367.398c.003.153-.11.381-.669.602c-.057.022-.13.046-.207.07c-.31.098-.776.246-.916.578a.784.784 0 0 0 .074.657l.004.009a4.522 4.522 0 0 0 3.079 2.582a.176.176 0 0 1 .146.183a.28.28 0 0 1-.023.096Z"
      />
    </svg>
  );
}

function Youtube() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 768"
      className="w-6 h-auto"
    >
      <path
        fill="currentColor"
        d="M928 736q-222 32-416 32q-86 0-190-8t-165-16l-61-8q-27-5-47.5-37.5t-30-78.5t-14-86T0 461V307Q0 52 96 32Q318 0 512 0q86 0 190 8t165 16l61 8q29 4 49.5 36.5T1007 148t13 86t4 73v154q0 36-3 73t-12 85t-30 80t-51 37zM693 359L431 199q-11-10-29-5.5T384 208v352q0 11 18 15t29-6l262-160q11-10 11-25t-11-25z"
      />
    </svg>
  );
}
