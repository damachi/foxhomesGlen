import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath:
        import.meta.env.MODE === "production"
          ? "static/locales/{{lng}}/{{ns}}.json"
          : "/locales/{{lng}}/{{ns}}.json",
    },
    ns: [
      "common",
      "home",
      "property",
      "contact",
      "guide",
      "moving",
      "testimony",
      "404",
    ],
    defaultNS: "common",
  });

export default i18n;
