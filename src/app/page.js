import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
     <div className="w-full">
      <Hero />
     </div>
    </main>
  );
}
