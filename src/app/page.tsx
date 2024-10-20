import Blessing from "@/sections/blessing";
import Gallery from "@/sections/gallery";
import Intro from "@/sections/intro";
import Invitations from "@/sections/invitations";
import Itinerary from "@/sections/Itinerary";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-4xl pt-20 md:pt-28 px-4">
      <Invitations />
      <Itinerary/>
      <Gallery />
      <Blessing />
    </main>
  );
}
