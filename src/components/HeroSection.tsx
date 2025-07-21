import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Leaf, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-farming.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Organic tomato farming in UAE" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success border border-success/20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">UAE MOCCAE Certified Organic</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Autonomous 
              <span className="text-primary-glow"> Organic Farming</span> 
              <br />for the GCC Region
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              AI-powered weed and pest management specifically designed for organic tomato farming in the UAE. 
              Ensure compliance while maximizing yield with smart agriculture technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="text-lg px-8 w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="feature" size="lg" className="text-lg px-8 w-full sm:w-auto">
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-primary-foreground/90">100% Organic Compliant</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <TrendingUp className="h-5 w-5 text-success" />
                <span className="text-primary-foreground/90">30% Yield Increase</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Leaf className="h-5 w-5 text-success" />
                <span className="text-primary-foreground/90">UAE Climate Optimized</span>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6">
            <Card className="p-6 bg-gradient-card border-border/50 shadow-feature hover:shadow-hero transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Smart Weed Detection</h3>
                  <p className="text-muted-foreground mb-4">
                    AI-powered image recognition identifies weed species and suggests organic treatment methods.
                  </p>
                  <Link to="/weed-control">
                    <Button variant="outline" size="sm">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 shadow-feature hover:shadow-hero transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-success/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Pest & Disease Control</h3>
                  <p className="text-muted-foreground mb-4">
                    Combine image analysis with IoT sensors for early detection and organic treatment recommendations.
                  </p>
                  <Link to="/pest-control">
                    <Button variant="outline" size="sm">
                      Explore <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;