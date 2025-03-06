import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Approach from "@/components/Approach";
import Blogs from "@/components/Blog";

export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Blogs />
        <Approach />
      </div>
    </main>
  );
}
