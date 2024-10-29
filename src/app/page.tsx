import Blessing from "@/sections/blessing";
import Invitations from "@/sections/invitations";
import Itinerary from "@/sections/itinerary";
import Venue from "@/sections/venue";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-[1200px] w-full mx-auto pt-8 sm:pt-10 md:pt-16 lg:pt-24 px-4 xl:pr-56 xl:pl-56">
      <section className="mb-10 sm:mb-12 md:mb-16 w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <Invitations />
      </section>
      <section className="mb-10 sm:mb-12 md:mb-16 w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <Itinerary />
      </section>
      <section className="mb-10 sm:mb-12 md:mb-16 w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <Blessing />
      </section>
      <section className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <Venue />
      </section>
    </main>
  );
}
