import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.screenY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-40 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 py-3 shadow-xs backdrop-blur-md" : "py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-primary flex items-center text-xl font-bold">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Aurora</span> Portfolio
          </span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
