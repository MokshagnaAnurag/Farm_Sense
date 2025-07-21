import { Button } from "@/components/ui/button";
import { Leaf, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-primary p-2 rounded-lg">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">FarmSense AI</h1>
            <p className="text-xs text-muted-foreground">UAE Organic Certified</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/weed-control" className="text-foreground hover:text-primary transition-colors">
            Weed Control
          </Link>
          <Link to="/pest-control" className="text-foreground hover:text-primary transition-colors">
            Pest & Disease
          </Link>
          <Link to="/reports" className="text-foreground hover:text-primary transition-colors">
            Reports
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/auth">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <User className="h-4 w-4" />
              Login
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant="hero" size="sm" className="hidden md:flex">
              Get Started
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;