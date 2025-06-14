import HomeSection1 from "./Section1";
import HomeSection2 from "./Section2";
import HomeSection3 from "./Section3";
import HomeSection4 from "./Section4";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

function Home() {
  useSmoothScroll();
  return (
    <>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
    </>
  );
}

export default Home;
