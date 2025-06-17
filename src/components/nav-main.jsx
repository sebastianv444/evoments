import { IconCirclePlusFilled } from "@tabler/icons-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AiOutlineLoading } from "react-icons/ai";

export function NavMain({ items }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Estado de loading solo para "Crear Evento"
  const [loadingCreate, setLoadingCreate] = useState(false);

  // Al cambiar de ruta, reseteamos el loading
  useEffect(() => {
    setLoadingCreate(false);
  }, [location.pathname]);

  // Manejador para Crear Evento
  const handleCreate = () => {
    if (loadingCreate) return;
    setLoadingCreate(true);
    setTimeout(() => {
      navigate("/crear-evento");
    }, 280);
  };

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              onClick={handleCreate} // solo aquí navegamos
              disabled={loadingCreate}
              tooltip="Quick Create"
              className={twMerge(
                "min-w-8 duration-200 ease-linear",
                !loadingCreate
                  ? "bg-[#125EFC] cursor-pointer text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
                  : "bg-gray-400 cursor-not-allowed"
              )}
            >
              {loadingCreate ? (
                <AiOutlineLoading className="animate-spin mr-2 h-5 w-5" />
              ) : (
                <IconCirclePlusFilled className="mr-2 h-5 w-5" />
              )}
              {loadingCreate ? "Cargando..." : "Crear Evento"}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <Link to={item.url} key={item.title}>
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className="cursor-pointer"
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
