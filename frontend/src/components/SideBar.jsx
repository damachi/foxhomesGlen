import "../App.css";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";
import {
  House,
  Building,
  Users,
  Calendar,
  MessageSquare,
  Settings,
  CirclePlus,
} from "lucide-react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import RoseIcon from "@/assets/rose.svg";
import { useTranslation } from "react-i18next";

export default function SideBar() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const { t } = useTranslation("common");
  const navItems = [
    {
      href: "/dashboard",
      icon: (props) => <House {...props} />,
      label: "Dashboard",
    },
    {
      href: "/dashboard/properties",
      icon: (props) => <Building {...props} />,
      label: "Properties",
    },
    {
      href: "/dashboard",
      icon: (props) => <Users {...props} />,
      label: "Tenants",
    },
    {
      href: "/dashboard",
      icon: (props) => <Calendar {...props} />,
      label: "Appointments",
    },
    {
      href: "/dashboard",
      icon: (props) => <MessageSquare {...props} />,
      label: "Inquires",
    },
    {
      href: "/dashboard",
      icon: (props) => <Settings {...props} />,
      label: "Settings",
    },
  ];

  return (
    <div className="rounded-none bg-gradient-to-br border-transparent from-[#6B389E] to-[#A96E3F] text-white border-black">
      <Sidebar collapsible="icon">
        <SidebarHeader className="w-full">
          <img className="w-12 mx-auto" src={RoseIcon} alt="rose icon" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {navItems.map((item) => {
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={
                        item.label.toLocaleUpperCase() ===
                        activeMenu.toLocaleUpperCase()
                      }
                      onClick={(target) => setActiveMenu(target.current.value)}
                    >
                      <Link
                        to={item.href}
                        className="flex items-center gap-3 rounded-none px-3 py-2 transition-all text-gray-800 hover:text-primary"
                      >
                        <span className="capitalize text-base font-medium">
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
          <Button className="rounded-none" asChild>
            <Link to="#" className="capitalize">
              <CirclePlus className="w-16 h-16" />
              add property
            </Link>
          </Button>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
