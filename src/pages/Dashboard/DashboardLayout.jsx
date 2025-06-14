import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      }}
      className="pt-35 md:pt-40"
    >
      <AppSidebar variant="inset" className="pt-45" />
      <SidebarInset className="bg-gray-300">
        <SiteHeader />
        {/* Aqui comienza el contenido central */}
          <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
