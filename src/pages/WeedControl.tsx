import Header from "@/components/Header";
import WeedDetectionModule from "@/components/WeedDetectionModule";

const WeedControl = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Weed Control System</h1>
          <p className="text-muted-foreground">AI-powered weed detection and organic treatment recommendations</p>
        </div>
        <WeedDetectionModule />
      </div>
    </div>
  );
};

export default WeedControl;