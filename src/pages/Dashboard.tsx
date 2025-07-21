import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Thermometer,
  Droplets,
  Leaf,
  Bug,
  Camera
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Farm Dashboard</h1>
          <p className="text-muted-foreground">Monitor your organic tomato farm status and recent activities</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-success/10 p-2 rounded-lg">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Crop Health</p>
                <p className="text-2xl font-bold text-success">95%</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-warning/10 p-2 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Alerts</p>
                <p className="text-2xl font-bold text-warning">3</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Weekly Growth</p>
                <p className="text-2xl font-bold text-primary">+12%</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-success/10 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Organic Status</p>
                <p className="text-2xl font-bold text-success">Certified</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Environmental Conditions */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Environmental Conditions</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Thermometer className="h-5 w-5 text-primary" />
                  <span>Temperature</span>
                </div>
                <span className="font-semibold">28°C</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  <span>Humidity</span>
                </div>
                <span className="font-semibold">65%</span>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span>Soil Moisture</span>
                  <span className="font-semibold">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Camera className="h-6 w-6" />
                <span>Scan Crop</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Bug className="h-6 w-6" />
                <span>Report Pest</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Leaf className="h-6 w-6" />
                <span>Log Treatment</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <TrendingUp className="h-6 w-6" />
                <span>View Reports</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;