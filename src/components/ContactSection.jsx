import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false); // back to default after successfully submit the form
    }, 1500);
  }

  return (
    <section id="contact" className="bg-secondary/30 relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="md-4 text-center text-3xl font-bold md:text-4xl">
          Get in <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, itaque?</p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>

            <div className="justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Mail className="text-primary h-6 w-6" />
                </div>

                <div>
                  <h4 className="font-medium">Email</h4>

                  <a href="mailto:auduong.301@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    auduong.301@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Phone className="text-primary h-6 w-6" />
                </div>

                <div>
                  <h4 className="font-medium">Phone</h4>

                  <a href="tel:+84367217652" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    (+84) 367-217-652
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <MapPin className="text-primary h-6 w-6" />
                </div>

                <div>
                  <h4 className="font-medium">Location</h4>

                  <p className="text-muted-foreground hover:text-primary transition-colors duration-300">Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-xs">
            <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Your Name
                </label>
                <input type="text" id="name" required className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden" placeholder="Enter your name..." />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Your Email
                </label>
                <input type="email" id="email" required className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden" placeholder="Enter your email..." />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Your Message
                </label>
                <textarea type="text" id="message" required className="border-input bg-background focus:ring-primary w-full resize-none rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden" placeholder="Enter your name..."></textarea>
              </div>

              <button type="submit" className={cn("cosmic-button flex w-full items-center justify-center gap-2")} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
