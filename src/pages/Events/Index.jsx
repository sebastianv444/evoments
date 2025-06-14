import React from "react";
import EventSection1 from "./Section1";
import EventSection2 from "./Section2";
import { useLenis } from "@/hooks/useLenis";

export default function Events() {
  useLenis(); // scroll suave + ScrollTrigger proxy
  
  return (
    <div>
      <EventSection1 />
      <EventSection2 />
    </div>
  );
}
