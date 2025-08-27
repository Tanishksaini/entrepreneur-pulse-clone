import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { title: "Conference", href: "#conference" },
    { title: "Speakers", href: "#speakers" },
    { title: "Agenda", href: "#agenda" },
    { title: "Registration", href: "#registration" },
    { title: "Venue", href: "#venue" },
    { title: "Sponsors", href: "#sponsors" }
  ];

  const exhibitLinks = [
    { title: "Exhibition Overview", href: "#exhibition" },
    { title: "Why Exhibit", href: "#why-exhibit" },
    { title: "Floor Plan", href: "#floor-plan" },
    { title: "Pricing", href: "#pricing" },
    { title: "Exhibitor List", href: "#exhibitors" },
    { title: "Partnership", href: "#partnership" }
  ];

  const awardLinks = [
    { title: "Award Categories", href: "#awards" },
    { title: "Nomination Process", href: "#nomination" },
    { title: "Jury Panel", href: "#jury" },
    { title: "Past Winners", href: "#winners" },
    { title: "Award Ceremony", href: "#ceremony" }
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "info@entrepreneurindia.com" },
    { icon: <Phone className="w-4 h-4" />, text: "+91 98765 43210" },
    { icon: <MapPin className="w-4 h-4" />, text: "India Expo Mart, Greater Noida" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-border">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-8">
              Get the latest updates about speakers, agenda, and exclusive offers for Entrepreneur India 2025.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button variant="coral" className="px-6">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-3xl font-bold mb-2">
                <span className="text-foreground">Entrepreneur</span>
                <div className="text-sm text-muted-foreground font-normal">India 2025</div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                India's premier entrepreneurship summit bringing together the brightest minds 
                in business, technology, and innovation. Join us for three days of learning, 
                networking, and inspiration.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="text-primary">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer group">
                <Facebook className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer group">
                <Twitter className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer group">
                <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer group">
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer group">
                <Youtube className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Conference</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Exhibit Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Exhibition</h4>
            <ul className="space-y-3">
              {exhibitLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Award Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Awards</h4>
            <ul className="space-y-3">
              {awardLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Entrepreneur India. All rights reserved. Official Licensee of Entrepreneur USA.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};