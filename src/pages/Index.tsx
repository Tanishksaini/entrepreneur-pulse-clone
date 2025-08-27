import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ConferenceSection } from "@/components/ConferenceSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ConferenceSection />
        <SpeakersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
