import "../App.css";
import React, { useEffect } from "react";
import DashboardCard from "@/components/DashboardCard.jsx";
import {
  Building,
  NotebookTabs,
  UserPlus,
  Activity,
  Calendar,
} from "lucide-react";
import { fetchPropertyStats } from "@/api/PropertyService.js";
import { fetchUsersStats } from "@/api/UserService.js";
import { useTranslation } from "react-i18next";
import { fetchContactStats } from "@/api/ContactsService.js";
import { fetchInquiryStats } from "@/api/InquiryService.js";
import { fetchAppointmentStats } from "@/api/AppointmentsService.js";
import PropertyDashboardCard from "@/components/PropertyDashboardCard.jsx";

export default function Dashboard() {
  const [propertyStats, setPropertyStats] = React.useState({});
  const [userStats, setUserStats] = React.useState({});
  const [contactStats, setContactStats] = React.useState({});
  const [inquiryStats, setInquiryStats] = React.useState({});
  const [appointmentStats, setAppointmentStats] = React.useState({});
  const { t } = useTranslation("dashboard");

  useEffect(() => {
    const getPropertyStats = async () => {
      return await fetchPropertyStats();
    };

    getPropertyStats().then((data) => setPropertyStats(data));
  }, []);

  useEffect(() => {
    const getUserStats = async () => {
      return await fetchUsersStats();
    };
    getUserStats().then((data) => setUserStats(data));
  }, []);

  useEffect(() => {
    const getContactStats = async () => {
      return await fetchContactStats();
    };
    getContactStats().then((data) => setContactStats(data));
  }, []);

  useEffect(() => {
    const getInquiryStats = async () => {
      return await fetchInquiryStats();
    };
    getInquiryStats().then((data) => setInquiryStats(data));
  }, []);

  useEffect(() => {
    const getAppointmentStats = async () => {
      return await fetchAppointmentStats();
    };
    getAppointmentStats().then((data) => setAppointmentStats(data));
  }, []);

  function getDaysBetweenDates(startDate, endDate) {
    const start = startDate ? new Date(startDate) : new Date();
    start.setHours(0, 0, 0, 0);

    const end = endDate ? new Date(endDate) : new Date();
    end.setHours(0, 0, 0, 0);

    return Math.round((end - start) / (1000 * 60 * 60 * 24));
  }

  return (
    <div className="container mx-auto space-y-8 py-20">
      <h2 className="font-black text-xl md:text-2xl lg:text-4xl uppercase">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-5 gap-4">
        {propertyStats.length !== 0 && (
          <DashboardCard
            title={t("stats.property.title")}
            value={propertyStats.count}
            description={getDaysBetweenDates(
              propertyStats.start,
              propertyStats.end,
            )}
            icon={<Building color="#c21d03" size={34} />}
          />
        )}
        <DashboardCard
          title={t("stats.user.title")}
          value={userStats.count}
          description={getDaysBetweenDates(userStats.start, userStats.end)}
          icon={<UserPlus color="#c21d03" size={34} />}
        />
        <DashboardCard
          title={t("stats.contact.title")}
          value={contactStats.count}
          description={getDaysBetweenDates(
            contactStats.start,
            contactStats.end,
          )}
          icon={<NotebookTabs color="#c21d03" size={34} />}
        />
        <DashboardCard
          title={t("stats.inquiry.title")}
          value={inquiryStats.count}
          description={getDaysBetweenDates(
            inquiryStats.start,
            inquiryStats.end,
          )}
          icon={<Activity color="#c21d03" size={34} />}
        />
        <DashboardCard
          title={t("stats.appointment.title")}
          value={appointmentStats.count}
          description={getDaysBetweenDates(
            appointmentStats.start,
            appointmentStats.end,
          )}
          icon={<Calendar color="#c21d03" size={34} />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-33 gap-4">
        <PropertyDashboardCard />
      </div>
    </div>
  );
}
