import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top notification bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        <span className="font-medium">⚡ Official Summit of IIT Alumni </span>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
          <span className="text-xs">Follow Us:</span>
          <div className="flex gap-2">
            <Facebook className="w-4 h-4 hover:scale-110 transition-transform cursor-pointer" />
            <Twitter className="w-4 h-4 hover:scale-110 transition-transform cursor-pointer" />
            <Instagram className="w-4 h-4 hover:scale-110 transition-transform cursor-pointer" />
            <Linkedin className="w-4 h-4 hover:scale-110 transition-transform cursor-pointer" />
            <Youtube className="w-4 h-4 hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img  
                src="/logo.jpg" 
                alt="Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="font-bold text-lg">IIT Summit</span>
            </div>

            {/* Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="flex gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">
                    Conference <ChevronDown className="w-4 h-4 ml-1" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 card-gradient">
                      <div className="grid gap-3">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Conference Registration</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Register for the main conference event
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Conference Overview</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about the conference agenda
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Speakers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Meet our keynote speakers
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">
                    Exhibit <ChevronDown className="w-4 h-4 ml-1" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 card-gradient">
                      <div className="grid gap-3">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Exhibition Overview</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore exhibition opportunities
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Why Exhibit</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Benefits of exhibiting with us
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Floor Plan</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Download exhibition floor plan
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">
                    Awards <ChevronDown className="w-4 h-4 ml-1" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4 card-gradient">
                      <div className="grid gap-3">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Nominate Here</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Submit your award nominations
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Award Overview</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our awards program
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="nav" className="nav-link">Startup Kickoff</Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">
                    Previous Shows <ChevronDown className="w-4 h-4 ml-1" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4 card-gradient">
                      <div className="grid gap-3">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">2024 Highlights</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            View last year's event highlights
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Past Speakers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Previous conference speakers
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                Explore More
              </Button>
              <Button variant="tickets" size="lg" className="hidden sm:inline-flex">
                🎟️ Get Tickets
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};