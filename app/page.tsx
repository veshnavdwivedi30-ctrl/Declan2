import AnimatedNavBar from "@/components/Navbar";
import Lander from "@/components/Lander"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden">
      <main className="flex min-h-screen w-screen flex-col items-center justify-between py:10 sm:items-start">
       <AnimatedNavBar/>
       <Lander/>
      </main>
    </div>
  );
}
