import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Globe } from "lucide-react";

export const SpeakersSection = () => {
  const speakers = [
    {
      name: "Priya Sharma",
      title: "CEO, TechVentures India",
      company: "Leading Fintech Company", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=400&h=400&fit=crop&crop=face",
      bio: "Pioneer in Indian fintech with 15+ years experience building scalable solutions",
      expertise: ["Fintech", "Scaling", "Leadership"]
    },
    {
      name: "Rajesh Gupta",
      title: "Founder & Managing Partner",
      company: "Velocity Ventures",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Serial entrepreneur and investor, backed 100+ startups across Southeast Asia",
      expertise: ["Investment", "Startups", "Strategy"]
    },
    {
      name: "Dr. Kavita Patel",
      title: "Chief Innovation Officer",
      company: "Global Tech Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face", 
      bio: "Leading AI researcher and entrepreneur, PhD from IIT Delhi",
      expertise: ["AI/ML", "Innovation", "Research"]
    },
    {
      name: "Arjun Mehta",
      title: "Co-founder",
      company: "SustainableEarth",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Environmental entrepreneur focused on sustainable business solutions",
      expertise: ["Sustainability", "ESG", "Impact"]
    },
    {
      name: "Neha Singh",
      title: "VP of Product",
      company: "Meta India",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Product leader with experience building platforms for 1B+ users",
      expertise: ["Product", "Growth", "Tech"]
    },
    {
      name: "Vikram Choudhary",
      title: "Managing Director",
      company: "Accel Partners",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      bio: "Leading VC investor, focused on early-stage B2B and enterprise startups",
      expertise: ["Venture Capital", "B2B", "Enterprise"]
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-28 h-28 bg-primary/10 rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            🎤 Meet Our Speakers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry <span className="text-gradient">Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from the best minds in entrepreneurship, technology, and business. 
            Our speakers have built companies, raised billions, and transformed industries.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <Card key={index} className="card-gradient border-0 group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                {/* Speaker Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge variant="outline" className="bg-background text-xs">
                      Speaker
                    </Badge>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{speaker.name}</h3>
                  <div className="text-primary font-medium text-sm">{speaker.title}</div>
                  <div className="text-muted-foreground text-sm">{speaker.company}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {speaker.bio}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 justify-center pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                      <Linkedin className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                      <Twitter className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                      <Globe className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Total Speakers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Industries</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card-gradient rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to Speak at EI2025?</h3>
            <p className="text-muted-foreground mb-6">
              Share your expertise with thousands of entrepreneurs and industry leaders.
              Applications for speaker slots are now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="coral" size="lg">
                Apply to Speak
              </Button>
              <Button variant="outline" size="lg">
                View All Speakers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};