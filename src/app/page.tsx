import Intro from "@/components/intro";
import Image from "next/image";

export default function Home() {
  return (
   <main className="flex flex-col items-center text-4xl pt-20 md:pt-28 px-4">
    <Intro />
   </main>
  );
}
