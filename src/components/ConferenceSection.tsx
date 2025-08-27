import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Star, Award, Presentation, Network } from "lucide-react";
import { motion } from "framer-motion";

export const ConferenceSection = () => {
  const highlights = [
    {
      icon: <Presentation className="w-8 h-8" />,
      title: "Keynote Sessions",
      description: "Industry leaders sharing breakthrough insights",
      count: "50+"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking Opportunities", 
      description: "Connect with entrepreneurs and investors",
      count: "24/7"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Startup Awards",
      description: "Recognize outstanding entrepreneurial achievements",
      count: "15"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Workshop Sessions",
      description: "Hands-on learning from industry experts",
      count: "100+"
    }
  ];

  const agenda = [
    {
      day: "Phase I",
      date: "March 15, 2025",
      sessions: [
        { time: "7:00 AM", title: "Registrations Open", speaker: "Rajasthan-inspired stoles, tote bags, handcrafted notebooks, tea & coffee counters" },
        { time: "9:00 – 10:00 AM ", title: "Opening Ceremony (Main Auditorium)", speaker: "Folk fusion music, inaugural addresses by IIT alumni, Chief Minister, Chief Secretary & Deputy CM. Lamp lighting & curtain-raiser AV: “Rising Rajasthan: Powered by AI, Driven by Community”." },
        { time: "10:00 – 11:00 AM ", title: "Networking Break", speaker: "Chai, coffee, and local savories encouraging informal connections." },
      ]
    },
    {
      day: "Phase II", 
      date: "March 16, 2025",
      sessions: [
        { time: "11:00 – 12:00 PM ", title: "Panel 1: AI in Healthcare", speaker: "Case studies on predictive diagnosis, rural telemedicine, robotic surgeries." },
        { time: "12:15 – 1:15 PM ", title: "Panel 2: Governance & AI", speaker: "Policy frameworks for energy, infrastructure, skilling, and health. Rajasthan as a governance innovation lab." },
        { time: "1:00 – 3:00 PM ", title: "Exhibition 3 + Lunch Networking", speaker: "Rajasthani delicacies and cross-table discussions." },
      ]
    },
    {
      day: "Phase III",
      date: "March 17, 2025", 
      sessions: [
        { time: "3:00 – 4:00 PM", title: "Panel 3: AI & Quantum Computing for Cybersecurity & Energy", speaker: "Debate on AI’s role in combating cyber threats and cutting energy costs." },
        { time: "4:15 – 5:15 PM", title: "Panel 4: AI Smart City & Urban Development", speaker: "Vision for Jaipur, Jodhpur, Udaipur as AI-enabled smart cities." },
        { time: "5:15 PM ", title: "| High Tea with live music.", speaker: "" },
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden dark bg-black">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/10 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <Calendar className="w-4 h-4 mr-2" />
            November 1, 2025
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conference <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This conclave will unite IIT alumni, global tech leaders, policymakers, investors, startups, and students to explore how AI and emerging technologies can reshape governance, business, and society.
          </p>
        </div>

        {/* Conference Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="card-gradient border-0 text-center">
            <CardContent className="pt-6">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Venue</h3>
              <p className="text-sm text-muted-foreground">
                Rajasthan International Centre (RIC)<br />
                Jaipur, Rajasthan
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 text-center">
            <CardContent className="pt-6">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Duration</h3>
              <p className="text-sm text-muted-foreground">
                1 Day<br />
                November 1, 2025
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 text-center">
            <CardContent className="pt-6">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Timing</h3>
              <p className="text-sm text-muted-foreground">
                7:00 AM - 5:15 PM<br />
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 text-center">
            <CardContent className="pt-6">
              <Star className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Registration</h3>
              <p className="text-sm text-muted-foreground">
                Early Bird Available<br />
                Limited Seats
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Conference Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Conference Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{highlight.count}</div>
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Agenda */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Conference Timeline</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {agenda.map((day, dayIndex) => (
              <Card key={dayIndex} className="card-gradient border-0">
                <CardHeader className="text-center">
                  <CardTitle className="text-primary">{day.day}</CardTitle>
                  <CardDescription>{day.date}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="border-l-2 border-primary/20 pl-4 py-2">
                      <div className="text-sm text-primary font-medium">{session.time}</div>
                      <div className="font-semibold text-sm mb-1">{session.title}</div>
                      <div className="text-xs text-muted-foreground">{session.speaker}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Parallel Tracks & Experiences */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Parallel Tracks & Experiences</h3>
          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Presentation className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary">Startup Pitch Arena</h4>
                <p className="text-sm text-muted-foreground mb-1">Conference Hall 2</p>
                <p className="text-muted-foreground">
                  12 startups pitch (30 mins each) to VCs, accelerators, and incubators.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Network className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary">Exhibition Halls 1 & 2</h4>
                <p className="text-muted-foreground">
                  Startup exhibits, sponsor booths, immersive demos, AI experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary">LAN Gaming Arena</h4>
                <p className="text-muted-foreground">
                  Counter Strike, Age of Empires, NFS — hostel nostalgia alive.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary">Garden Playground</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                  <li>Memory Wall – alumni photos and memories</li>
                  <li>Chai Sutra Corners – IIT Delhi’s Sassi Chai, IIT Bombay’s Maddu Mess, and more iconic stalls</li>
                  <li>Table Tennis Matches – casual alumni face-offs</li>
                  <li>Chill Lounge + Open Mic – couches, live discussions, stand-ups</li>
                  <li>AI Photo Pods – Pixar-style instant alumni portraits</li>
                  <li>Beer Garden – craft brews and relaxed conversations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Who Should Attend Section */}
        <section className="py-16 bg-gray-900 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-10 ">Who Should Attend</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-primary">Startups & Entrepreneurs</h3>
                <p className="text-muted-foreground mt-2">
                  Showcase your ideas, pitch to investors, and raise funds.
                </p>
              </div>
              <div className="p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-primary">Investors & VCs</h3>
                <p className="text-muted-foreground mt-2">
                  Access a curated deal flow of innovative AI startups.
                </p>
              </div>
              <div className="p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-primary">Corporates & Policymakers</h3>
                <p className="text-muted-foreground mt-2">
                  Explore AI-led governance frameworks and industry innovation.
                </p>
              </div>
              <div className="p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-primary">Academics & Researchers</h3>
                <p className="text-muted-foreground mt-2">
                  Collaborate with peers and commercialize cutting-edge ideas.
                </p>
              </div>
              <div className="p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition md:col-span-2">
                <h3 className="text-xl font-semibold text-primary">IIT Alumni & Students</h3>
                <p className="text-muted-foreground mt-2">
                  Network, mentor, and relive the IIT experience while embracing AI innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};