import { Card } from "@/components/ui/card";
import { Lightbulb, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Wisdom",
      description: "Sharing timeless insights and knowledge that illuminate the path to understanding and growth."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Fostering a community built on empathy, kindness, and genuine care for one another."
    },
    {
      icon: Users,
      title: "Unity",
      description: "Bringing people together in a shared journey toward enlightenment and purpose."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are dedicated to spreading light, wisdom, and hope in a world that often feels dark. 
            Through community, compassion, and shared purpose, we help individuals discover their 
            inner strength and illuminate the path forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-radiance mb-6 shadow-glow">
                <value.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
