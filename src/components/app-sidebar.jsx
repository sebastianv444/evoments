import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconListDetails,
  IconReport,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/clerk-react";
import { useAdmin } from "@/context/AdminRol.context";

export function AppSidebar({ ...props }) {
  const { user } = useUser();
  const { isLoading, isAdmin } = useAdmin();

  // Base del menú
  const navMain = [
    {
      title: "General",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Tus Eventos",
      url: "mis-eventos",
      icon: IconListDetails,
    },
    {
      title: "Historial de Pagos",
      url: "historial-pagos",
      icon: IconChartBar,
    },
  ];

  // Si no carga aún, mostramos placeholder
  if (isLoading) {
    return (
      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarContent className="bg-[#022880] text-white">
          <p className="p-4">Cargando menú…</p>
        </SidebarContent>
      </Sidebar>
    );
  }

  // Añadimos la opción Admin sólo si corresponde
  if (isAdmin) {
    navMain.push({
      title: "Admin",
      url: "admin",
      icon: IconUsers,
    });
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarContent className="bg-[#022880] text-white">
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-[#022880] text-white">
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
