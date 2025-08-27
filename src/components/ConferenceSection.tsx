import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Star, Award, Presentation, Network } from "lucide-react";

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
      day: "Day 1",
      date: "March 15, 2025",
      sessions: [
        { time: "9:00 AM", title: "Opening Ceremony & Welcome Address", speaker: "Conference Committee" },
        { time: "10:30 AM", title: "The Future of Indian Startups", speaker: "Leading VCs Panel" },
        { time: "2:00 PM", title: "Digital Transformation in Business", speaker: "Tech Industry Leaders" },
        { time: "4:30 PM", title: "Scaling Your Startup Globally", speaker: "International Experts" }
      ]
    },
    {
      day: "Day 2", 
      date: "March 16, 2025",
      sessions: [
        { time: "9:00 AM", title: "Fintech Revolution in India", speaker: "Financial Industry Panel" },
        { time: "11:30 AM", title: "Sustainable Business Practices", speaker: "ESG Leaders" },
        { time: "2:00 PM", title: "Women in Entrepreneurship", speaker: "Female Founders Panel" },
        { time: "4:30 PM", title: "AI & Machine Learning for Business", speaker: "AI Researchers" }
      ]
    },
    {
      day: "Day 3",
      date: "March 17, 2025", 
      sessions: [
        { time: "9:00 AM", title: "Startup Pitch Competition Finals", speaker: "Selected Startups" },
        { time: "11:30 AM", title: "Investment & Funding Strategies", speaker: "Angel Investors" },
        { time: "2:00 PM", title: "Awards Ceremony", speaker: "Celebrity Chief Guest" },
        { time: "4:30 PM", title: "Closing & Networking Reception", speaker: "All Attendees" }
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
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
            March 15-17, 2025
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conference <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three days of intensive learning, networking, and inspiration. Join us at India's premier 
            entrepreneurship conference featuring world-class speakers, innovative startups, and industry leaders.
          </p>
        </div>

        {/* Conference Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="card-gradient border-0 text-center">
            <CardContent className="pt-6">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Venue</h3>
              <p className="text-sm text-muted-foreground">
                India Expo Mart<br />
                Greater Noida, Delhi NCR
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 text-center">
            <CardContent className="pt-6">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Duration</h3>
              <p className="text-sm text-muted-foreground">
                3 Days<br />
                March 15-17, 2025
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 text-center">
            <CardContent className="pt-6">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Timing</h3>
              <p className="text-sm text-muted-foreground">
                9:00 AM - 6:00 PM<br />
                Daily Sessions
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
          <h3 className="text-3xl font-bold text-center mb-12">Conference Agenda</h3>
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="card-gradient rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Us?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Secure your spot at India's most impactful entrepreneurship conference. 
              Early bird pricing available for limited time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="coral" size="lg" className="text-lg px-8">
                Register Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};