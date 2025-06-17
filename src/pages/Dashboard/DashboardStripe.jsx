import React from "react";
import { StripeDashboardButton } from "@/components/myButtons/StripeDashboardButton";
import { SectionCards } from "@/components/section-cards";

function DashboardStripe() {
  const test = [
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
    {
      fullName: "Sebastián Moreno Villalobos",
      price: 1000,
      divisa: "€",
      fecha: "12/07/2005",
    },
  ];
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="p-8 max-w-255 self-center">
            <h1 className="font-bold text-[28px] 3xl:text-4xl mb-5 text-center">
              Historial de Pagos
            </h1>
            <p className="mb-5">
              Bienvenido a tu Historial de Pagos, donde podrás consultar de un
              vistazo las 30 transacciones más recientes realizadas desde tu
              cuenta. Aquí verás el importe total de cada operación, la fecha en
              que se realizó el último abono y el nombre del beneficiario, todo
              presentado de forma ordenada para que mantengas un seguimiento
              claro y eficiente de tu actividad financiera.
              <br /><br />
              Si necesitas profundizar en datos más avanzados como revisar el
              detalle completo de transferencias, gestionar tus números de
              cuenta IBAN o generar reportes personalizados haz clic en el
              botón “Ver panel avanzado”. Desde ahí accederás a
              herramientas profesionales que te permitirán configurar y
              supervisar cada aspecto de tus pagos.
            </p>
            <StripeDashboardButton className="3xl:px-2 4xl:px-2.5 4xl:py-2">
              Panel de Control Avanzado
            </StripeDashboardButton>
          </div>
          <SectionCards data={test} />
        </div>
      </div>
    </div>
  );
}

export default DashboardStripe;
