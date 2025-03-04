import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
     <div className="w-full">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
     </div>
    </main>
  );
}
