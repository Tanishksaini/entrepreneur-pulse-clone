import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Circle, Zap } from "lucide-react";
import heroImage from "@/assets/hero-conference.jpg";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating X marks */}
        <X 
          className="floating-element text-primary w-8 h-8 top-20 left-20 opacity-60" 
          style={{ animationDelay: '0s' }}
        />
        <X 
          className="floating-element text-primary w-6 h-6 top-40 right-32 opacity-40" 
          style={{ animationDelay: '2s' }}
        />
        <X 
          className="floating-element text-primary w-10 h-10 bottom-32 left-16 opacity-50" 
          style={{ animationDelay: '4s' }}
        />

        {/* Floating Circles */}
        <Circle 
          className="floating-element text-primary w-12 h-12 top-32 right-20 opacity-30" 
          style={{ animationDelay: '1s' }}
        />
        <Circle 
          className="floating-element text-primary w-8 h-8 bottom-40 right-40 opacity-50" 
          style={{ animationDelay: '3s' }}
        />

        {/* Floating Zap icons */}
        <Zap 
          className="floating-element text-primary w-6 h-6 top-60 left-1/3 opacity-40" 
          style={{ animationDelay: '1.5s' }}
        />

        {/* Wavy line SVG */}
        <svg 
          className="floating-element w-32 h-16 bottom-20 right-20 text-primary opacity-30"
          style={{ animationDelay: '2.5s' }}
          viewBox="0 0 100 50"
          fill="none"
        >
          <path 
            d="M10 25 Q30 10 50 25 T90 25" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-gradient">Entrepreneur</span>
              <br />
              <span className="text-foreground">India 2025</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground font-medium">
              The Ultimate Entrepreneurship Summit
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Join thousands of entrepreneurs, investors, and thought leaders at India's most prestigious 
            business conference. Network, learn, and grow your venture to the next level.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="coral" size="lg" className="text-lg px-8 py-4">
              🎟️ Get Your Tickets
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              📋 Conference Agenda
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Speakers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Exhibitors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Ticket CTA - Fixed position */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <Button variant="tickets" className="rotate-90 origin-center whitespace-nowrap">
          EI2025 TICKETS
        </Button>
      </div>
    </section>
  );
};