import EventCard2 from "./EventCard2";

function Section2Content() {
  const eventTest = {
    title: "Concierto",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ea ex repellendus cumque maxime similique, atque magnam, soluta numquam eius quos voluptas modi, eos amet eveniet debitis distinctio iste cum!",
    image: "/img-events/eventsBackgroundSection2.jpg",
    fecha: "18/06/2025"
  };
  return (
    <section
      className="relative -mt-[305px] 2xl:-mt-[250px] 3xl:-mt-[408px] 4xl:-mt-[550px] 
        overflow-hidden z-50 w-full bg-[#181a28] py-5 px-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 4xl:grid-cols-5 4xl:gap-6 4xl:pl-3">
        <EventCard2 event={eventTest} />
        <EventCard2 event={eventTest} />
        <EventCard2 event={eventTest} />
        <EventCard2 event={eventTest} />
        <EventCard2 event={eventTest} />
      </div>
    </section>
  );
}

export default Section2Content;
