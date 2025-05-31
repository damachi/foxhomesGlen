import "../App.css";
import DashboardHeader from "@/components/DashboradNav.jsx";
import SideBar from "@/components/SideBar.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.jsx";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <SideBar />
      <main className="w-full">
        <div className="flex flex-row items-center justify-between  border-b border-black flex-grow">
          <SidebarTrigger />
          <DashboardHeader />
        </div>
        <section className="flex-1 overflow-auto p-4">
          {Outlet && <Outlet />}
          {children && children}
        </section>
      </main>
    </SidebarProvider>
  );
}
