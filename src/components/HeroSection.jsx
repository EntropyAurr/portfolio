import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <div className="z-10 container mx-auto max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-center text-3xl font-bold tracking-tight md:text-5xl">
            <span className="animate-fade-in opacity-0"> Hi, I'm</span>
            <span className="text-gradient animate-fade-in-delay-1 opacity-0"> Au</span>
            <span className="text-primary animate-fade-in-delay-2 opacity-0"> Duong</span>
          </h1>

          <div className="text-muted-foreground animate-fade-in-delay-3 mx-auto max-w-2xl space-y-2 text-lg opacity-0 md:text-xl">
            <p>I’m a self-taught Developer with an engineering background, driven by my greatest passion: creating things from imagination.</p>
            <p>Technology gives me the freedom to transform ideas into reality, and I embrace every challenge as part of the journey to bring my visions to life.</p>
          </div>

          <div className="animate-fade-in-delay-4 pt-4 text-center opacity-0">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform animate-bounce flex-col items-center">
        <span className="text-muted-foreground mb-2 text-sm"> Scroll </span>
        <ArrowDown className="text-primary h-5 w-5" />
      </div>
    </section>
  );
}

export default HeroSection;
