import "../App.css";
import Header from "@/components/Header.jsx";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import {
  Clock,
  Mail,
  Calendar,
  File,
  Phone,
  Building,
  User,
} from "lucide-react";
import Footer from "@/components/Footer.jsx";
import ContactForm from "@/components/ContactForm.jsx";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button.jsx";

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <div className="bg-white">
      <Header IsTransparent={false} />
      <section className="container mx-auto py-20">
        <div className="flex flex-col items-center justify-between gap-6 w-full px-4 md:px-0">
          <h2 className="font-black text-2xl md:text-3xl lg:text-4xl uppercase text-center">
            {t("title")}
          </h2>
          <p className="text-justify   text-base lg:text-xl">
            {t("description")}
          </p>
          <div className="flex flex-col  md:flex-row items-stretch justify-between w-full md:w-auto  gap-6   md:gap-12">
            <Button
              className="text-base  bg-gradient-to-br border-transparent from-[#c21d03] to-[#fd5732] rounded-none h-11 w-full md:w-auto"
              asChild={true}
            >
              <Link>
                <Calendar />
                {t("meeting")}
              </Link>
            </Button>
            <Button
              className="text-base rounded-none h-11 w-full md:w-auto"
              asChild={true}
            >
              <Link>
                <File />
                {t("formular")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto py-20 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-20 px-2">
            <ContactForm />
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 items-start justify-between gap-4">
              <Card className="rounded-none w-ful h-full col-span-full">
                <CardHeader className="space-y-4">
                  <User color="#ef4444" size={32} />
                  <CardTitle className="text-xl font-medium capitalize">
                    {t("agentRole")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p className="text-xl text-black font-light capitalize leading-tight">
                      {t("personTitle")} glen egbide
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-none w-ful h-full">
                <CardHeader className="space-y-4">
                  <Building color="#ef4444" size={32} />
                  <CardTitle className="text-xl font-medium capitalize">
                    {t("office")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p className="text-xl text-black font-light">
                      La Voie-Creuse 3C, 1202 Genève
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-none w-full h-full">
                <CardHeader className="space-y-4">
                  <Phone color="#ef4444" size={32} />
                  <CardTitle className="text-xl font-medium capitalize">
                    {t("phone")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p className="text-xl text-black font-light">
                      +41 76 452 10 90
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-none w-full  h-full">
                <CardHeader className="space-y-4">
                  <Mail color="#ef4444" size={32} />
                  <CardTitle className="text-xl font-medium capitalize">
                    {t("email")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p className="text-xl text-black font-light">
                      info@laregieflorissante.ch
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-none w-full  h-full">
                <CardHeader className="space-y-4">
                  <Clock color="#ef4444" size={32} />
                  <CardTitle className="text-xl font-medium capitalize">
                    {t("hour")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p className="text-xl text-black font-light">
                      {t("openingWeekday")} <br /> {t("openingWeekend")}
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
