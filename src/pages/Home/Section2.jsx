import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { getEventsRecent } from "@/services/ticketmaster/requestTicketmaster";
import EventCard from "./EventCard";
import RevealOnScroll from "@/components/framerMotion/RevealOnScroll";

function HomeSection2() {
  const [events, setEvents] = useState({
    count: 0,
    events: [],
  });

  const fetchData = async () => {
    try {
      const res = await getEventsRecent("Madrid", "5", "date,asc");
      console.log("API respuesta:", res);
      setEvents(res);
    } catch (error) {
      console.error("Error en la peticion:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* console.log(events); */

  return (
    <section
      className="h-[167vh] 2xl:h-[130vh] 3xl:h-[110vh] bg-[#24274f] flex items-center 
    justify-center overflow-hidden flex-col text-white"
    >
      <RevealOnScroll once={false} amount={0.2}>
        <h1 className="text-4xl 2xl:text-[42px] 3xl:text-[50px] mb-21 font-bold text-center">
          <span className="text-[#027ECF]">Eventos</span>
          <span
            className="text-[#027ECF] text-7xl 3xl:text-8xl font-[300] relative 
        top-[27px] right-[8px]"
          >
            /
          </span>
          <span className="relative top-7.5 right-4">Destacados</span>
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-100 2xl:max-w-[1250px] 3xl:max-w-[1550px] p-2"
        >
          <CarouselContent className="ml-1">
            {events.events.map((event, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 md:pl-7 p-4 md:p-8"
              >
                <EventCard event={event} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent" />
          <CarouselNext className="bg-transparent" />
        </Carousel>
        <br />
      </RevealOnScroll>
    </section>
  );
}

export default HomeSection2;
