import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Camera, 
  Thermometer, 
  FileText, 
  TrendingUp, 
  Shield, 
  Smartphone,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Image Recognition",
    description: "Upload field photos for instant weed, pest, and disease identification using advanced machine learning models.",
    color: "text-primary"
  },
  {
    icon: Thermometer,
    title: "IoT Sensor Integration",
    description: "Real-time monitoring of temperature, humidity, and soil conditions to predict and prevent issues.",
    color: "text-success"
  },
  {
    icon: Shield,
    title: "Organic Compliance",
    description: "All recommendations are UAE MOCCAE certified organic treatments, ensuring certification compliance.",
    color: "text-warning"
  },
  {
    icon: FileText,
    title: "Automated Reporting",
    description: "Generate certification-ready reports with detailed logs of all treatments and outcomes.",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track treatment effectiveness, crop health trends, and optimization opportunities.",
    color: "text-success"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for field use with responsive design that works perfectly on mobile devices.",
    color: "text-warning"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Farm Management Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for successful organic farming in the GCC region, 
            from AI-powered diagnostics to compliance reporting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card border-border/50 shadow-soft hover:shadow-feature transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link to="/auth">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Start Your Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;