import NavBar from "@/components/NavBar";
import StarBackground from "@/components/StarBackground";
import ThemeToggle from "@/components/ThemeToggle";

function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <NavBar />
    </div>
  );
}

export default Home;
