import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import data from "@/app/dashboard/data.json";
import RevealOnScroll from "@/components/framerMotion/RevealOnScroll";

function DashboardHome() {
  return (
    <RevealOnScroll once={false} amount={0.2}>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            {/* Le puse el home = true para que se muestre distinto al de 
            historial de pagos, ya que da un error si no se muestran las 4
            tarjetas por como tienen los estilos y el responsive de shadcn */}
            <SectionCards home={true} />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default DashboardHome;
