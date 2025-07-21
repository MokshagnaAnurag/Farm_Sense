import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WeedDetectionModule from "@/components/WeedDetectionModule";
import IoTDashboard from "@/components/IoTDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WeedDetectionModule />
      <IoTDashboard />
    </div>
  );
};

export default Index;
