import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function NavBar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={cn("bg-background/20 fixed z-40 w-full", isScrolled ? "py-3 shadow-xs backdrop-blur-2xl" : "py-5", isMenuOpen ? "inset-0" : "")}>
      <div className="container flex items-center justify-between md:justify-around">
        <a href="#hero" className="text-foreground flex items-center text-xl font-bold">
          <span className="relative z-10">
            <span className="text-primary">Aurora</span> Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <a href={item.href} key={item.name} className="text-foreground hover:text-primary transition-colors duration-300">
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}
        <button onClick={() => setIsMenuOpen((open) => !open)} className="text-foreground z-50 mr-10 p-2 md:hidden" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={cn("bg-background/95 fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-md", "transition-all duration-300 md:hidden", isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a href={item.href} key={key} className="text-foreground hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
