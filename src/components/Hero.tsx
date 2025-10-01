import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-sunrise.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-radiance bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Inherit the Light
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 max-w-3xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Illuminating Your Path Forward with Wisdom, Hope, and Purpose
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            onClick={scrollToContact}
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 backdrop-blur-sm transition-all duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
