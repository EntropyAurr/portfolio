import { Briefcase, Code, User } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="md:4xl mb-12 text-center text-3xl font-bold">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer & Technology Knowledge</h3>

            <p className="text-muted-foreground">I have experience in web development, specialize in creating responsive, accessible, and performant web applications using modern technologies.</p>

            <p className="text-muted-foreground">I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.</p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>

              <a href="/CV-Âu Cao Thùy Dương-Chemical Engineer.pdf" className="border-primary text-primary hover:bg-primary/10 rounded-full border px-6 py-2 transition-colors duration-300" target="_blank">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Code className="text-primary h-6 w-6" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <User className="text-primary h-6 w-6" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold"> UI/UX Design</h4>
                  <p className="text-muted-foreground"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold"> Project Management</h4>
                  <p className="text-muted-foreground"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
